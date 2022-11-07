import {createAdder} from '../createAdder'

describe('tests for createAdder function', () => {
  const add5 = createAdder(5)
  const add9 = createAdder(9)
  it('should calculated correctly sum', () => {
    expect(add5(5)).toBe(10)
    expect(add5(12)).toBe(17)
    expect(add9(12)).toBe(21)
  })
})
