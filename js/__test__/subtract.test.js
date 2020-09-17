// import sum function
const subtract = require('../subtract')

test('properly adds two number', () => {
  expect(
    subtract(1, 2)
  ).toBe(-1)
})