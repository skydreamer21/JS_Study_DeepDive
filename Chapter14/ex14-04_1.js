var foo = 10;

function ab() {
    var num = 1;
    foo++;
} // ab라는 함수를 전역에 추가하는 것
// 만약에 다른 파일에 ab라는 함수가 있으면 충돌

ab();
console.log(foo);
console.log(num);