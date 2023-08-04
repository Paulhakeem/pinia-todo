<script setup>
import { ref } from 'vue';
import { useTodoStore } from './stores/todoStore'
import TodoDetails from './components/TodoDetails.vue'
import TodoForm from './components/TodoForm.vue';
import { storeToRefs } from 'pinia';

const todoStore = useTodoStore()

const { todos, favs, totalCount, favCount } = storeToRefs(todoStore)

const filter = ref('all')


</script>
<template>
   <header class="pinia text-center max-w-md mt-6 rounded-lg items-center m-auto
    bg-gray-200 justify-center pt-4
   pb-16">
    <main class="flex flex-1 justify-center items-end ">
    <img src="./assets/pinia.svg" 
    class="w-12 float-right"
    alt="">
    <h2 class="text-2xl font-bold">Pinia Todo</h2>
    
    </main>
    <p class="pt-2 text-md font-semibold">My first Pinia project, am so happy
         <span><i class="fa-solid fa-face-laugh-beam text-yellow-400"></i></span></p>

    <!----newtodo form-->
    <div class="pt-6 mt-8 px-0">
        <TodoForm/>
    </div>
   

    <!-----filter-->
     <nav class="w-full my-10 mx-auto flex text-center justify-center">
        <button class="border-2 border-gray-300 bg-white rounded-md
         py-2 px-4 cursor-pointer text-md uppercase"
        @click="filter = 'all'">all todos</button>
        <button class="ml-10 border-2 border-gray-300 bg-white rounded-md
         py-2 px-4 cursor-pointer text-md uppercase"
        @click="filter = 'favs'">favs todos</button>
     </nav>


    <!----todo list-->

    <div class="max-w-sm my-10 mx-auto" v-if="filter === 'all'">
        <p class="text-lg font-semibold">You have {{ totalCount }} todos left</p>
        <div v-for="todo in todos">
         <TodoDetails :todo="todo"/>
        </div>
    </div>
    <div class="max-w-sm my-10 mx-auto" v-if="filter === 'favs'">
        <p class="text-lg font-semibold">You have {{ favCount }} favourite todos</p>
        <div v-for="todo in favs">
         <TodoDetails :todo="todo"/>
        </div>
    </div>

    <button @click="todoStore.$reset"
    class="float-left ml-4 mb-10 rounded-md
     bg-yellow-400 uppercase tracking-wider p-2">reset</button>
   </header>
</template>