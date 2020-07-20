let para = document.getElementById('result');
let range = prompt("Please enter a number");
let primeVal = `The prime numbers from 2 to ${range} are `;

for (let num1 = 2; num1 <= range; num1++){
    let isPrime = true;
    for (let num2 = 2; num2 < range; num2++){
        if (num1 % num2 == 0 && num1 !== num2){
            console.log(num1 + " " + num2);
            isPrime = false;
            break;
        }
    }
    if (isPrime === true){
        // console.log(num1);
        primeVal += num1;
        primeVal += " ";
    }
}

para.innerHTML = primeVal;