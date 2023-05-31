// property attribute
// 1 데이터 프로퍼티: 키와 값에 대한 속성들
// 2 access 프로퍼티: set과 get에 대한 속성들
// 자체적으로 값을 가지고있지않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티

const hong = {
    name: '홍길동',
    year: 2000,
}
console.log(Object.getOwnPropertyDescriptor(hong, year));
// 세밀하게 프로퍼티를 조정하기 위해서 사용
// {value: '홍길동', writable: true, enumerable: true, configurable: true}
// writable: 값을 수정할 수 있는지 여부, false: 수정 못하게 함
// enumerable: 열거가 가능한지 여부, for ~ in 등으로 사용할 수 있음
// configurable: 재정의가 가능한지 여부, false인 경우 프로퍼티를 삭제하거나 변경 금지 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능
console.log(Object.getOwnPropertyDescriptor(hong));

const hong2 = {
    name: '홍길동',
    year: 2000,
    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear - this.age;
    }
};
console.log(hong2);
console.log(hong2.age);
hong2.age = 23;
console.log(hong2.year);

console.log(Object.getOwnPropertyDescriptor(hong2, 'age'));

// 재정의하기 height 추가하기
Object.defineProperties(hong2,'height', {
    value: 175,
    writable: true,
    enumerable: true,
     configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(hong2,'height'));
hong2.height = 180; // 수정이 됨
console.log(Object.getOwnPropertyDescriptor(hong2,'height'));

// writable false 만들기
console.log('---------------');
Object.defineProperties(hong2, 'height', {
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(hong2,'height'));
hong2.height = 170; // 수정이 안됨
console.log(Object.getOwnPropertyDescriptor(hong2,'height'));

// enumerable false로 만들기
console.log('---------------');
console.log(Object.keys(hong2)); // ['name', 'year','age', 'height']
Object.defineProperties(hong2, 'name', {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(hong2, 'name'));
for(let key in hong2){
    console.log(key);
}