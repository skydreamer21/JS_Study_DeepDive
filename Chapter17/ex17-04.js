function Circle(radius) {
    // this : 생성자 함수 Circle이 생성할 인스턴스
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius * Math.PI;
    };
}

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1);
console.log(circle2);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());