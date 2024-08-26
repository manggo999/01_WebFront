const inputList = document.querySelectorAll(".color-input");
const boxList = document.querySelectorAll(".box");

//console.log(inputList)
//console.log(boxList)

//#changeButton요소를 클릭했을 때
document.querySelector("changeButton").addEventListener("click",function(){

    //inputList에 작성된 각 내용을 boxList에 있는 각 div에 대입
    for(let i = 0; i < boxList.length; i++) {
        boxList[i].style.backgroudColor = inputList[i].value;

    }

});



//