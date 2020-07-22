let name = prompt("Please enter your name","Anonymous");

let nameHeader = document.getElementById('nameHeader');
let clock = document.getElementById('clock');
let body = document.getElementById('body');
nameHeader.innerText = `Welcome ${name}`

function setClock(){
    dateTime = new Date().toLocaleTimeString();
    clock.innerText = `${dateTime}`
}

setInterval(setClock,1000);

darkModeButton = document.getElementById('darkMode');
darkModeButton.onclick = () => {
    body.classList.toggle('darkMode');
    if (body.className == ""){        
        darkModeButton.innerText = "Enter Dark Mode";
    }
    else{
        darkModeButton.innerText = "Exit Dark Mode";
    }
}
