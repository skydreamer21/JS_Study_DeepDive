(increase = function () {
    console.log("IIF executed");
    let num = 0;
    num++;
    console.log(num);
})();
// console.log(increase());
increase();
increase();

const incre = (function () {
    console.log("IIF2 executed");
})();
incre();
incre();
