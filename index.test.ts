import { hello } from './index'

describe('First test', () => {
  it('hello', () => {
    expect(hello()).toBe('hello')
  })
})
