(increase = function () {
    let num = 0;
    console.log("IIF executed");
    return function () {
        debugger;
        return ++num;
    };
}());

console.log(increase());
console.log(increase());
console.log(increase());
console.dir(increase);