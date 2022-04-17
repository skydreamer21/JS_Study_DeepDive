const obj = {};
// console.log(obj); 여기서도 나오는 이유는 obj 그 객체가 아니라 식별자 (주소, 참조) 기 때문
const parent = { x: 1 };

// getter 함수인 get __proto__ 가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;   

console.log(obj.x); // undefined

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj); 
console.log(obj.x); // 1