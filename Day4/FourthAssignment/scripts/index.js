// console.log(document.getElementById('num1'));
// console.log(document.getElementById('num1'));
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
// console.log(num1.value + " " + Number(num2.value));
resultPara=document.getElementById('result');

let result = 0, text = "";
function perform(action){
    if (isNaN(Number(num1.value)) === true || isNaN(Number(num2.value)) === true){
        text = "Please enter valid numbers!!!";
    }
    else {
        switch (action){
            case 'add':
                result = Number(num1.value) + Number(num2.value);
                text = "Result: " + result;
                break;
            case 'subtract':
                result = Number(num1.value) - Number(num2.value);
                text = "Result: " + result;
                break;
            case 'multiply':
                result = Number(num1.value) * Number(num2.value);
                text = "Result: " + result;
                break;
            case 'divide':
                result = Number(num1.value) / Number(num2.value);
                text = "Result: " + result;
                break;
            case 'sqrt':
                result = Math.sqrt(Number(num1.value));
                text = "Result: " + result;
                break;
            case 'percent':
                result = Number(num1.value) / Number(num2.value) * 100;
                text = "Result: " + result;
                break;
            default:
                text = "Enter valid input!!"
        }
    }    
    resultPara.innerHTML = text;
}

