/* Boží Kytky — drobná interaktivita. Bez knihoven. */
(function () {
  'use strict';

  var nav        = document.getElementById('nav');
  var toggle     = document.getElementById('navToggle');
  var menu       = document.getElementById('menu');
  var dock       = document.getElementById('dock');
  var form       = document.getElementById('inquiryForm');
  var status     = document.getElementById('formStatus');
  var year       = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  /* --- Navigace ------------------------------------------------------- */
  /* Průhledná jen úplně nahoře. Jakmile se scrolluje, dostane plné pozadí,
     aby se nekřížila s velkým nadpisem v hero sekci. */
  var onScroll = function () {
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 60);
    if (dock) dock.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.75 && !dockHidden);
  };

  /* Dock se schová, když je poptávkový formulář na obrazovce. */
  var dockHidden = false;
  var inquiry = document.getElementById('poptavka');

  if (dock && inquiry && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      dockHidden = entries[0].isIntersecting;
      onScroll();
    }, { rootMargin: '-25% 0px -25% 0px' }).observe(inquiry);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* --- Pohyb: odkrývání a postupné nabíhání --------------------------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hero = document.querySelector('[data-hero]');
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal], [data-stagger]'));

  /* Dětem ve [data-stagger] rozdáme zpoždění, ať naskakují za sebou. */
  var STEP = 80;   // ms mezi prvky
  var MAX  = 480;  // strop, aby konec mřížky nedržel divně dlouho

  var rozdejZpozdeni = function (box, krok) {
    Array.prototype.slice.call(box.children).forEach(function (child, i) {
      child.style.setProperty('--d', Math.min(i * krok, MAX) + 'ms');
    });
  };

  document.querySelectorAll('[data-stagger]').forEach(function (box) {
    rozdejZpozdeni(box, STEP);
  });
  if (hero) rozdejZpozdeni(hero, 120);

  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
    if (hero) hero.classList.add('is-in');
  } else {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        revealer.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.04 });
    reveals.forEach(function (el) { revealer.observe(el); });

    /* Hero nenačítáme přes observer — spustíme ho hned po vykreslení. */
    if (hero) requestAnimationFrame(function () {
      requestAnimationFrame(function () { hero.classList.add('is-in'); });
    });
  }

  /* Po filtrování galerie přepočítáme zpoždění jen viditelným dlaždicím. */
  window.prepocitejStagger = function (box) {
    var i = 0;
    Array.prototype.slice.call(box.children).forEach(function (child) {
      if (child.hidden) { child.style.removeProperty('--d'); return; }
      child.style.setProperty('--d', Math.min(i * 45, 360) + 'ms');
      i++;
    });
  };


  /* --- Hero: pohyb při odjíždění ------------------------------------------
     Text se při scrollu zvedá a rozpouští, fotka se zároveň mírně přibližuje.
     Počítá se jen přes requestAnimationFrame, ať scroll neseká.
     -------------------------------------------------------------------- */
  var heroEl = document.querySelector('.hero');
  var heroText = document.querySelector('.hero__inner');
  var heroImg = document.querySelector('.hero__media img');

  if (heroEl && heroText && heroImg && !reduce) {
    var ticking = false;

    var kresliHero = function () {
      var vyska = heroEl.offsetHeight || 1;
      var postup = Math.min(1, Math.max(0, window.scrollY / vyska));
      var utlum = postup * postup;            /* zpočátku pomalu, pak rychleji */

      heroText.style.transform = 'translateY(' + (postup * -70) + 'px)';
      heroText.style.opacity = String(Math.max(0, 1 - utlum * 1.6));
      heroImg.style.transform = 'scale(' + (1 + postup * 0.14) + ')';

      ticking = false;
    };

    var naScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(kresliHero);
    };

    window.addEventListener('scroll', naScroll, { passive: true });
    window.addEventListener('resize', naScroll);
    kresliHero();
  }

  /* --- Mobilní menu ---------------------------------------------------- */
  var closeTimer;

  function openMenu() {
    clearTimeout(closeTimer);
    menu.hidden = false;
    requestAnimationFrame(function () { menu.classList.add('is-open'); });
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Zavřít menu');
    document.body.classList.add('is-locked');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Otevřít menu');
    document.body.classList.remove('is-locked');
    closeTimer = setTimeout(function () { menu.hidden = true; }, 400);
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (toggle.getAttribute('aria-expanded') === 'true') closeMenu(); else openMenu();
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 960 && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
    });
  }

  /* --- Poptávkový formulář --------------------------------------------- */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var endpoint = form.getAttribute('data-endpoint');
      var btn = form.querySelector('button[type="submit"]');

      if (endpoint) {
        btn.disabled = true;
        status.textContent = 'Odesílám…';

        fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (res) {
            if (!res.ok) throw new Error(res.status);
            form.reset();
            status.textContent = 'Děkuji, poptávka dorazila. Ozvu se vám co nejdřív zpátky.';
          })
          .catch(function () {
            status.textContent = 'Odeslání se nepovedlo. Napište mi prosím přímo na info@bozikytky.cz.';
          })
          .then(function () { btn.disabled = false; });
        return;
      }

      /* Bez nastaveného endpointu otevřeme předvyplněný e-mail. */
      var lines = [
        'Jméno: '    + (data.get('jmeno')    || ''),
        'E-mail: '   + (data.get('email')    || ''),
        'Telefon: '  + (data.get('telefon')  || '—'),
        'Datum: '    + (data.get('datum')    || '—'),
        'Typ akce: ' + (data.get('typ')      || ''),
        'Místo: '    + (data.get('misto')    || '—'),
        'Rozpočet: ' + (data.get('rozpocet') || '—'),
        '',
        'Představa:',
        (data.get('poznamka') || '—')
      ].join('\n');

      var href = 'mailto:info@bozikytky.cz'
        + '?subject=' + encodeURIComponent('Poptávka — ' + (data.get('typ') || 'floristika'))
        + '&body='    + encodeURIComponent(lines);

      window.location.href = href;
      status.textContent = 'Otevírám váš e-mailový klient s předvyplněnou poptávkou.';
    });
  }

  /* --- Galerie: filtrování ---------------------------------------------- */
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var tiles = Array.prototype.slice.call(document.querySelectorAll('.gtile'));

  if (chips.length && tiles.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var filter = chip.getAttribute('data-filter');

        chips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-pressed', on ? 'true' : 'false');
        });

        tiles.forEach(function (tile) {
          tile.hidden = filter !== 'vse' && tile.getAttribute('data-cat') !== filter;
        });

        var grid = document.getElementById('galGrid');
        if (grid && window.prepocitejStagger) window.prepocitejStagger(grid);
      });
    });
  }

  /* --- Lightbox ---------------------------------------------------------- */
  var lb       = document.getElementById('lightbox');
  var lbImg    = document.getElementById('lbImg');
  var lbCap    = document.getElementById('lbCap');
  var lbCount  = document.getElementById('lbCount');
  var lbClose  = document.getElementById('lbClose');
  var lbPrev   = document.getElementById('lbPrev');
  var lbNext   = document.getElementById('lbNext');

  if (lb && tiles.length) {
    var shots = [];      // aktuálně zobrazené fotky
    var at = 0;
    var opener = null;   // kam vrátit fokus

    var collect = function () {
      shots = tiles.filter(function (t) { return !t.hidden; })
                   .map(function (t) { return t.querySelector('.gtile__btn'); });
    };

    var preload = function (i) {
      var btn = shots[i];
      if (!btn) return;
      var im = new Image();
      im.src = btn.getAttribute('data-full');
    };

    var render = function () {
      var btn = shots[at];
      if (!btn) return;
      lbImg.src = btn.getAttribute('data-full');
      lbImg.alt = btn.getAttribute('data-cap');
      lbCap.textContent = btn.getAttribute('data-cap');
      lbCount.textContent = (at + 1) + ' / ' + shots.length;
      var single = shots.length < 2;
      lbPrev.hidden = single;
      lbNext.hidden = single;
      preload(at + 1);
      preload(at - 1);
    };

    var step = function (dir) {
      at = (at + dir + shots.length) % shots.length;
      render();
    };

    var openLb = function (btn) {
      collect();
      at = Math.max(0, shots.indexOf(btn));
      opener = btn;
      lb.hidden = false;
      render();
      requestAnimationFrame(function () { lb.classList.add('is-open'); });
      document.body.classList.add('is-locked');
      lbClose.focus();
    };

    var closeLb = function () {
      lb.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      setTimeout(function () { lb.hidden = true; lbImg.src = ''; }, 300);
      if (opener) opener.focus();
    };

    tiles.forEach(function (tile) {
      var btn = tile.querySelector('.gtile__btn');
      if (btn) btn.addEventListener('click', function () { openLb(btn); });
    });

    lbClose.addEventListener('click', closeLb);
    lbPrev.addEventListener('click', function () { step(-1); });
    lbNext.addEventListener('click', function () { step(1); });

    /* klepnutí mimo fotku zavírá */
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLb();
    });

    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape')     { closeLb(); }
      if (e.key === 'ArrowRight') { step(1); }
      if (e.key === 'ArrowLeft')  { step(-1); }
    });

    /* přejetí prstem na mobilu */
    var swipeFrom = null;
    lb.addEventListener('touchstart', function (e) { swipeFrom = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (swipeFrom === null) return;
      var dx = e.changedTouches[0].clientX - swipeFrom;
      if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
      swipeFrom = null;
    }, { passive: true });
  }


  /* --- FAQ: otevřená je vždy jen jedna otázka ------------------------- */
  var faqs = Array.prototype.slice.call(document.querySelectorAll('.faq details'));

  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      faqs.forEach(function (other) {
        if (other !== d) other.open = false;
      });
    });
  });

})();
