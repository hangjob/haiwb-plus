<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        免费并且好使用
    </h1>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <div v-for="item in data"
             class="col-1 col-span-6 md:col-span-4 2xl:col-span-4 xl:col-span-4 overflow-hidden">
            <a :href="'/tag'+toRouter(item)"
                       class="overflow-hidden inline-block w-full rounded-[6px] cursor-pointer relative bg-white h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px] 2xl:h-[100px]">
                <nuxt-img provider="strapi" v-if="item.cover" fit="cover" class="peer-blur-sm w-full h-full object-cover" loading="lazy"
                          :src="item.cover"></nuxt-img>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
type OptionsProp = Record<string, any>
const props = defineProps({
    data:  Array as PropType<OptionsProp[]>,
})
</script>
