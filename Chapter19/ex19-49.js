// instanceof 함수 -> 재귀 표현
function isInstanceof(instance, constructor) {
    const prototype = Object.getPrototypeOf(instace);

    if(prototype === null) return false;

    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}