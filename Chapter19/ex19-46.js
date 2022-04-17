// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

console.log(me instanceof Person); // true
console.log(me instanceof Function); // false
console.log(me instanceof Object); // true

const parent = {};

Object.setPrototypeOf(me, parent);

console.log(me instanceof Person); // false;

parent.constructor = Person; 
// 연결은 활성화 시켰지만 Person의 prototype에 바인딩되어 있는 객체와 parent 객체는 다름
console.log(me.constructor === Person); // true
console.log(me instanceof Person); // false;

Person.prototype = parent;

console.log(me.constructor === Person); // true
console.log(Person.prototype);
console.log(me);

console.log(me instanceof Person); // true;