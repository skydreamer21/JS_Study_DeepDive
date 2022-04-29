function getThisBinding() {
    console.log(arguments);
    return this;
}

const thisArg = { a: 1 };

// apply 메서드
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));

// call 메서드
console.log(getThisBinding.call(thisArg, 1, 2, 3));