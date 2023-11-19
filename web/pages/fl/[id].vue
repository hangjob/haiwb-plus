<template>
    <div class="flex  flex-row max-sm:flex-col max-md:flex-col">
        <div class="flex flex-1 items-center max-sm:mb-3 max-md:mb-3">
            <a href="http://localhost:8080" class="">项目组</a>
            <span class="pl-1 pr-1 text-gray-300">/</span>
            <span class="text-gray-400">漯河管理系统</span>
        </div>
        <div class="flex max-sm:flex-1 max-md:flex-1">
            <UInput
                class="flex-1"
                icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                placeholder="Search..."
            />
        </div>
    </div>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <div v-for="item in 10" class="col-1 col-span-3 2xl:col-span-2 xl:col-span-2 rounded-[6px] overflow-hidden">
            <nuxt-link to="/" class="cursor-pointer flex items-center justify-center w-full relative bg-white h-[50px]">
                <nuxt-img fit="cover" class="blur-[3px] w-full h-full object-cover" loading="lazy"
                          src="https://www.vipbic.com/uploads/20230923/466ccd86b419fbd0da712aa7532bee06.jpg"></nuxt-img>
                <a class="absolute text-[14px] font-bold text-white">品茗科技</a>
            </nuxt-link>
        </div>
    </div>
    <div class="mt-10 grid grid-cols-12 gap-4">
        <div v-for="item in 10" class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6">
            <AppArticleCardStock/>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'base-det'
})
</script>
