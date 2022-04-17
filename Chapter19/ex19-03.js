// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
console.log(circle1.getArea === circle1.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());