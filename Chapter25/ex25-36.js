class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter 함수 
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('Ungmo', 'Lee');

console.log(`${me.firstName} ${me.lastName}`);

// setter 함수 호출
me.fullName = 'Heegun Lee';
console.log(me);

// getter 함수 호출
console.log(me.fullName);

console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));
// {enumerable: false, configurable: true, get: ƒ, set: ƒ}

console.log(Object.getPrototypeOf(me));
console.dir(Person);
