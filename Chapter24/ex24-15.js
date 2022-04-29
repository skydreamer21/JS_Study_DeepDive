// 함수를 반환하는 고차 함수
const counter = ( function () {
    let counter = 0;

    return function (predicate) {
        counter = predicate(counter);
        return counter;
    };
}());

function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));
console.log(counter(decrease));