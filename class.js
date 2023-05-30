// class: 객체를 만들기 위한 틀, 설계도
class Member {
    // 멤버
    name;
    age;

    // 생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // 메서드
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다 나이는 ${this.age}입니다`;
    }
}

const hongClass = new Member('홍길동', 26);
const leeClass = new Member('이순신', 29);
const kangClass = new Member('강감찬', 28);
const yeonClass = new Member('연개소문', 27);

console.log(hongClass); // {name: '홍길동', age: 26}
console.log(leeClass.name);
console.log(kangClass.sayName());
console.log(typeof yeonClass); // object



