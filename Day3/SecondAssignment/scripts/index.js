let os = prompt('Please enter an OS name and version!');
console.log(os);

let osNameVersionArr = os.split(" ");
console.log(`The OS name is ${osNameVersionArr[0]} and version is ${osNameVersionArr[1]}`)