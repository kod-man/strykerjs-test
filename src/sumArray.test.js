import sumArrayItems from './sumArray';

it('should return 0 if there is no items in array', () => {
  const result = sumArrayItems([]);
  expect(result).toBe(0);
});

// it('should return value if there is  items in array', () => {
//   const result = sumArrayItems([1, 3, 5]);
//   expect(result).toBe(9);
// });
