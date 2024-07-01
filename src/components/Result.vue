<template>
    <div  class="py-[100px] text-center">
        <p class="text-[25px]">Your Result</p>
        <h1 class="text-[80px]"> {{ noOfCorrect}}/{{ quizLength }}</h1>
        <RouterLink to = "/" class="text-blue-300 underline">Back</RouterLink>
    </div>

</template>

<script setup>
    import {RouterLink} from "vue-router"
    const {quizLength,noOfCorrect} = defineProps(['quizLength','noOfCorrect'])

</script>