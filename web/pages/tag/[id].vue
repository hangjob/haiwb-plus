<template>
    <div class="flex  flex-row max-sm:flex-col max-md:flex-col">
        <div class="flex flex-1 items-center max-sm:mb-3 max-md:mb-3">
            <a href="http://localhost:8080" class="">项目组</a>
            <span class="pl-1 pr-1 text-gray-300">/</span>
            <span class="text-gray-400">话题：漯河管理系统</span>
        </div>
        <div class="flex max-sm:flex-1 max-md:flex-1">
            <UInput
                class="flex-1"
                icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                placeholder="Search..."
            />
        </div>
    </div>
    <div class="mt-5 flex flex-col p-[30px] bg-[#8881] rounded-[20px]">
        <h1 class="text-[24px] font-bold">自媒体图库</h1>
        <p class="mt-3 text-[#9DA0B3]">本话题是适用于自媒体创作者的图库介绍，都是免费商用的。</p>
    </div>
    <div class="mt-10 grid grid-cols-12 gap-4">
        <div v-for="item in 3" class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6">
<!--            <AppArticleCardStock/>-->
        </div>
    </div>
</template>
<script setup lang="ts">
// 推荐话题
definePageMeta({
    layout: 'base-tag'
})
</script>
