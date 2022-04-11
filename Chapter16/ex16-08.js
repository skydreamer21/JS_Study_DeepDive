const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
});

// 데이터 프로퍼티의 프로퍼티 어트리뷰트가 지정이 안되어있을 경우
// undefined, false 가 기본 값
Object.defineProperty(person, 'lastName', {
    value: 'Lee'
});

let descriptor = Object.getOwnPropertyDescriptor(person,'firstName');
console.log(descriptor);

let descriptor2 = Object.getOwnPropertyDescriptor(person,'lastName');
console.log(descriptor2);

// lastName 도 key 지만 enumerable이 false기 때문에 Object.keys에서 나타나지 않음
console.log(Object.keys(person));

// lastName은 writable이 false이기 때문에 값이 변경되지 않음
// 이때 에러는 발생하지 않고 그냥 무시된다.
person.lastName = 'Kim'; // 무시
person.firstName = 'James';
descriptor = Object.getOwnPropertyDescriptor(person,'firstName');
console.log(descriptor);
descriptor2 = Object.getOwnPropertyDescriptor(person,'lastName');
console.log(descriptor2);

delete person.lastName; // 무시됨. configurable: false
descriptor2 = Object.getOwnPropertyDescriptor(person,'lastName');
console.log(descriptor2);

// 에러발생 configurable: false 재정의 불가
// Object.defineProperty(person, 'lastName', {enumerable:true});


// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`; 
    },

    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable:true,
    configurable:true
});

let descriptor3 = Object.getOwnPropertyDescriptor(person,'fullName');
console.log(descriptor3);

console.log(person);
person.fullName = 'Imac Oli';
console.log(person);
