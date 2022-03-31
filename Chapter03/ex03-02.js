const arr = [1,2,3];
// arr.forEach(console.log);
arr.forEach(alert);
// 브라우저에서 알림창을 띄우는 alert함수는 브라우저에서만 동작하는 클라이언트 사이드 web API
// 그런데 code runner는 node.js 환경으로 실행하는 것이므로 위의 API를 알 수 없는 Node.js 환경에서는 에러발생
// -> 브라우저에서 실행해야함