// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function() {};
console.log(anonymousFunc.name); 
// -> ES5 : 빈 문자열, ES6 : anonymousFunc

// 함수 선언문
function bar() {}
console.log(bar.name); // bar