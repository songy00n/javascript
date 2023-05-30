// setter getter

class Member {
    name;
    score;
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    get nameAndScore(){ // 출력 용도임 - 권장
        return `${this.name}은 ${this.score}점입니다`;
    }
    set setName(name){ // set으로 수정, 십입 비권장 becuz 내장객체를 잘못 변경할 수 있음
        this.name = name;
    }
    set setScore(score){
        this.score = score;
    }
};

const s1 = new Member('홍',100);
const s2 = new Member('강',80);
const s3 = new Member('연',90);

console.log(s1.nameAndScore);
console.log(s2.nameAndScore);
console.log(s3.nameAndScore);

console.log(typeof s3.nameAndScore); // type: string

s1.setName = '신'; // set으로 수정함 - 비권장
s2.setScore = 85; // set으로 수정함 - 비권장

console.log(s1);
console.log(s2);

