import {getPercents} from '../getPercents'

describe('tests for getPercents function', () => {
  it('should calculated correctly percentage', () => {
    expect(getPercents(30, 200)).toBe(60)
    expect(getPercents(1, 500)).toBe(5)
    expect(getPercents(0, 200)).toBe(0)
  })
})
