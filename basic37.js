        let company = {
            sales: [{name:'a', salary: 1000},
                    {name: 'b', salary: 2000},
                    {name: 'c', salary: 3000}
                ],
                programmer: [{name:'d', salary: 8000},
                             {name: 'e', salary: 9000},
                             {name: 'f', salary: 10000}
                            ]
        };

        //급여의 합 구하기 - reduce 함수로 구하기

        function sumSal(dept){
            if(Array.isArray(dept)){
            return department.reduce((prev, current)=> prev + current.salary, 0);
        } else {
            let sum = 0;
            for(let subdep of Object.values(dept)){
                sum += sumSal(subdep);
            }
            return sum;
        }

        console.log(sumSal(company));

        const arr = [1,2,3,4,5];
        const result = arr.reduce((acc, cur, index)=> {return acc += cur;}, 0);
        console.log(result);


        //객체로 된 점수들을 계산하기 - 국어 점수의 합 구하기

        let school = { // 동일한 객체(간결성을 위해 약간 압축함)
            sales: [{ name: '홍길동', kor: 100 }, { name: '이순신', kor: 60 }],
            development: {
                sites: [{ name: '강감찬', kor: 65 }, { name: '을지문덕', kor: 80 }],
                internals: [{ name: '김길동', kor: 73 }]
            }
        };

        function sumKor(school){
            if(Array.isArray(school)){
                return school.reduce((prev, curr)=>prev+curr.kor, 0);
            } else {
                let sum = 0;
                for(let schoole of Object.values(school)){
                    sum += sumKor(subschool);
                }
                return sum;
            }
            console.log(sumKor(school));
        }