<template>
    <div class="flex flex-col rounded-lg border border-solid border-slate-100">
        <div class="overflow-hidden rounded-t-lg bg-white h-[80px] md:h-[150px] lg:h-[150px] xl:h-[150px] 2xl:h-[150px]">
            <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy"
                      :src="content.cover"></nuxt-img>
        </div>
        <div class="flex flex-col px-[12px]">
            <h1 class="text-[16px] font-bold line-clamp-2 leading-tight my-3">{{content.title}}</h1>
        </div>
        <div class="flex flex-col bg-slate-50 px-[12px] py-3">
            <p class="text-[14px] text-gray-500 line-clamp-3 leading-snug">{{content.des}}</p>
        </div>
        <div class="flex flex-row border-b border-solid border-slate-50 pb-2 px-[12px] items-center mt-2">
            <div class="flex group items-center pr-2 hover:bg-[#22c55e] rounded-[10px] bg-slate-100">
                <div class="rounded-[50%] mr-1  border border-solid border-slate-50 bg-white w-[22px] h-[22px] flex items-center justify-center">
                    <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-[#22c55e]" aria-hidden="true">
                        <use xlink:href="#haiwb-biaoqian"></use>
                    </svg>
                </div>
                <span class="text-[12px] group-hover:text-white">品茗科22技</span>
            </div>
            <div class="flex justify-end flex-1 items-center">
                <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                    <use xlink:href="#haiwb-feiyong"></use>
                </svg>
                <span class="text-[14px]">品茗</span>
            </div>
        </div>
        <div class="flex items-center justify-between py-[12px] px-[12px]">
            <div class="rounded-[3px] text-[16px] flex flex-row items-center bg-[#8881] px-[5px] py-[5px]">
                <svg class="bag-icon stroke-2 mr-[2px]" aria-hidden="true">
                    <use xlink:href="#haiwb-kafei"></use>
                </svg>
                <span class="text-[14px]">品茗科技</span>
            </div>
            <div>
                <span class="text-[14px]">{{lunisolar(content.createdAt).format('lY年 lM lD A')}}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    content:{
        type: Object,
        default:{}
    }
})
</script>
