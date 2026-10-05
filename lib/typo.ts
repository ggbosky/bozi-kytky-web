// Česká typografie: jednopísmenné předložky a spojky (k, s, v, z, o, u, a, i)
// nesmí zůstat na konci řádku — za ně se vkládá pevná mezera.
export function cz(text: string) {
  return text.replace(/(?<=^|[\s („"])([ksvzouaiKSVZOUAI]) /g, "$1 ")
}
