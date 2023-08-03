import { greet } from './index'

describe('Greeting Kata', () => {
  it('Requirement 1: when name is "Bob", the method should return a string "Hello, Bob."', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
  })
})
