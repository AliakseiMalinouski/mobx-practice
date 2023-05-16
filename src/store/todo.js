import { action, makeAutoObservable, observable } from "mobx";

class Todo {



    todos = [
        {id: 1001, todo: "Поесть", completed: false},
        {id: 1002, todo: "Поесть",completed: false},
        {id: 1003, todo: "Поесть", completed: false}
    ];

    

    constructor () {
        makeAutoObservable(this);
    }

    addTodo (todo) {
        let flag = false;
        this.todos.forEach(elem => {
            if(elem.id === todo.id) flag = true;
        });
        if(!flag) this.todos.push(todo);
    }

    removeTodo(id) {
        let newTodos = this.todos.filter(elem => elem.id !== id);
        this.todos = newTodos;
    }

    completeTodo(id) {
        let newTodos = this.todos.map(elem => elem.id === id ? {...elem, completed: !elem.completed} : elem)
        this.todos = newTodos;
    }

    finisTodo(todo) {
        this.todos.forEach(elem => {
            if(todo.id === elem.id) elem.completed = true;
        });
    }


}

export default new Todo();