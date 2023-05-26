function makeCounter(){
    let count = 0;

    return function(){ //내부함수 익명형함수
        return count++;
    };
}

let count = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function f(){
    let value = 123;
    return function(){
        debugger;
        console.log(value);
    }
}
let g=f(); // g.[[Environment]]에 f() 호출시 만들어짐

f();

