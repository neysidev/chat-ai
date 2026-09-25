export function generateRandomId(): string {
  const getRandomSegment = () => Math.random().toString(36).substring(2, 5)
  return `${getRandomSegment()}-${getRandomSegment()}-${getRandomSegment()}`
}
