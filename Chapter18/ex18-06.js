function sum() {
    let res = 0;

    // 매개변수의 개수만큼 모두 더하자
    for (let i = 0; i<arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

