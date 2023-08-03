<script setup>
import { useTodoStore } from '../stores/todoStore';

const props = defineProps({
    todo: String
})

const todoStore = useTodoStore()



</script>



<template>
    <div class="flex py-4 px-12 mt-8 border-2 bg-white 
    rounded-lg shadow-md justify-between items-center">
        <h3 class="inline-block text-lg">{{ todo.title }}</h3>
        <div class="inline-block space-x-6">
        <i @click="todoStore.deleteTodo(todo.id)"
        class="fa-solid fa-trash text-lg cursor-pointer
        text-gray-400 hover:text-red-600"></i>
        <i @click="todoStore.toggleFav(todo.id)"
        class="fa-solid fa-heart text-lg cursor-pointer
         text-gray-400 hover:text-green-500"></i>
        </div>
    </div>

</template>