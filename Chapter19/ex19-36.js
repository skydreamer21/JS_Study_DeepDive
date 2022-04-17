const Person = (function () {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
        console.log(`Hi! My name is ${this.name}`);
    };

    return Person;
}());

const me = new Person('Lee');

me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
};

// 프로토타입 메서드가 인스턴스 메서드에 의해 가려진다.
me.sayHello(); // Hey! My name is Lee

delete me.sayHello; // 인스턴스 메서드 삭제

delete me.sayHello; // 무시 (프로토타입 메서드는 삭제 안됨)

delete Person.prototype.sayHello; // 프로토타입 메서드 삭제

me.sayHello(); // TypeError: me.sayHello is not a function
console.log(me.sayHello); // undefined