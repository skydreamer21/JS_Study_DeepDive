const arr = [1, 2, 3];
arr.x = 10;

console.log(arr);

// for ... in 문 -> 프로퍼티 x도 출력
for (const i in arr) {
    console.log(arr[i]);
}

// 여기서부터는 프로퍼티 x는 출력되지 않음
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(v => console.log(v));

// for ... of 는 키가 아닌 값을 할당 
for (const value of arr) {
    console.log(value);
};

