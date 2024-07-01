<template>
  <RouterLink :to = "`/cards/${quiz.id}`">
     <div class="w-[310px] overflow-hidden rounded-lg shadow-xl cursor-pointer flex justify-between flex-col gap-1">
          <img :src="quiz.img" class="w-[100vw] h-[230px]">
          <div class="px-[10px]">
            <h2 class="font-bold">{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
          </div>
       </div>

  </RouterLink>
</template>

<script setup>
    //import { defineProps } from 'vue';

    const {quiz} = defineProps(['quiz'])
    import { RouterLink } from 'vue-router';
    //console.log(quiz);

</script>