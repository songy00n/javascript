// 객체를 만드는 방법
// 1 object를 생성해서 만들기 - 기본
// 2 class를 인스턴스화해서 만들기 - new
// 3 function을 이용해서 만들기 - 함수식을 이용

// 1
const hong1 = {
    name: '홍길동',
    year: 2000,
}

console.log(hong1);
console.log(typeof hong1);

// 2
class Hong2 {
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
const iHong2 = new Hong2('홍길동',2000);
console.log(iHong2);
console.log(typeof iHong2);

// 3
function Hong3(name, year){
    this.name = name;
    this.year = year;
}

const iHong3 =  new Hong3('홍길동',2000);
consosle.log(iHong3);
console.log(typeof iHong3);

