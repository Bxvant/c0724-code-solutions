import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

test('returns a new array with only even numbers', () => {
  expect(evenNumbers([10, 19, 7, 20])).toStrictEqual([10, 20]);
});

test('converts a number into a $0.00 format', () => {
  expect(toDollars(5)).toBe('$5.00');
});

test('divides each integer in an array, first arg, by a divisor, 2nd arg', () => {
  const array = [2, 4];
  expect(divideBy(array, 2)).toStrictEqual([1, 2]);
});

test('multiplies the keys in an object with a number value, by a multiplier', () => {
  const obj = {
    potato: 1,
    lettuce: '4',
    broccoli: 10,
  };

  const newObj = {
    potato: 2,
    lettuce: '4',
    broccoli: 20,
  };
  expect(multiplyBy(obj, 2)).toStrictEqual(newObj);
});
