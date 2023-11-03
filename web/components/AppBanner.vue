<template>
    <swiper
        ref="mySwiperRef"
        :modules="[SwiperPagination, SwiperScrollbar,SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="40"
        :breakpoints="breakpoints"
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{
           delay: 6000,
           disableOnInteraction: true,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>
            <div class="bg-[#8881] h-[280px] max-md:h-[150px] rounded-[10px]"> Slide 1</div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-[#8881] h-[280px] max-md:h-[150px] rounded-[10px]"> Slide 2</div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-[#8881] h-[280px] max-md:h-[150px] rounded-[10px]"> Slide 3</div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import {ref, onMounted, inject} from 'vue';

let mySwiper = null;
/** 断点 */
let breakpoints = ref(null);
breakpoints.value = {
    320: {  //当屏幕宽度大于等于320
        slidesPerView: 1,
        spaceBetween: 10
    },
    768: {  //当屏幕宽度大于等于768
        slidesPerView: 1,
        spaceBetween: 20
    },
    1280: {  //当屏幕宽度大于等于1280
        slidesPerView: 1,
        spaceBetween: 30
    }
}

/** 自定义按钮 */
function toPrev() {
    mySwiper.slidePrev();
}

function toNext() {
    mySwiper.slideNext();
}

/** swiper加载完毕 */
const onSwiper = (swiper) => {
    mySwiper = swiper;
};
/** swiper切换 */
const onSlideChange = () => {
    console.log('slide change');
};

</script>

<style scoped lang="less">
.active-item {
    color: tomato
}

.btns {
    margin-top: 20px
}
</style>
