function test() {
    // prompt() 사용 연습

    const password = prompt("비밀번호를 입력하세요");
    
    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password==null) { //취소
      alert("취소");

    } else { // 확인
        
        if(password == 1234) {
            alert("비밀번호 일치");
        }else {
            alert("비밀번호 불일치!");
        }
    
    }
}

//---------------------------------------------

const amount = document.getElementById("amount"); // 금액작성 input
const output = document.getElementById("output"); // 잔액출력 span

let balance = 10000; // 잔액 기록 변수 (초기값 10000)

const password = "1234"; //비밀번호 저장 변수

output.innerText = balance; // 초기 금액 설정


// 입금
function deposit() {
// 1. 입금 버튼 클릭 해당 함수 수행
// 2. input에 (금액을 작성한 input == amount) 입력된 금액 구하기
// 3. 구한 금액을 잔액(balance)에 누적하기
// (번외) : input에 금액을 작성 안하고 입금버튼을 누른 경우
// -> 금액을 입력하세요 와 같은 메세지 띄우기 처리...


      const money = Number(amount.value);

      balance += money;

      output.innerText = balance; 

      if (amount.value.length == 0) { 
           prompt("금액을 입력하세오.");
      
}


// 출금
function withdrawal() {
    // 1. 출금 버튼 클릭 해당 함수 수행
    // (번외) : input에 금액을 작성 안하고 출금버튼을 누른 경우
    // -> 금액을 입력하세요 와 같은 메세지 띄우기 처리...
    // 2. 비밀번호를 입력받기
    // 2-1. 취소버트 눌렀을 때 처리
    // 2-2. 확인버트 눌렀을 때 처리
    // -> 비밀번호가 일치하는지 안하는지 따지기
    // -> 일치한다면? 
    // -> 출금할 금액이 잔액보다 큰경우 처리
    // -> 출금할 금액이 잔액보다 작거나 같은경우( 출금 처리 기능)
    // -> 잔액 balance에서 내가 작성한 금액 차감

    const money = Number(amount.value);

    prompt("비밀번호를 입력하세요")

    if (password == 1234) { 
        if(balance < money) { 
            alert("출금 금액이 잔액보다 클 수 없습니다.")

        }
        if(balance >= money){
            balance -= money;
            alert ("")
      
        }

    }


}
