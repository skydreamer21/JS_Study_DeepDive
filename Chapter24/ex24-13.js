const Counter = (function () {
    let num = 0; // 반환할 Counter의 프로퍼티가 아닌 IIFE의 변수

    function Counter() {

    }

    // increase, decrease 모두 클로져 -> 정의가 평가될 때의 실행중인 실행 컨텍스트 기억
    Counter.prototype.increase = function () {
        return ++num;
    }; 
    Counter.prototype.decrease = function () {
        return num > 0 ? --num : 0;
    };

    return Counter;
}());

const counter = new Counter();
console.log(counter.hasOwnProperty('num'));
console.log(counter.num);

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());