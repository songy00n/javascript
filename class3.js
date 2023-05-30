// static class

class SMember {
    name;
    age;
    static groupName = '하나은행';

    constructor(name, age){
        this.name = name;
        this.year = year;
    }

    static returnGroupName(){
        return '하나은행 IT';
    }
}

console.log(SMember.groupName);
console.log(SMember.returnGroupName());


class SMember2 {
    name;
    age;
    static groupName = '하나은행';

    constructor(name, age){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new SMember2(
            object.name,
            object.age,
        );
    }

    static fromList(list){
        return new SMember2(list[0], list[1]);
    }
}

const hong = SMember2.fromObject({name: '홍길동', age: 26});
console.log(hong);

console.log(SMember2.groupName);
console.log(SMember2.returnGroupName());

const lee2 = SMember2.fromList(['이순신',2003]);
console.log(lee2);

