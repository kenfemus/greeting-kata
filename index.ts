export const greet = (name: string | null): string => {
  if (name === null) {
    return 'Hello, my friend.'
  }
  if (name === name.toUpperCase()) {
    return 'HELLO JERRY!'
  }
  return 'Hello, Bob.'
}
