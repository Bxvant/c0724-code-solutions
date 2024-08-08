const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log(values);

values.forEach((value) => {
  console.log(value);
});

values.forEach((_, index, array) => {
  console.log(array[array.length - 1 - index]);
});
