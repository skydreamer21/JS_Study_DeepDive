class Rectangle {
    constructor(width, height) {
        // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this); // ColorRectangle {}
        // new.target이 가리키는 함수 -> new 연산자와 함께 호출된 함수
        console.log(new.target); // ColorRectangle

        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype); // true
        console.log(this instanceof ColorRectangle); //true
        console.log(this instanceof Rectangle); // true
    }
}