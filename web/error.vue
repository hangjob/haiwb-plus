<template>
    <div class="items-center h-[100vh] w-full justify-center flex bg-size bg-cover bg-no-repeat" style="background-image: url('/img/bg.png')">
        <div class="flex items-center  container mx-auto max-sm:p-[5px] max-md:p-[10px] justify-center text-center flex-col px-[20px]">
            <img class="w-[200px] max-md:w-[70%] h-full object-cover" src="/img/error.png" alt=""/>
            <p class="text-[16px] mt-5">如果我能够看到自己的内容，我想它一定充满忧伤，因为我把快乐都给了其他页面 </p>
            <p class="text-[14px] mt-3">请给我点时间，我会想开的！{{ error.statusCode }}</p>
            <nuxt-link href="/" class="bg-[#e4f1ff] mt-5 text-[14px] py-[8px] px-[20px] rounded-[20px]">返回首页</nuxt-link>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    error: Object
})
</script>
<style lang="less" scoped>
</style>
