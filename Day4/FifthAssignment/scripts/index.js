let sales = 0;
let commission = 0;
do{
    sales = Number(prompt("Please enter your sales"));
    if (isNaN(sales)){
        alert("Please enter a valid number");
    }
} while (isNaN(sales));

switch (true){
    case (sales > 20000):
        commission = Math.round(10 / 100 * sales);
        console.log(`Your commission is ${commission}`);
        break;
    case (sales > 10000 && sales <= 20000):
        commission = Math.round(7 / 100 * sales);
        console.log(`Your commission is ${commission}`);
        break;
    case (sales > 5000 && sales <= 10000):
        commission = Math.round(5 / 100 * sales);
        console.log(`Your commission is ${commission}`);
        break;
    case (sales > 0 && sales <= 5000):
        commission = Math.round(2 / 100 * sales);
        console.log(`Your commission is ${commission}`);
        break;
    default:
        console.log("Please enter a value greater than 0");
}

