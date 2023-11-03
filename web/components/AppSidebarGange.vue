<template>
    <div class="flex flex-col rounded-[5px] border border-solid border-slate-100 px-5">
        <div class="flex py-[18px] border-b border-solid border-slate-100 items-center overflow-hidden">
            <svg class="flex-shrink-0 bag-icon stroke-2" aria-hidden="true">
                <use xlink:href="#haiwb-zitidaxiao"></use>
            </svg>
            <h3 class="font-bold text-gray-700 tracking-widest ml-2 mr-2 flex-shrink-0">品茗科技2</h3>
            <span class="text-gray-300 text-[12px] flex-shrink-0 flex-1">品茗科技描述描述</span>
            <div class="flex items-center justify-center flex-shrink-0 border border-solid border-gray-200">
                <div
                    @click="compData.prev"
                    class="flex cursor-pointer px-1 py-1 items-center justify-center text-[12px] text-gray-300 border-r border-solid border-gray-200">
                    <svg class="flex-shrink-0 bag-icon stroke-1 stroke-cyan-500" aria-hidden="true">
                        <use xlink:href="#haiwb-arrow-left-bold"></use>
                    </svg>
                </div>
                <div @click="compData.next" class="flex cursor-pointer px-1 py-1 items-center justify-center text-[12px] text-gray-300">
                    <svg class="flex-shrink-0 bag-icon stroke-1 stroke-cyan-500" aria-hidden="true">
                        <use xlink:href="#haiwb-arrow-right-bold"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="h-[65px] mt-2 py-[5px] overflow-hidden">
            <swiper
                ref="mySwiperRef"
                :modules="[SwiperAutoplay]"
                :loop="true"
                direction="vertical"
                :height="65"
                :autoplay="{ delay: 60000, disableOnInteraction: true,}"
                @swiper="onSwiper"
            >
                <swiper-slide>
                    <div class="flex items-center text-[14px] mb-[5px]">
                        <svg class="flex-shrink-0 bag-icon stroke-2 mr-2" aria-hidden="true">
                            <use xlink:href="#haiwb-shequxiaozhan"></use>
                        </svg>
                        <span
                            class="text-gray-500 text-[14px] flex-1 truncate mr-2">第一信封初步评审表（形式评审）1</span>
                        <a class="bg-gradient-to-r from-[#f9f9f9] cursor-pointer text-gray-600 hover:text-white to-[#f9f9f9] hover:from-[#2b28fc] hover:to-[#2b28fc] rounded-[3px] inline-block bg-amber-50 text-[12px] px-[5px] py-[5px]"
                           href="">品茗科技</a>
                    </div>
                    <div class="flex items-center text-[14px]">
                        <svg class="flex-shrink-0 bag-icon stroke-2 mr-2" aria-hidden="true">
                            <use xlink:href="#haiwb-shequxiaozhan">品茗科技</use>
                        </svg>
                        <span class="text-gray-500 text-[14px] flex-1 truncate mr-2">第一信封初步评审表（形式评审）1第一信封初步评审表（形式评审）1第一信封初步评审表（形式评审）1</span>
                        <a class="bg-gradient-to-r from-[#f9f9f9] cursor-pointer text-gray-600 hover:text-white to-[#f9f9f9] hover:from-[#2b28fc] hover:to-[#2b28fc] rounded-[3px] inline-block bg-amber-50 text-[12px] px-[5px] py-[5px]"
                           href="">品茗科技</a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-[#8881]"> Slide 2</div>
                    <div class="bg-[#8881]"> Slide 2</div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script lang="ts" setup>

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

</script>
