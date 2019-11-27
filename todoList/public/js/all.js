const vm = new Vue({
    el: "#app",
    data: {
        newTodo: "",
        todos: [{ content: "睡午覺", completed: false },
        { content: "吃美食", completed: false },
        { content: "彈鋼琴", completed: false }]
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({ content: todo, completed: false });
            this.newTodo = "";
            // console.log(todo,this.todos);
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            // console.log(this.todos.indexOf(todo));
        },
        finTodo: function (todo) {
            if (todo.completed) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
            // console.log(todo)
        }
    }
})
