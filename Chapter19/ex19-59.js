const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log('name' in person); // true
console.log('age' in person); // false
// 상속받은 프로퍼티
console.log('toString' in person); // true
console.log(Reflect.has(person,'address')); // true