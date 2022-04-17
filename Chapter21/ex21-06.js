const str = 'hello';

// 원시 타입인 문자열이 래퍼 객체인 String으로 변환
// 이때 str의 값은 래퍼 객체의 내부슬롯 [[StringData]]에 할당
console.log(str.length);
// 식별자 str은 다시 내부슬롯 [[StringData]] 에 할당된 원시값을 갖는다.
// 생성되었던 래퍼객체는 아무도 참조하지 않는 상태이믈 가비지 컬렉션의 대상이 된다.

// 위와 같은 과정 반복
str.name = 'Lee';

// 위와 같은 과정 반복
console.log(str.name); // undefined

// 위와 같은 과정 반복
console.log(typeof str, str); // string hello