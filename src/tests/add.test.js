const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(5, 9);

  if(result !== 14) {
    throw new Error(`You added 5 and 9.The result was ${result}. Expect 14`)
  }
  expect(result).toBe(14)
})