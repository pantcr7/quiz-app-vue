<template>
    <div class="max-w-5xl mx-auto">
      <!-- <pre>{{ JSON.stringify(quize, null, 2) }}</pre> -->
      <header class="mt-[30px] flex items-center gap-5">
        <h1 class="font-bold">Quizes</h1>
        <input v-model.trim="search" class=" bg-[rgba(128,128,128,0.1)] rounded-md p-1" type="text" placeholder="Search...">
      </header>
      <div class="flex flex-wrap mt-8 gap-7">
        <Card v-for="quiz in quizes"  :key="quiz.id" :quiz="quiz"/>
        <!-- <div v-for="quiz in quizes"  :key="quiz.id" class="w-[310px] overflow-hidden rounded-lg shadow-xl cursor-pointer flex justify-between flex-col gap-1">
          <img :src="quiz.img" class="w-[100vw] h-[230px]">
          <div class="px-[10px]">
            <h2 class="font-bold">{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length}}  Questions</p>
          </div>
        </div> -->
        
      </div>
    </div>
</template>

<script setup>
  import { ref,watch } from "vue";
  import quiz from  "@/data/quizes.json"
  import Card from "@/components/Card.vue"

  const quizes = ref(quiz)
  const search = ref("")

  watch(search,()=>{
    quizes.value = quiz.filter(quizName => quizName.name.toLowerCase().includes(search.value.toLowerCase()))
  })
 




</script>