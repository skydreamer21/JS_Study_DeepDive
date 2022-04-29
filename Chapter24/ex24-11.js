const increase = (function () { // IIFE 이므로 increase가 런타임에 정의됨과 동시에 실행됨
    let num = 0;
    console.log("IIF executed");
    return function () { // 얘는 즉시 실행 함수가 아니므로 호출이 되야 실행됨
        return ++num;
    };
}());
// 이후에 increase 에는 IIFE를 통해 반환된 함수만 남게됨
// 하지만 그 함수가 num을 참조하고 있기 때문에 IIFE의 렉시컬 환경은 그대로 남아 있음

console.log(increase());
console.log(increase());
console.log(increase());