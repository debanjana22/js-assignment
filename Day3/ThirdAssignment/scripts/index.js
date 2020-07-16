let marks = Number(prompt('Please enter your marks!'));
console.log(marks);

function checkGradeIfElseFun(marks){
    let grade = '';
    if (isNaN(marks) === true ||  marks > 100){
        console.log("Please enter a valid marks! Marks should be within 0 - 100.");
        return;
    }
    else if (marks === 100){
        grade = 'O';
    }
    else if (marks >= 90 && marks <= 99){
        grade = 'E';
    }
    else if (marks >= 76 && marks <= 89){
        grade = 'A';
    }
    else if (marks >= 61 && marks <= 75){
        grade = 'B';
    }
    else if (marks >= 46 && marks <= 60){
        grade = 'C';
    }
    else if (marks >= 30 && marks <= 45){
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    console.log(`Marks are ${marks} and grade is ${grade}`);
}

function checkGradeSwitchFun(marks){
    let grade = '';
    
    switch(true){
        case (marks === 100):
            grade = 'O';
            break;
        
        case (marks >= 90 && marks <= 99):
            grade = 'E';
            break;
        
        case (marks >= 76 && marks <= 89):
            grade = 'A';
            break;

        case (marks >= 61 && marks <= 75):
            grade = 'B';
            break;

        case (marks >= 46 && marks <= 60):
            grade = 'C';
            break;

        case (marks >= 30 && marks <= 45):
            grade = 'D';
            break;

        case (marks < 30):
            grade = 'F';
            break;

        default:
            console.log("Please enter a valid marks! Marks should be within 0 - 100.");
            return;
    }
    console.log(`Marks are ${marks} and grade is ${grade}`);
}

function checkGradeTernaryFun(marks){
    let grade = '';
    if (isNaN(marks) === true ||  marks > 100){
        console.log("Please enter a valid marks! Marks should be within 0 - 100.");
        return;
    }
    grade = (marks === 100) ? 'O':
            (marks >= 90 && marks <= 99) ? 'E':
            (marks >= 76 && marks <= 89) ? 'A':
            (marks >= 61 && marks <= 75) ? 'B':
            (marks >= 46 && marks <= 60) ? 'C':
            (marks >= 30 && marks <= 45) ? 'D':
            'F';

    console.log(`Marks are ${marks} and grade is ${grade}`);
}

console.log("****Checking by if - else****");
checkGradeIfElseFun(marks);

console.log("****Checking by switch - case****");
checkGradeSwitchFun(marks);

console.log("****Checking by ternary operator****");
checkGradeTernaryFun(marks);