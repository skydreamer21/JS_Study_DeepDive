function Foo(name) {
    this.name = name;
}

// 정적 메서드로 사용 가능
// 인스턴스 만들어서 쓸수있고, 프로토타입 함수 자체로도 쓸 수 있다.
Foo.prototype.x = function () {
    console.log('x');
};

const foo = new Foo();

foo.x(); // x

// 정적 메서드
Foo.x = function () {
    console.log(`x ${this.name}`);
};

Foo.x(); // x