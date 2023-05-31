// 클래스 상속

class Member {
    #name; // #은 private애 해당함, 접근 제한자가 자신 클래스만 되는 것
    year;
    constructor(name, year){
    this.#name = name;
    this.year = year;
    }
    get name(){
        return `${this.#name}`
    }
}

const iN = new Member('홍길동',2000);
console.log(iN); // year: 2000
console.log(iN.name); 

console.log('-----------------');

class Member1{
    name; 
    year;
    constructor(name, year){
    this.name = name;
    this.year = year;
    }
}

// 상속
class FemaleMember extends Member1{
    work(){
        return `여자 멤버는 DB를 합니다`
    }
}

class MaleMember extends Member1{
    work(){
        return `남자 멤버는 프론트를 합니다`
    }
}

const ifm = new FemaleMember('홍길순',2000);
const im = new MaleMember('홍길동', 2001);
console.log(ifm);
console.log(im);

console.log(ifm.work());
console.log(im.work());

console.log(ifm instanceof Member1); // true - ifm의 변수는 Member1 클래스의 인스턴스(객체)를 참조
console.log(im instanceof Member1); // true
console.log(ifm instanceof FemaleMember); // true
console.log(im instanceof MaleMember); // true

console.log('---------');

// super: 부모 클래스의 멤버를 가리키는 것
// override(재정의): 자식이 부모의 메서드를 고쳐 사용하는 것

class Member2 {
    name; 
    year;
    constructor(name, year){
    this.name = name;
    this.year = year;
    }
    sayHello(){
        return `안녕하세요 ${this.name}입니다`
    }
}

class MemberChild extends Member2 {
    part;
    constructor(name, year, part){
        super(name, year); // 부모 생성자 호출하기
        this.part = part;
    }
    // 오버라이딩
    sayHello(){
        return `안녕하세요 자식 클래스입니다 ${this.name}, ${super.name}, ${this.part}입니다`;
    }
}

const m2 = new Member2('부모명', 2000);
const mc2 = new MemberChild('자식명',2001, 'IT');

console.log(m2);
console.log(mc2);
console.log(m2.sayHello());
console.log(mc2.sayHello());

