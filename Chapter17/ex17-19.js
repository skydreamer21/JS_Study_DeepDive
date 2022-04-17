// 생성자 함수
function Circle(radius) {
    if (!new.target) {
        return new Circle(radius);
        // 이후 코드는 실행되지 않음
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle = Circle(5); // new가 없지만 생성자 함수로 호출
console.log(circle.getDiameter);


