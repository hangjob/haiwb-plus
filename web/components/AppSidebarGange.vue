<template>
    <div class="flex flex-col rounded-[5px] border m-[-10px] border-solid border-slate-100">
        <div class="flex  px-3 py-[18px] border-b border-solid border-slate-100 items-center overflow-hidden">
            <svg class="flex-shrink-0 bag-icon stroke-2 text-[30px]" aria-hidden="true">
                <use xlink:href="#haiwb-wenjianjia"></use>
            </svg>
            <div class="font-bold text-gray-700 tracking-widest ml-2 mr-2 flex-1">
                <h3>{{ website.name }}</h3>
                <p class="text-gray-400 text-[12px] mt-2">{{ website.minSubDescription }}</p>
            </div>
            <div class="flex items-center justify-center border border-solid border-gray-200">
                <div
                    @click="compData.prev"
                    class="flex cursor-pointer px-1 py-1 items-center justify-center text-[12px] text-gray-300 border-r border-solid border-gray-200">
                    <svg class="flex-shrink-0 bag-icon stroke-1 stroke-cyan-500" aria-hidden="true">
                        <use xlink:href="#haiwb-arrow-left-bold"></use>
                    </svg>
                </div>
                <div @click="compData.next"
                     class="flex cursor-pointer px-1 py-1 items-center justify-center text-[12px] text-gray-300">
                    <svg class="flex-shrink-0 bag-icon stroke-1 stroke-cyan-500" aria-hidden="true">
                        <use xlink:href="#haiwb-arrow-right-bold"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="px-3 h-[110px] mt-2 py-[5px] overflow-hidden">
            <swiper
                ref="mySwiperRef"
                :modules="[SwiperAutoplay]"
                :loop="true"
                direction="vertical"
                :height="110"
                :autoplay="{ delay: 5000, disableOnInteraction: true,}"
                @swiper="onSwiper"
            >
                <swiper-slide v-for="(item,idx) in arrGroup( data||[],3) || []">
                    <div v-for="todo in item" class="flex items-center text-[14px] mb-[5px]">
                        <svg class="flex-shrink-0 bag-icon stroke-2 mr-2" aria-hidden="true">
                            <use xlink:href="#haiwb-xuexi"></use>
                        </svg>
                        <a :href="'/tag'+toRouter(todo)" class="text-gray-500 hover:underline text-[14px] hover:text-gray-700 flex-1 truncate mr-2">{{ todo.title }}</a>
                        <a :href="'/fl'+toRouter(todo.nav_id_find)" class="bg-gradient-to-r from-[#00b2d1] cursor-pointer text-white to-[#79c692] hover:from-[#79c692] hover:to-[#79c692] rounded-[3px] inline-block bg-amber-50 text-[12px] px-[5px] py-[5px]">{{todo.nav_id_find.title}}</a>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {arrGroup} from "~/utils";
import {useWebsite} from "~/composables/useWebsite";
type OptionsProp = Record<string, any>
const props = defineProps({
    data:  Array as PropType<OptionsProp[]>,
})
const compData = {
    swiper: null,
    next: () => {
    },
    prev: () => {
    }
}


/** swiper加载完毕 */
const onSwiper = (swiper: any) => {
    compData.swiper = swiper;
    compData.next = function () {
        swiper.slideNext()
    }
    compData.prev = function () {
        swiper.slidePrev()
    }
};

const website = useWebsite()
</script>
