function sayHiBye(firstName, lastName) {

    // 헬퍼(helper) 중첩 함수
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }

  function sayHiBye(fn, In){
    function getFullName(){
        return fn + "" + In;
    }
    console.log("Hello, "+sayHiBye('a','b')); //undefined

    console.log("Hello, "+getFullName()); //error

  }