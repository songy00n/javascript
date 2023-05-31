// prototype
// _proto_

const testObj = {};
console.log(typeof testObj);
console.log(testObj._proto_); // 오브젝트명._proto_ 결과는 [Object: null prototype]{}
// 오브젝트명._proto_ -> 해석: testObj가 물려받은 유전자 이름, 부모에게 물려받은 prototype을 참조하기

const testObj2 = {name: 'aa'};
console.log(testObj._proto_);

function Member(name,year){
    this.name = name;
    this.year = year;
}
console.log(Member.prototype); // 결과 {}
// prototype: 부모 입장에서 자손에게 넘겨주고싶은 유전자

console.dir(Member.prototype, {
    showHidden: true,
});

console.log(Member.prototype.constructor == Member);
// Member 객체의 유전자를 가르키는 것 중에서 생성자는 바로 Member 객체임
console.log(Member.prototype.constructor.prototype == Member.prototype);

const hong = new Member('홍길동', 2000);
console.log(hong._proto_); // 상속에서 부모클래스에 해당되는 값
console.log(hong._proto_ === Member.prototype); // true

console.log(testObj._proto_ === Object.prototype);
console.log(Function.prototype._proto_ === Object.prototype);

console.log(hong.toString()); // [object Object]
console.log(Object.prototype.toString()); // [object Object]

function Member2(name, year){
    this.name = name;
    this.year = year;
    this.sayHello = function(){
        return `${this.name}이 인사합니다`;
    }
}

const soon = new Member('홍길순',2000);
const young = new Member('홍길영',2001);

console.log(soon.sayHello());
console.log(young.sayHello());

// sayHello()를 부모한테 재정의함

Member2.prototype.sayHello = function(){
    return `${this.name}이 인사합니다`;
}

const soon2 = new Member('홍길순',2000);
const young2 = new Member('홍길영',2001);
console.log(soon2.sayHello());
console.log(young2.sayHello());

console.log(soon2.sayHello === young2.sayHello); // 값, 주소 같음

