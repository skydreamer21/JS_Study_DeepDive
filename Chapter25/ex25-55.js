var Animal = (function () {
    function Animal(age,  weight) {
        this.age = age;
        this.weight = weight;
    }

    Animal.prototype.eat = function() {
        return 'eat';
    };

    Animal.prototype.move = function () {
        return 'move';
    };

    return Animal;
}());

// Animal 생성자 함수를 상속하여 확장한 Bird 생성자 함수
var Bird = (function () {
    function Bird() {
        // Animal 생성자 함수에게 this와 인수를 전달하면서 호출
        Animal.apply(this, arguments);
    }
})