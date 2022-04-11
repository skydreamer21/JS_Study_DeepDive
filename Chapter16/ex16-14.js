function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person = {
    name: 'Lee',
    address: {city: 'Seoul'}
};

const person2 = {
    name: 'Lee',
    address: {city: 'Seoul'}
};
Object.freeze(person2);

deepFreeze(person); // 깊은 복사

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));

console.log(Object.isFrozen(person2));
console.log(Object.isFrozen(person2.address));

person.address.city = 'Busan'; // 안바뀜
console.log(person);

person2.address.city = 'Busan'; // 바뀜
console.log(person2);