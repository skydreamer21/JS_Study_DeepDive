// 1. 프로토타입이 null인 객체 생성 -> 프로토타입 체인의 종점에 위치
let obj = Object.create(null);
// Object.prototype을 상속받지 못한다.
console.log(obj.toString()); // TypeError: obj.toString is not a function

// 2. obj = {}; 와 동일
obj = Object.create(Object.prototype);

// 3. obj = { x: 1 }; 과 동일
obj = Object.create(Object.prototype, {
    x: {value: 1, writable: true, enumerable: true, configurable: true }
});
// or
obj = Object.create(Object.prototype);
obj.x = 1;

// 4. 임의의 객체 직접 상속
const myProto = { x: 10 };

obj = Object.create(myProto);
console.log(obj.x); // 10

// 생성자 함수
function Person(name) {
    this.name = name;
}
// 5. obj = new Person('Lee'); 와 동일
obj = Object.create(Person.prototype);
obj.name = 'Lee';
