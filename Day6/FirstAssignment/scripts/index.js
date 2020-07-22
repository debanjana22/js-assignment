let colorArr = ['lightblue', 'pink', 'lightgreen', 'lightgoldenrodyellow', 'lightgrey'];
let index = 0;
// colorArr.forEach((el) => {
//     setTimeout(()=>{
//         console.log(el);
//         document.body.style.backgroundColor = el;
//     },5000);
// });

function changeBgColor(){
    console.log(colorArr[index]);
    document.body.style.backgroundColor = colorArr[index];
        if (index == colorArr.length - 1){
            index = 0;
        }
        else{
            index ++;
        }
    
}

// changeBgColor();

setInterval(changeBgColor,5000);