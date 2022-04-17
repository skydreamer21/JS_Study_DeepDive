const obj = Object.create(null);
obj.a = 1;

// 직접호출 : 에러발생 (TypeError : obj.hasOwnProperty is not a function)
console.log(obj.hasOwnProperty('a'));

// 간접호출 -> Chapter22 에서 자세히
console.log(Object.prototype.hasOwnProperty.call(obj,'a'));