import { greet } from './index'

describe('Greeting Kata', () => {
  it('Requirement 1: when name is "Bob", the method should return a string "Hello, Bob."', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
  })

  it('Requirement 2: when name is null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe('Hello, my friend.')
  })

  it('Requirement 3: When name is all uppercase, then the method should shout back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet('JERRY')).toBe('HELLO JERRY!')
  })
})
