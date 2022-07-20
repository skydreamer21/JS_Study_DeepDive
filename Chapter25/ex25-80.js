class MyArray extends Array {
    // 중복된 배열 요소를 제거하고 반환한다.
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    // 모든 배열 요소의 평균을 구한다.
    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray);

console.log(myArray.uniq());

console.log(myArray.average());