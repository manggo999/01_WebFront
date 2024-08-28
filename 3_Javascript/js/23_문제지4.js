const input = document.getElementById("numberInput")

document.getElementById("btn").addEventListener("click", () => {

    const num = Number(input.value);

      

         if(num % 2 == 1){ 
            alert("홀수입니다.");

        } else{
            alert("짝수입니다.");
        }
        
});