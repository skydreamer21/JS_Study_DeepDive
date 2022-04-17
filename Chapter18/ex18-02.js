function square(number) {
    return number * number;
}

console.dir(square);

console.log(square.hasOwnProperty('__proto__')); // false
console.log(square.__proto__ === Object.prototype); // false
console.log(square.__proto__);

const foo = function (num) {
    return num * num;
};

console.dir(foo);

console.log(foo.hasOwnProperty('__proto__')); // false
console.log(foo.__proto__ === Object.prototype); // false

const obj = { a: 1 };

console.dir(obj);

console.log(obj.hasOwnProperty('__proto__')); // false
console.log(obj.__proto__ === Object.prototype); // true

// 아직 결과 이해 못함 19장 하고 다시 ㄱ