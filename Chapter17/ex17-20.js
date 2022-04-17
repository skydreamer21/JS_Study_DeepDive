// 스코프 세이프 생성자 패턴
function Circle(radius) {
    if (!(this instanceof Circle)) {
        return new Circle(radius);
        // 이후 코드는 실행되지 않음
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}