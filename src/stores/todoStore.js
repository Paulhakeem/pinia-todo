import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: []
    }),
    getters: {
        favs() {
            return this.todos.filter(t => t.isFav)
        },
        favCount() {
           return this.todos.reduce((p, c) => {
            return c.isFav ? p + 1 : p

           }, 0)
        },
        totalCount: (state) => {
        return state.todos.length
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo)
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id) {
            const todo = this.todos.find(t => t.id === id)
            todo.isFav = !todo.isFav
        }
    }
})