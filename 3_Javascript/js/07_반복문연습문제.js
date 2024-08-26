// 문제 1
// 10 9 8 7 6 5 4 3 2 1
/*function fn1() {

    let result = "";

    for(let num = 10; num >= 1; num--){

         result += num;  
         
         // result = result + num;
         // "10" =  " " + 10
         // "109" = "10" + 9


    }
    console.log(result);
}

*/

function fn1() {
    // (for)10부터 1까지의 숫자 거꾸로 출력하기
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }
  }


// 문제 2
// 20 18 16 14...
/* function fn2() {

     for(let num = 20; num >= 1; num-=2 ) {

        console.log(result);

    }
    
}
*/

function fn2() {
    // (for)20부터 1까지의 숫자 중 짝수만 출력하기
    for (let i = 20; i >= 1; i--) {
  
      if (i % 2 == 1) continue; // 홀수일때 건너뛰기
  
      console.log(i);
    }
  }

// 문제 3
/* function fn3() {

    let num = 5;

    while(num < 51) {

        console.log(num);

        num +=5
    }

}
*/

function fn3() {
    // (while)1부터 50까지의 숫자 중 5의 배수만 출력
    let num = 1;
    while (num <= 50) {
      if (num % 5 == 0) {
        console.log(num);
      }
      num++;
    }
  }



// 문제 4


// 문제 5

/* function fn() {
    for(let y = 1; y <= 8; y++){

        let str = "";

        for(let x = 2; x <= 9; x++ ){

        

        }
    }
}
*/

function fn5() {

    // 2중 for문을 사용하여 구구단을 출력
    for (let i = 2; i <= 9; i++) {
  
      for (let j = 1; j <= 9; j++) {
  
        console.log(`${i} x ${j} = ${i * j}`);
        
      }
  
    }
  
  }