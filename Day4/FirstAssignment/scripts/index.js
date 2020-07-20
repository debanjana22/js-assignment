for (let counter = 1; counter <= 100; counter++){
    if(counter % 3 === 0 && counter % 5 === 0){
        console.log(`Number: ${counter} --> fizzbuzz`);
    }
    else if (counter % 3 === 0){
        console.log(`Number: ${counter} --> fizz`);
    }
    else if (counter % 5 === 0){
        console.log(`Number: ${counter} --> buzz`);
    }
}