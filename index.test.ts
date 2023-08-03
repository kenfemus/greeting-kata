import { greet } from './index'

describe('Greeting Kata', () => {
  it('Requirement 1: when name is "Bob", the method should return a string "Hello, Bob."', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
  })

  it('Requirement 1.1', () => {
    expect(greet('Alice')).toBe('Hello, Alice.')
  })

  it('Requirement 2: when name is null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe('Hello, my friend.')
  })

  it('Requirement 3: When name is all uppercase, then the method should shout back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet('JERRY')).toBe('HELLO JERRY!')
  })

  it('Requirement 4: when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
  })

  it('Requirement 5: when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe(
      'Hello, Amy, Brian, and Charlotte.',
    )
  })

  it('Requirement 6: when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
      'Hello, Amy and Charlotte. AND HELLO BRIAN!',
    )
  })

  it('Requirement 7: when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne."', () => {
    expect(greet(['Bob', 'Charlie, Dianne'])).toBe(
      'Hello, Bob, Charlie, and Dianne.',
    )
  })

  it('Requirement 8: when name is ["Bob", ""Charlie, Dianne""], then the method should return the string "Hello, Bob and Charlie, Dianne."', () => {
    expect(greet(['Bob', '"Charlie, Dianne"'])).toBe(
      'Hello, Bob and Charlie, Dianne.',
    )
  })
})
