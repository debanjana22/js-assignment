let num1 = 0;
let commission = 0;
do{
    num1 = prompt("Please enter a number greater than 100");
    if (num1 === "" || num1 === null){
        alert("You have cancelled the operation");
        break;
    }
    else if (Number(num1) > 100){
        alert(`You have entered ${num1}`);
        break;
    }
} while (true);