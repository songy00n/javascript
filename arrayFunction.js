// 배열 Array Function

let ineMember = [
    '홍길동', '이순신','강감찬', '을지문덕', '연개소문'
];

console.log(ineMember);
console.log(typeof ineMember); // object

// 신사임당 추가하기
ineMember.push('신사임당');
console.log(ineMember);

// 신사임당 삭제하기
ineMember.pop();
console.log(ineMember);

// 제일 앞에 있는 홍길동 삭제
ineMember.shift();
console.log(ineMember);

//제일 앞에 연개소문 추가
ineMember.unshift('연개소문');
console.log(ineMember);


// 2번 인덱스에서 4번 인덱스 미만
console.log(ineMember.slice(2,4));

// 배열 2개를 합치기
let venMember = ['김홍도', '신윤복'];
ineMember = ineMember.concat(venMember);
console.log(ineMember);

let copyineMember = ineMember;
console.log(copyineMember === ineMember); // true
console.log(copyineMember == ineMember); // true

ineMember.sort(); // ㄱㄴㄷ순으로 오름차순으로 정렬
console.log(ineMember);

ineMember.reverse(); // 내림차순 정렬
console.log(ineMember);

let numbers = [1,9,7,5,3];
numbers.sort();
console.log(numbers);

// 사용자 정의 sort
// a===b면 0을 리턴함 / a>b면 양수(0, 음수를 재외한 것)를 리턴함 / a<b면 음수를 리턴함
numbers.sort((a,b) => {return a>b? 1: -1}); // sort()와 같음
console.log(numbers);

numbers.sort((a,b) => {return a>b? a-b: a-b}); // sort()와 같음
console.log(numbers);

numbers.sort((a,b) => {return a>b? -1: 1}); // reverse()와 같음
console.log(numbers);

let sArr = ['cc','aa','AA','CC'];
sArr.sort((a,b) => {return a>b? a-b: -1}); // sort - 대문자 소문자순
console.log(sArr);

sArr.sort((a,b) => {return a>b? -1: 1}); // reverse - 소문자 대문자순
console.log(sArr);

// map 함수
console.log(ineMember.map((x, i) => {
    if(x==='이순신'){
        return `${i+1}번째 친구 ${x} 안녕!`;
    } else{
        return `${i}번쩨 친구 '${x} 잘가!`;
    }
}));

// filter 함수: 조건이 참인 것의 배열 요소를 리텀함
// let numbers2 = [1,9,7,5,5,3];
// 3의 배수인 3, 9 출력
let numbers2 = [1,9,7,5,5,3];
console.log(numbers2);
console.log(numbers2.filter(x=> x%3 === 0));

// let sArr = ['cc','aa','AA','CC'];
// 'aa', 'AA'를 리턴
console.log(sArr.filter(x=> x.toUpperCase() === 'AA'));

// find 함수
//let ineMember = [
//    '홍길동', '이순신','강감찬', '을지문덕', '연개소문'
// ];
// '연개소문' 찾기
console.log(ineMember.find((name)=> name === '연개소문'));

// '연개소문'의 인덱스 번호를 찾고싶음
console.log(ineMember.findIndex((name)=> name === '연개소문'));

// let numbers2 = [1,9,7,5,5,3]; 모두 곱하기
console.log(numbers.reduce((a,b)=> a*b, 1));

