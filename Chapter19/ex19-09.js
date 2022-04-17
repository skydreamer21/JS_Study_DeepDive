const obj = Object.create(null);
console.log(obj);

const obj1 = {};
console.log(obj1);

console.log(obj.__proto__); // undefined
console.log(obj1.__proto__); // 프로토타입 나옴.