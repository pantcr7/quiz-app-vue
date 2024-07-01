<template>
    <header class="mt-[20px]">
        <h4 class="text-[30px]">Question {{ status }}</h4>
        <div class="w-[300px] h-[50px] border-blue-300 border-[3px] border-solid">
            <div class="h-[100%] w-[0%] bg-blue-300" :style="{width: barPercent}">

            </div>
        </div>
    </header>
</template>

<script setup>

    const {status,barPercent} = defineProps(['status','barPercent'])
</script>