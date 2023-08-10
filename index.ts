export const greet = (name: string | string[] | null): string => {
  if (name === null) {
    return 'Hello, my friend.'
  }
  const names = name instanceof Array ? name : [name]
  return join(greetMessages(lowerCasesAndUpperCases(names)))
}

const lowerCasesAndUpperCases = (names: string[]): string[][] => {
  const [lowerCases, upperCases] = names.reduce<string[][]>(
    (prev, current) => {
      if (current === current.toUpperCase()) {
        prev[1].push(current)
      } else {
        const lowerCaseNames =
          current.startsWith('"') && current.endsWith('"')
            ? [current.replace(/"/g, '')]
            : current.replace(/ /g, '').split(',')
        prev[0].push(...lowerCaseNames)
      }
      return prev
    },
    [[], []],
  )
  return [lowerCases, upperCases]
}

const lowerCaseGreeting = (name: string[]): string => {
  if (name.length === 0) {
    return ''
  }
  if (name.length <= 2) {
    return `Hello, ${name.join(' and ')}.`
  }
  const last = name.pop() as string
  return `Hello, ${name.join(', ')}, and ${last}.`
}

const upperCaseGreeting = (name: string[]): string => {
  if (name.length === 0) {
    return ''
  }
  if (name.length <= 2) {
    return `HELLO ${name.join(' and ')}!`
  }
  const last = name.pop() as string
  return `HELLO ${name.join(', ')}, and ${last}!`
}

const greetMessages = ([
  lowerCaseNames,
  upperCaseNames,
]: string[][]): string[] => {
  return [lowerCaseGreeting(lowerCaseNames), upperCaseGreeting(upperCaseNames)]
}

const join = (messages: string[]): string => {
  return messages.filter((str) => str).join(' AND ')
}
