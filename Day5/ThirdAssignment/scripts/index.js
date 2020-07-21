
async function fetchTodos(){
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todosJson = await todos.json();
    let completedTodos = await todosJson.filter(el => el.completed == true);
 
    console.log(`All todos: ${todosJson}`);
    console.log(`completed todos: ${completedTodos}`);
}

fetchTodos();
