<template>
    <div class="px-3 py-3 rounded-[5px] bg-white overflow-hidden flex flex-col">
        <div class="overflow-hidden rounded-[6px] bg-white h-[120px] md:h-[130px] lg:h-[180px] xl:h-[130px] 2xl:h-[160px]">
            <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy"
                      :src="content.cover"></nuxt-img>
        </div>
        <div class="flex flex-col justify-between py-[4px]">
            <h1 class="font-bold text-[18px] text-gray-700  mt-2">{{content.title}}</h1>
            <p class="text-[14px] text-gray-600 leading-4 mt-2 tracking-wide line-clamp-2">{{content.des}}</p>
        </div>
        <div class="flex flex-wrap items-center mt-2">
            <nuxt-link class="group flex mr-3 mb-2 items-center rounded-[5px] text-[12px] px-[5px] py-1 bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500">
                <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-white" aria-hidden="true">
                    <use xlink:href="#haiwb-biaoqian"></use>
                </svg>
                <span class="text-[12px] text-gray-500 group-hover:text-white">测试</span>
            </nuxt-link>
        </div>
        <div class="flex items-center flex-wrap">
            <div class="flex items-center flex-1">
                <div class="flex items-center text-[16px] mr-2">
                    <svg class="bag-icon stroke-2 mr-[2px]" aria-hidden="true">
                        <use xlink:href="#haiwb-tupian"></use>
                    </svg>
                    <span class="text-[14px]">品茗</span>
                </div>
                <div class="flex items-center text-[16px]  mr-2">
                    <svg class="bag-icon stroke-2 mr-[2px]" aria-hidden="true">
                        <use xlink:href="#haiwb-naozhong"></use>
                    </svg>
                    <span class="text-[14px]">{{lunisolar(content.createdAt).format('lY年 lM lD A')}}</span>
                    <span class="text-[14px] text-gray-400"></span>
                </div>
                <div class="flex items-center text-[14px]">
                    <svg class="bag-icon stroke-2 mr-[3px]" aria-hidden="true">
                        <use xlink:href="#haiwb-zuixinziyuan"></use>
                    </svg>
                    <span class="text-[14px]">{{content.views}}</span>
                    <span class="text-[14px] text-gray-400"></span>
                </div>
            </div>
            <div class="flex items-center text-[14px]">
                <span class="group flex  items-center rounded-[5px] text-[12px] px-[7px] py-[5px] bg-gray-100  cursor-pointer hover:bg-green-500 hover:text-white text-gray-400">品茗科技</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    content:{
        type: Object,
        default:{}
    }
})
</script>
