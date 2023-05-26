//기존의 것을 건들지 않고 새로운 객체를 만듦

function sumAll(...x1){
    let sum =0;
    for(let xx1 of x1) sum += xx1;
    return sum;
}

console.log(sumAll(1));
console.log(sumAll(1,2));
console.log(sumAll(1,2,3));

function sumAll(x1, ...x2){
    console.log(x1,x2);
}

sumAll(1);
sumAll(1,2);
sumAll(1,2,3);

function showName(firstName, lastName, ...titles){
    console.log(first.name + ' '+ lastName);
    console.log(titles[0]);
    console.log(tiltes[1]);
    console.log(titles.length);
}

showName('길동','홍','Software engineer','researcher');

const arr1 = [1,2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 전개 1 2

const arr2 = [1,2,3,4,5];
const [n1, n2, ...n5] = arr2;
console.log(n1);
console.log(n5);

const arr4 = [10,20];

const arr6 = [...arr4];
console.log(arr6); // [10,20]

const arr7 = [arr4];
console.log(arr7); //[[10,20]]

const arr8 = [...arr4, ...arr5]; // arr4와 arr5를 합친 배열
console.log(arr8);

let arr = [1,2,3];
let arrCopy = [...arr];

console.log(JSON.stringify(arr)); // 객체를 json 형식으로 변환
console.log(JSON.stringify(arrCopy));
console.log(JSON.stringify(arr)===JSON.stringify(arrCopy)); //true

console.log(arr == arrCopy); // 참조되는 위치가 다르기 때문에 false

arr.push(4);
console.log(arr);
console.log(arrCopy);

//객체 ...
let obj = {a:1, b:2, c:3, d:4, e:5};
let objCopy = {...obj}; // 객체 복사 - 깊은 복사

console.log(JSON.stringify(obj)===JSON.stringify(objCopy)); // true 객체의 내용을 비교함
console.log(obj == objCopy); //false 참조가 다름

obj.f = 6;

console.log(obj);
console.log(objCopy);


