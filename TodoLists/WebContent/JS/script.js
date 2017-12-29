var todolists = {
		
		todos: [],
		displayTodos: function(){
						console.log('My todos: ', this.todos);
					},
		addTodo: function(todoText){
					this.todos.push({
						todoText: todoText,
						isCompleted: false
					});
					this.displayTodos();
					},
		changeTodo: function(position, todoText){
					//	this.todos[position] = newValue;
						this.todos[position].todoText = todoText;
						this.displayTodos();
					},
		deleteTodo: function(position){
						this.todos.splice(position, 1);
						this.displayTodos();
					},
		toggleComplete: function(position){
						var todo = this.todos[position];
						todo.isCompleted = !todo.isCompleted;
						this.displayTodos();
					},
		toggleComplete: function(position){
						var todo = this.todos[position];
						todo.isCompleted = !todo.isCompleted;
						this.displayTodos();
					}
		
};

