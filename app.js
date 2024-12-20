let id = 0
Vue.createApp({
    data() {
        return {
          newTodo: '',
          todos: [
            { id: id++, text: 'Learn HTML' },
            { id: id++, text: 'Learn JavaScript' },
            { id: id++, text: 'Learn Vue' }
          ]
        }
      },
      methods: {
        addTodo() {
          this.todos.push({ id: id++, text: this.newTodo })
          this.newTodo = ''
        },
        removeTodo(todo) {
          this.todos = this.todos.filter((t) => t !== todo)
        }
      }
    }).mount('#app')