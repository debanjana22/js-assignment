let num = Number(prompt('Please enter a number!'));
console.log(num);
function checkOddEven(num){
    if (isNaN(num) == true){
        console.log("Please enter a valid number!!!");
    }
    else if((num %  2) === 0){
        console.log(`The number entered is ${num} and Number is even`);
    }
    else {
        console.log(`The number entered is ${num} and Number is odd`);
    }
}

checkOddEven(num);