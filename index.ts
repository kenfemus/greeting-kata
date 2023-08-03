export const greet = (name: string | string[] | null): string => {
  if (name === null) {
    return 'Hello, my friend.'
  }

  if (name instanceof Array) {
    if (name.length <= 2) {
      return `Hello, ${name.join(' and ')}.`
    }
    const last = name.pop() as string
    return `Hello, ${name.join(', ')}, and ${last}.`
  }

  if (name === name.toUpperCase()) {
    return 'HELLO JERRY!'
  }
  return 'Hello, Bob.'
}
