// 객체 복사
// copy of value: 값 복사 -> 변수 프로퍼티 특징: 다른 별도의 메모리 공간으로, 수정해도 독립적임
// copy of reference: 참조(주소) 복사 -> 객체 특징: 같은 메모리 주소를 복사하여 수정하면 종속적임

let original = "안녕";
let clone = original;

console.log(original);
console.log(clone);

clone += '하세요';
console.log(original);
console.log(clone);

let objOri = {
    hello: '안녕',
};

let cloneObj = objOri; // copy of reference 참조 복사
console.log(objOri['hello']);
console.log(cloneObj['hello']);

cloneObj['hello'] += '안녕하세요!';
console.log(objOri['hello']); // 안녕하세요!
console.log(cloneObj['hello']); // 안녕하세요!






