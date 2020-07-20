const student = {
    name: "Helsinki",
    age: 24,
    projects: {
            dieGame: "Two player dice game using Javascript"
    }
}

const {name, age, projects:{dieGame}} = student;
console.log(`Name: ${name}, Age ${age}, Project Diegame: ${dieGame}`);