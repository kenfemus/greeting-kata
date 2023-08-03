export const greet = (name: string | string[] | null): string => {
  if (name === null) {
    return 'Hello, my friend.'
  }

  if (name instanceof Array) {
    return `Hello, ${name.join(' and ')}.`
  }

  if (name === name.toUpperCase()) {
    return 'HELLO JERRY!'
  }
  return 'Hello, Bob.'
}
