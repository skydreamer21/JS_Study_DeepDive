function convertArgsToArray() {
    console.log(arguments);

    // slice 의 this 에 arguments 바인딩
    const arr = Array.prototype.slice.call(arguments);

    console.log(arr);

    return arr;
}

convertArgsToArray(1, 2, 3);