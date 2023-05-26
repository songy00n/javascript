function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); 


  function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    };
  }

  let counter = makeCounter();
  alert (counter()); // 0 
  alert (counter()); // 1
  alert (counter()); // 2

  let counter1 = makeCounter(); // (독립적인) 다른 렉시컬 환경을 가지고있음
  alert (counter()); // 0
  alert (counter()); // 1
  alert (counter()); // 2

  function Counter(){
    let count = 0;

    this.up = function(){
        return count++;
    }

    this.down = function(){
        return --count;
    }

    alert (counter.up()); // 0 
    alert (counter.up()); // 1
    alert (counter.up()); // 2
    alert (counter.down());// 1
    alert (counter.down()); // 0
    alert (counter.down()); // -1
  }

let phrase = "Hello";
if(true){
    let user = "honggildong";
    function sayHi(){
        alert(`${phrase}, ${user}`);
    }
    sayHi();
}

function sum(a){

return function(b){
    return a+b;
}

}

alert(sum(1),(2)); // 3 = 1 + 2
alert(sum(5),(1)); // 6 + 5 + 1


function isBetween(a,b){
    for(let i=0; i<=b; i++){
        return i;
    }
}

let arr = [1,2,3,4,5,6,7];
alert(arr.filter(isBetween(3,6)));