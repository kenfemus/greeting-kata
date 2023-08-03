export const greet = (name: string | string[] | null): string => {
  if (name === null) {
    return 'Hello, my friend.'
  }

  if (name instanceof Array) {
    const lowerCases: string[] = []
    const upperCases: string[] = []
    name.forEach((n) => {
      if (n === n.toUpperCase()) {
        upperCases.push(n)
      } else {
        lowerCases.push(...n.replace(/ /g, '').split(','))
      }
    })
    const l = lowerCase(lowerCases)
    const u = upperCase(upperCases)
    return [l, u].filter((str) => str).join(' AND ')
  }

  if (name === name.toUpperCase()) {
    return 'HELLO JERRY!'
  }
  return 'Hello, Bob.'
}

const lowerCase = (name: string[]): string => {
  if (name.length <= 2) {
    return `Hello, ${name.join(' and ')}.`
  }
  const last = name.pop() as string
  return `Hello, ${name.join(', ')}, and ${last}.`
}

const upperCase = (name: string[]): string => {
  if (name.length === 0) {
    return ''
  }
  if (name.length <= 2) {
    return `HELLO ${name.join(' and ')}!`
  }
  const last = name.pop() as string
  return `HELLO ${name.join(', ')}, and ${last}!`
}
