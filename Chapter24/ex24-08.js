function foo() {
    const x = 1;
    const y = 2;

    function bar() {
        debugger;
        console.log(x);
    }
    return bar;
}

const bar = foo();
bar();