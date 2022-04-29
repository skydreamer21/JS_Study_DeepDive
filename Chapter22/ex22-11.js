var value = 1;

const obj = {
    value: 100,
    foo () {
        // this 바인딩(obj)을 변수 that에 할당
        const that = this;

        setTimeout(function () {
            console.log(that.value); // 100
        }, 100);
    }
};

obj.foo();