var value = 1;

const obj = {
    value : 100,
    foo() {
        console.log("foo's this: ", this); // {value : 100, foo: f}
        
        // 콜백 함 새 내부의 this에는 전역 객체가 바인딩된다.
        setTimeout(function () {
            console.log("callback's this: ", this); // window
            console.log("callback's this.value: ", this.value); // 1
        }, 100);
    }
};

obj.foo();