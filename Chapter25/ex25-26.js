class Person {
    constructor (name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    }

    // 정적 메서드
    static sayHi() {
        console.log('Hi!');
    }
}

console.dir(Person.sayHi);
const me = new Person('Lee');
console.dir(me.sayHello);