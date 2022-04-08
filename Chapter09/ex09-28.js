var str = '';

var length = str && str.length;

console.log(length);
// '' 가 false로 평가되어 길이를 참조하지 못함

// 그러나 옵셔널 체이닝 연산자는 falsy라도 null이나 undefined가 아니라면 참조를 이어감
length = str?.length; // -> 0