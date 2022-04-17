function Person(name) {
    this.name = name;
}

console.log(Person.prototype);
const me = new Person('Lee');
console.log(me);
console.log(me.__proto__ === Person.prototype);
console.log(me.__proto__ === Object.prototype);