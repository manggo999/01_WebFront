// 문제1
function print1 (name) { 

    console.log(`Hello, ${name}!`);
}
print1("민규");



// 문제2
function print2 (num1, num2) {

    return num1+num2;
}
console.log (print2(3, 4));

// 문제3
print3 = (num1, num2) => { return num1*num2};
console.log(print3(2,5));


// 문제4
function print4(num1, num2) {

    if(num1 > num2){ 
        console.log("첫번째 숫자가 더 큽니다");

    } else {
        console.log("두번째 숫자가 더 크거나 같습니다");
    }
}

print4(5,2);
print4(2,4);









