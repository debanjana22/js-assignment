class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}

let user1 = new User("Shashi",33,"s@gmail.com");
let user2 = new User("Narayan",32,"n@gmail.com");
// let user3 = new User("Arnab",31,"ar@gmail.com");
// let user4 = new User("Avijit",30,"a@gmail.com");

user1.login();
user1.logout();

class Moderator extends User{
    addCoins(user,coins){
        // console.log(coins);
        if (coins === undefined){
            // console.log(user.coins);
            user.coins++;                       
        }
        else{
            user.coins += coins;
        }
        console.log(`${user.name} has ${user.coins} coin(s)`)
        return user; 
    }
    removeCoins(user,coins){
        if (coins !== undefined){
            thiusers.coins -= coins;            
        }
        else {
            user.coins--;
        }
        console.log(`${user.name} has ${user.coins} coin(s)`)
        return user;
    }
}

let mod = new Moderator("Arnab",31,"ar@gmail.com");
mod.addCoins(user1);
mod.addCoins(user2,10);

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(`${user.name} has been enrolled to ${course} course`);
        return user;
    }
    removeCourse(user, course){
        user.courses = user.courses.filter(element => element != course);
        // console.log(user);
        console.log(`${user.name} has been removed from ${course} course`);
        return user;
    }
}

let admin = new Admin("Avijit",30,"a@gmail.com");
admin.addCourse(user1,"Python");
admin.addCourse(user1,"JavaScript");
admin.addCourse(user2,"JavaScript");

// console.log(user1);
// console.log(user2);

admin.removeCourse(user1, "JavaScript");

// console.log(user1);
// console.log(user2);
