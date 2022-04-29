function foo() {
    const x = 1;

    function bar() {
        debugger;
        console.log(x);
    }

    bar();
}

foo();