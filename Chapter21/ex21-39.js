console.log(x); // undefined -> 변수 호이스팅O
// console.log(y); // ReferenceError: y is not defined

var x = 10;

function foo () {
    y = 20;
    console.log(x + y);
}

foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수 삭제되지 않음
delete y; // 암묵적 전역 프로퍼티 삭제 됨

console.log(window.x); // 10
console.log(window.y); // undefined

console.log(window.hasOwnProperty('Infinity'));
console.log(window.hasOwnProperty('name'));
console.log(Object.keys(window));
/* for (const key in window) {
    console.log(key + ': ' + window[key]);
} */
console.log(Object.getOwnPropertyDescriptor(window,'Infinity'));
console.log(Object.getOwnPropertyDescriptor(window,'isNaN'));
console.log(Object.getOwnPropertyDescriptor(window,'NaN'));