let num = 0;
do{
    num = prompt("Please enter a valid number",1);
}while (isNaN(Number(num)))

tableResult = document.getElementById('multTable');
for (let multNum = 1; multNum <= 10; multNum++){
    product = num * multNum;
    
    tableResult.innerHTML += `<tr><td>${num} X ${multNum}</td><td>=</td><td>${product}</td></tr>`;
}