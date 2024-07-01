<template>
     <div class="mt-[20px] ">
        <h1 class="text-[40px]" >
           {{ question.text }}
        </h1>
    </div>
    <div>
        <div class="flex cursor-pointer mt-5" v-for="option in question.options" :key ="option.id" @click="emitSelectedOption(option.isCorrect)">
            <p class="bg-blue-300 w-[50px] h-[50px] text-[30px] flex justify-center items-center">{{ option.label }}</p>
            <div class="bg-[rgba(224,239,239)] w-[50%] text-[30px] px-[20px]">
            <p>{{ option.text }}</p>
            </div>  
        </div>


    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const {question} = defineProps(['question'])

const emit = defineEmits(['selectOption'])

const emitSelectedOption = (isCorrect)=>{
    emit('selectOption',isCorrect)
    //console.log('hello')
}

</script>