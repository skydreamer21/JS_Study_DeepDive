// <다양한 방식의 함수 호출>
function foo() {
    console.log(this);
}

// 1. 일반적인 함수로서 호출
foo();

// 2. 메서드로서 호출
const obj = { foo };
obj.foo();

// 3. 생성자 함수로서 호출
// 아래의 결과는 inst가 foo와 같은 함수
const inst = new foo();

console.log(typeof inst); // object
console.log(typeof foo); // function