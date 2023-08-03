<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';


const todoStore = useTodoStore()

const newTodo = ref('')

const handleSubmit = () => {
    if(newTodo.value.length > 0) {
        todoStore.addTodo({
            title: newTodo.value,
            isFav: false,
            id: Math.floor(Math.random() * 10000)
        })
        newTodo.value = ''
    }
}


</script>
<template>
    <form @submit.prevent="handleSubmit"
    class="space-x-6 mt-4">
    <input v-model="newTodo"
    placeholder="Enter your todo.."
    type="text"
    class="w-56 p-4 rounded-lg outline-none">

    <button
     class="bg-yellow-400 p-4 rounded-lg uppercase">add</button>
    </form>
</template>