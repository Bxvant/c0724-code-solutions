/* exported initial */

function initial(array: any[]): any[] {
  const newArray2: any[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray2.push(array[i]);
  }
  return newArray2;
}
