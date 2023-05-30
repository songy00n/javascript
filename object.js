// 객체

let hana = {
    name: "홍길동",
    group: "하나은행 IT",
    work: function(){
        return `풀스택 개발`;
    } 
};

console.log(hana);
console.log(hana.name);
console.log(hana['name']);
console.log(hana.work());

const key = 'name';
console.log(hana[key]); // 홍길동
console.log(hana.key); // undefined

const nameKey = 'name'; 
const nameValue = '이순신';
const groupKey = 'group';
const groupName = '빅데이터처리';

let hana2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    work: function(){
        return group `${this.name}님이 ${this.group} 일을 합니다`;
    }
}

console.log(hana2);
console.log(hana2[nameKey]);
console.log(hana2[groupKey]);
console.log(hana2.work());

// group을 '오라클 튜닝'으로 바꾸기
hana2['group'] = '오라클 튜닝';
console.log(hana2.work()); // 이순신님이 오라클 튜닝 일을 합니다

// pay : 500
// 이순신님은 500만원 급여를 받습니다
hana2['pay'] = 500;
console.log(`${hana2.name}님은 ${hana2.pay}만원 급여를 받습니다`);

// const로 선언한 객체의 특징
// 1 const로 선언할 경우 객체 자체를 변경할 수 없음
// 2 객체 안의 프로퍼티나 메서드는 변경할 수 있음

const hong = {
    name: '홍길동',
    group: '하나은행',
}

console.log(hong);
hong['name'] = '홍길동';
console.log(hong);
hong['pay'] = 500;
console.log(hong);

// 1 const로 선언할 경우 객체 자체를 변경할 수 없음
const hong = {
    age: 25,
}

console.log(hong); // error

// 모든 키 값을 가져오기
console.log(Object.keys(hong)); // hong 객체의 모든 키 값을 가져옴

// 모든 values 값을 가져오기
console.log(Object.values(hong)); // hong 객체의 모든  values 값을 가져옴

// 객체 키와 값이 동일한 변수이면 name: name, age: age를 name, age로 써도 됨
const name = '홍길동';
const age = 23;

let hong2 = {
    name: name,
    age: age,
};

let hong3 = {
    name,
    age,
};




