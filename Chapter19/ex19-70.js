const sym = Symbol();

const person = {
    name:'Lee',
    address: 'Seoul',
    __proto__: {age: 20},
    2: 2,
    3: 3,
    1: 1,
    [sym]: 10
};

for (const key in person) {
    // if (!person.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person[key]);
}