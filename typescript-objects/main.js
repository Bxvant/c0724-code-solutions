'use strict';
const student = {
  firstName: 'Bryant',
  lastName: 'Mendoza',
  age: 22,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'cook';
console.log('value of student', student);
console.log('typeof student', typeof student);
const myVehicle = {
  make: 'Honda',
  model: 'civic',
  year: 2014,
};
myVehicle['color'] = 'grey';
myVehicle['isConvertible'] = false;
console.log('vehicle color', myVehicle['color']);
console.log('isConvertible', myVehicle['isConvertible']);
console.log('value of vehicle', myVehicle);
console.log('typeof vehicle', typeof myVehicle);
const Dog = {
  name: 'rocky',
  kind: 'shi-zu',
};
const doggy = Dog;
delete doggy.name;
delete doggy.kind;
console.log('value of pet', doggy);
console.log('typeof pet', typeof doggy);
