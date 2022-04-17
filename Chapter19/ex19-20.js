console.log(Person.prototype); // {constructor: ƒ}
// console.log(foo.prototype);
// Uncaught ReferenceError: Cannot access 'foo' before initialization

function Person(name) {
    this.name = name;
}

const foo = function (name) {
    this.name = name;
};
console.log(foo.prototype); // {constructor: ƒ}