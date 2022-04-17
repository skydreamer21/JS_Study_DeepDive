const obj = {};
console.log(obj.constructor); 

const add = function (a, b) { return a + b; };
console.log(add.constructor);

const arr = [1, 2, 3];
console.log(arr.constructor);


const regexp = /is/ig;
console.log(regexp.constructor);