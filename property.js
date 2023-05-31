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

// configurable을 false로 만들기
console.log('-----------------');
Object.defineProperties(hong2, 'height', {
    writable: true,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(hong2,'height'));

Object.defineProperties(hong2, 'height', {
    value: 178, // 바뀜
});

console.log(Object.getOwnPropertyDescriptor(hong2,'height'));

Object.defineProperties(hong2, 'height', {
    writable: false, 
});
// writable: false, cofigurable: false면 Object.definedProperty 사용 못함
Object.defineProperties(hong2, 'height', {
    value: 188, // 안바뀜
});

console.log(Object.getOwnPropertyDescriptor(hong2,'height'));

const hong10 = {
    name: '홍길동',
    year: 2000,
    get age(){
        return new Date().getFullYear - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};

console.log(hong10);

// extensible: 확장 가능 false로 하면 추가는 안되고 삭제만 됨
console.log(Object.isExtensible(hong10)); // true
hong10['position'] = 'developer';
console.log(hong10);
Object.preventExtensions(hong10); // 확장을 막음
hong10['position'] = 'developer'; // 확장을 할 수 없음
console.log(hong10);


// seal: 밀봉하기, 추가나 삭제 안됨
console.log(Object.isSealed(hong10)); // false
Object.seal(hong10);
console.log(Object.isSealed(hong10)); // true

// 값을 추가하기
hong10['groupname'] = hana;
console.log(hong10);

// 값을 삭제하기
delete hong10['name'];
console.log(hong10);

// 밀봉된 것을 해제하기
Object.defineProperties(hong10, 'name', {
    writable: true,
});


// freeze: 가장 높은 등급 동결하기
console.log(Object.isFrozen(hong10));
Object.freeze(hong10);

// 상위 객체{하위객체} 상태인데 상위 객체를 동결했다면 하위 객체도 동결되지는 않음
const hong11 = {
    name: '홍길동',
    year: 2000,

    subhong11: {
        name: '아들 홍길동',
        year: 2020, 
    }
}

Object.freeze(hong11);
console.log(Object.isFrozen(hong11)); // true
console.log(Object.isFrozen(hong11['subhong11'])); // false

// 하위 객체 동결시키면 상위 객체 동결되지는 않음
const hong12 = {
    name: '홍길동',
    year: 2000,

    subhong12: {
        name: '아들 홍길동',
        year: 2020, 
    }
}

Object.freeze(hong12);
console.log(Object.isFrozen(hong12)); // true
console.log(Object.isFrozen(hong12['subhong12'])); // false

