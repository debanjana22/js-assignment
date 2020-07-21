let numArr = [];
do{
    let num = prompt("Please enter a positive number (To finish please enter a blank line or cancel)");
    if (num == "" || num == null){
        break;
    }
    else if(isNaN(num) === true || Number(num) < 0){
        num = prompt("Please enter a valid positive number (To finish please enter a blank line or cancel)");
    }
    numArr.push(Number(num));

}while (true)

let oddNum = numArr.filter((elem) => elem % 2 !== 0);
console.log(numArr);
console.log(oddNum);

let oddNumCubed = numArr.filter((elem) => elem % 2 !== 0).map((elem) => elem ** 3);
console.log(oddNumCubed);