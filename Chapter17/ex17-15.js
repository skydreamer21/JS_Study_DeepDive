// constructor

// 1. 함수 선언문
function foo() {}

// 2. 함수 표현식
const bar = function () {};

// ** 프로퍼티 값으로 할당된 함수는 일반 함수 (ECMAScript 사양에서 메서드로 인정X)
const baz = {
    x: function () {}
};

new foo();
new bar();
new baz.x;

const descriptor = Object.getOwnPropertyDescriptor(window,'foo');
console.log(descriptor);
console.log(Object.getOwnPropertyDescriptors(foo));


// non-constructor

// 1. 화살표 함수
const arrow = () => {};
console.log(Object.getOwnPropertyDescriptors(arrow));

new arrow(); // typeError : arrow is not a constructor

// 2. 메서드 축약 표현
const obj = {
    x() {}
};

new obj.x(); // typeError : arrow is not a constructor