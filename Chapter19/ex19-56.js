function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

Person.staticProp = 'static prop';

Person.staticMethod = function() {
    console.log('staticMethod');
};

console.log(Person.prototype);

const me = new Person('Lee');

// 인스턴스 없이도 호출 가능
Person.staticMethod();

// 인스턴스에서는 정적 메서드 참조 불가
me.staticMethod; // TypeError