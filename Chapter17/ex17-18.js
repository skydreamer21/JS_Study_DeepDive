// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle = Circle(5); // 일반함수로 호출 -> this는 window에 바인딩

// Circle 함수에 return문이 없으므로 암묵적으로 undefined 반환
console.log(circle); // undefined

// window가 바인딩된 객체이므로 안의 프로퍼티는 모두 전역
console.log(radius);
console.log(getDiameter());

// circle은 undefined
circle.getDiameter(); // TypeError