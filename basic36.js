        function pow(x, n){ //반복문
            let result = 1;
            for(let i=0; i<n; i++){
                result *= x;
            }
            return result;
        }
        function pow1(x,n){ //재귀함수로
            if(n==1) return x;
            else {
                return x * pow1(x, n-1);
            }

        }

        function sumTo(n) { //반복문

        let sum = 0;

        for (let i = 1; i <= n; i++) {

        sum += i;

        }

        return sum;

        }

        ​

        alert( sumTo(100) );

        function sumTo(n) { //재귀함수
        if (n == 1) return 1;
        return n + sumTo(n - 1);
        }

alert( sumTo(100) );

        function sumTo(n) {   //등차수열로 합공식 sumTo(n)  = n * (n+1) / 2 사용하기
        return n * (n + 1) / 2;
        }

        alert( sumTo(100) );

        console.log(pow(2,3)); //2^3 = 8
        console.log(pow(2,3)); //2^3 = 8
