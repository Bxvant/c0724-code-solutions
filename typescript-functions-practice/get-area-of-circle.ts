/* exported getAreaOfCircle */

function getAreaOfCircle(radius: number): number {
  return Math.PI * (radius * radius);
}

const getAreaOfCircleResult: number = getAreaOfCircle(4.982787485166879);
console.log('value of getAreaOfCircleResult:', getAreaOfCircleResult);
