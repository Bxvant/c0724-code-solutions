console.log('Hello World');

const firstDom = document.querySelector('h1');
console.log('value of firstDom', firstDom);
console.dir(firstDom);

const secondDom = document.getElementById('explanation');
console.log('value of secondDom', secondDom);
console.dir(secondDom);

const thirdDom = document.querySelector('.hint');
console.log('value of thirdDom', thirdDom);

const fourthDom = document.querySelectorAll('p');
console.log('value of fourthDom', fourthDom);

const fifthDom = document.querySelectorAll('.example-link');
console.log('value of fifthDom', fifthDom);
