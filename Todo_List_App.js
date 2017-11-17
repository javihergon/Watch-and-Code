// Code goes here

// Todo object

var todoList = {
  todos: [1, 2, 3],
  displayTodo: function() {
    console.log("My Todos:", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodo();
  },
  changeTodo: function(position, newTodo) {
    this.todos[position] = newTodo;
    this.displayTodo();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  } 
  