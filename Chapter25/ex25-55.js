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
})