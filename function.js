// 함수식
function calc(){
    console.log(3+10/5*2);
}

calc();

// 함수 표현식
let calc1 = function(){
    console.log(3+10/5*2);
}

calc1();

// 화살표 함수
let calc2 = () => {
    console.log(3+10/5*2);
}

calc2();

const multiply2 = (x,y) => {
    return x*y;
}

console.log(multiply2(3,5));


// 고차함수
function multiply3(){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}

// 출력 결과 x:3 y:4 z:5
console.log(multiply3(3)(4)(5));

// 출력 결과 17 = 3*4+5
function multiply4(x){
    return function(y){
        return function(z){
            let result = x*y+z;
            return `${result}`;
        }
    }
}

console.log(multiply4(3)(4)(5));

// 제일 큰 수 5가 출력
function multiply5(x){
    return function(y){
        return function(z){
            let max = (x>y) ? x:y;
            let result = (max<z)? z:max;
            return `${result}`;
        }
    }
}

console.log(multiply4(3)(4)(5));

// ... 연산자, reduce 함수 사용
let multiplyAll(...args) => {
    return Object.values(args).reduce((a,b) => a*b,1 );

}
console.log(multiplyAll(3,4,5,6)); // 모두 곱해서 출력

console.log(multiplyAll(1,2,3,4,5,6,7,8)); // 모두 곱해서 출력
