var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (id) { // IIFE의 독자적인 스코프를 만들어서 해결
        return function() { return id; }; // IIFE의 id 를 기억하는 클로저
    }(i));
}

for (var j = 0; j<funcs.length; j++) {
    console.log(funcs[j]());
}