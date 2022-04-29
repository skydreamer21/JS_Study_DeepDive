function Person(name, age) {
    this.name = name;
    let _age = age;

    this.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. and I am ${_age}.`);
    };
}

const me = new Person('Lee', 20);
me.sayHi();
console.log(me.name);
console.log(me._age);
console.log(me);

const you = new Person('Kim', 30);
you.sayHi();
me.sayHi();