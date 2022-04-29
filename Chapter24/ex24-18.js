const Person = (function () {
    let _age = 0;

    function Person(name, age) {
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    }; // 생성자 함수의 this 바인딩 적용

    return Person;
}());

const me = new Person('Lee',20);
const you = new Person('Kim',30);
me.sayHi(); // _age가 30으로 나옴
