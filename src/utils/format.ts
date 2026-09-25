const units = ["B", "KB", "MB", "GB", "TB", "PB"] as const

export function formatBytes(bytes: number | string): string {
  const parsedBytes = typeof bytes === "string" ? parseFloat(bytes) : bytes

  if (!parsedBytes || isNaN(parsedBytes)) return "0 B"

  let i = 0
  let value = parsedBytes

  while (value > 1024 && i < units.length - 1) {
    value /= 1024
    i++
  }

  return `${value.toFixed(1)} ${units[i]}`
}
