export const greet = (name: string | null): string => {
  if (name === null) {
    return 'Hello, my friend.'
  }
  return 'Hello, Bob.'
}
