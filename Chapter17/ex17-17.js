function add(x, y) {
    return x + y;
}

let inst = new add(); // 생성자 함수로 호출

console.log(inst); // add 함수가 객체를 반환하지 않았으로 빈 객체 {} 반환