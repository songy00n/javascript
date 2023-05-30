// 예외 처리 try catch finally

function runner(){
    try{
        console.log('정상처리');
        throw new Error('에외를 발생시킴');
        console.log('예외 발생한 후');
    } catch(e){
        console.log(e); // 예외 발생되면 수행되는 곳
    } finally{
        console.log('정상처리와 에러 상관없이 반드시 수행해야 하는 것들');
    }
}

