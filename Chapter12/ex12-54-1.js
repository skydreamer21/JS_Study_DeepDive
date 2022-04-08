console.log('Hi');

setTimeout (function () {
    console.log('There');
}, 5000);
// 이 함수가 진행 되는 동안 아래줄이 실행됨
// concurrency : 병행성

console.log("callback Asynchronize usage")