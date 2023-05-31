// property attribute
// 1 데이터 프로퍼티: 키와 값에 대한 속성들
// 2 access 프로퍼티: set과 get에 대한 속성들
// 자체적으로 값을 가지고있지않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티

const hong = {
    name: '홍길동',
    year: 2000,
}
console.log(Object.getOwnPropertyDescriptor(hong));