function ask(question, yes, no){
    if (confirm(question)) yes();
    else no();
}

let yesReply = () => alert("You agreed.");
let noReply = () => alert("You canceled the execution.");

ask(
    "Do you agree?", yesReply, noReply
);
