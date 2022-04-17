function foo() {
    console.log("function");
}// 자체 종결성을 갖고 있음
(1);

//IIFE
(function foo() {
    console.log("function");
}(1));

