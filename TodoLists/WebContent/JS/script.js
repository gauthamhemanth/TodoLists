var todolists = {
		
		todos: [],
		addTodo: function(todoText){
					this.todos.push({
						todoText: todoText,
						isCompleted: false
					});
					},
		changeTodo: function(position, todoText){
					//	this.todos[position] = newValue;
						this.todos[position].todoText = todoText;
					},
		deleteTodo: function(position){
						this.todos.splice(position, 1);
					},
		toggleComplete: function(position){
						var todo = this.todos[position];
						todo.isCompleted = !todo.isCompleted;
					},
		toggleAll: function(){
						var completedTodos = 0;
						var totalTodos = this.todos.length;
						
						this.todos.forEach(function(todo){
							if(todo.isCompleted === true){
								completedTodos++;
							}		
						});

						this.todos.forEach(function(todo){
							if(completedTodos === totalTodos){
								todo.isCompleted = false;
							}else{
								todo.isCompleted = true;
							}
						});
					}					
};


var handlers = {
		toggleTodos: function(){
			todolists.toggleAll();
			view.displayTodos();
		},
		addTodo: function(){
			var addTextToTodo = document.getElementById('addTextToTodo');
			todolists.addTodo(addTextToTodo.value);
			addTextToTodo.value = '';
			view.displayTodos();
		},
		changeTodo: function(){
			var changeTodoText = document.getElementById('changeTodoText');
			var changeTodoPosition =document.getElementById('changeTodoPosition');
			todolists.changeTodo(changeTodoPosition.valueAsNumber ,changeTodoText.value);
			changeTodoText.value = '';
			changeTodoPosition='';
			view.displayTodos();
		},
		deleteTodo: function(position){
			todolists.deleteTodo(position);
			view.displayTodos();
		},
		toggleComplete: function(){
			var toggleSetCompletePosition = document.getElementById("toggleSetCompletePosition");
			todolists.toggleComplete(toggleSetCompletePosition.valueAsNumber);
			toggleSetCompletePosition.value='';
			view.displayTodos();
		}
		
};

var view = {
		
	displayTodos: function(){
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for(var i = 0; i<todolists.todos.length; i++){
			var todoLi = document.createElement('li');
			var todoTextCompletion ='';
			var todo = todolists.todos[i];
			
			if(todo.isCompleted === true){
				
				todoTextCompletion = '(X) ' + todo.todoText;
				 
			} else {
				todoTextCompletion = '( ) ' + todo.todoText;
			}
			
			todoLi.id = i;
			todoLi.textContent = todoTextCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
		
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent='Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
		
	},
	setUpEventListeners: function(){
		var todoUl = document.querySelector('ul');
		todoUl.addEventListener('click',function(event){
				console.log(event.target.parentNode.id);
				var elementClicked = event.target;
				if(elementClicked.className === 'deleteButton'){
					handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
				}
		});
	}
};

view.setUpEventListeners();

