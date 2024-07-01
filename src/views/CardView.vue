<template>
    <div>
       
          <!-- Conditional rendering with v-if and v-else -->
        <div v-if="!found">
            <p>Sorry, we cannot find the section.</p>
        </div>
        <!-- Optionally, handle a case where car is null or undefined -->
        <div v-else>
            
            <div class="mx-[30px]">
                <QuizHeader :status = "status" :barPercent = "barPercent"/>
                <div class="transition ease-in-out delay-1000 ">
                   <Question :question = "card.questions[currentQuesIndex]" @selectOption ="onSelected" v-if="!showResult" />
                    <div class="">
                        <Result v-if="showResult" :quizLength="card.questions.length" :noOfCorrect="noOfCorrect" />
                    </div>
                </div>
           
            </div>
           
            
            <RouterView/>
        </div>
       
    </div>
   
</template>

<script setup>
import {useRoute, RouterView,useRouter} from 'vue-router'
import cards from '@/data/quizes.json'
import Question from '@/components/Questions.vue';
import QuizHeader from '@/components/QuizHeader.vue';
import Result from '@/components/Result.vue';


import {computed, ref,watch} from 'vue'

const route = useRoute()
const found = ref(true)
const currentQuesIndex = ref(0);
const showResult = ref(false);


let card = null;
const cardId = parseInt(route.params.id);
// Ensure cars is an array and route.params.id is valid
if (Array.isArray(cards) && route.params.id) {
 
  card = cards.find(c => c.id === cardId);

  found.value = !!card
}
// const status = ref(`${currentQuesIndex.value}/${card.questions.length}`)

// watch(currentQuesIndex,()=>{
//     status.value = `${currentQuesIndex.value}/${card.questions.length}`
// })
const noOfCorrect = ref(0)
const status = computed(()=> `${currentQuesIndex.value}/${card.questions.length}`)
const barPercent = computed(()=> `${currentQuesIndex.value/card.questions.length * 100}%`)

const onSelected = (isCorrect)=>{
    if(isCorrect){
        noOfCorrect.value++;
    }

    if(card.questions.length-1 === currentQuesIndex.value){
        showResult.value = true;
    }
    currentQuesIndex.value++;
}

</script>