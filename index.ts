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
        const lowerCaseNames =
          n.startsWith('"') && n.endsWith('"')
            ? [n.replace(/"/g, '')]
            : n.replace(/ /g, '').split(',')
        lowerCases.push(...lowerCaseNames)
      }
    })
    return [lowerCase(lowerCases), upperCase(upperCases)]
      .filter((str) => str)
      .join(' AND ')
  }

  if (name === name.toUpperCase()) {
    return 'HELLO JERRY!'
  }
  return `Hello, ${name}.`
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
