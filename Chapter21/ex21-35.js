const uri = "http://example.com?name=이야기job=programmer&teacher";

const enc = encodeURI(uri);
const encComp = encodeURIComponent(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%95%BC%EA%B8%B0job=programmer&teacher

console.log(encComp);
// http%3A%2F%2Fexample.com%3Fname%3D%EC%9D%B4%EC%95%BC%EA%B8%B0job%3Dprogrammer%26teacher

const dec = decodeURI(enc);
const decComp = decodeURIComponent(encComp);
console.log(dec);
// http://example.com?name=이야기job=programmer&teacher
console.log(decComp);
// http://example.com?name=이야기job=programmer&teacher