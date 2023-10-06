const todoList = [{name:'make dinner',dueDate:'23-02-2002'}];
renderTodoList();
function renderTodoList(){

todoListHTML = '';

for(let i=0; i<todoList.length; i++){
  const todoObject = todoList[i];
  const {name,dueDate} = todoObject;
  // const dueDate = todoObject.dueDate;
  const html = `<div>${name}</div> 
                <div>${dueDate}</div>
                <button class="delete-button" onclick="todoList.splice(${i},1);renderTodoList();">Delete</button>`;
                todoListHTML += html;
}
document.querySelector('.js-todo-list').innerHTML= todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector(' .js-name-input');
  const name = inputElement.value;
  const dateElement = document.querySelector('.js-input-date');

  const dueDate = dateElement.value;
  

todoList.push({name,dueDate});
console.log(todoList);

inputElement.value = '';

renderTodoList();
}