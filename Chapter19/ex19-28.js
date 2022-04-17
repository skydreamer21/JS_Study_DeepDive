function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};
console.log(Person.prototype);

const me = new Person('Lee');
const you = new Person('Kim');

me.sayHello();
you.sayHello();

console.log(Function.prototype);
console.log(Function.prototype === Object.prototype);


console.log(Object.prototype.hasOwnProperty.call(me, 'name'));
// me : hasOwnProperty의 this 로 쓰일 객체 전달
// 'this' hasOwnPerperty로 검색할 프로퍼티