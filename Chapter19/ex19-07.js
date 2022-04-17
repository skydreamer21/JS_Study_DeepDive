const person = { name: 'Lee'};

console.log(person.hasOwnProperty('__proto__')); // false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
console.log({}.__proto__ === Object.prototype); // true