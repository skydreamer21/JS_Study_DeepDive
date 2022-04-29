const counter = (function () {
    let num = 0;

    return { // 객체 리터럴을 반환
        increase() {
            return ++num;
        },
        decrease() {
            return num>0 ? --num : 0;
        }
    };
}());

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
 
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
console.log(counter.decrease()); // 0
