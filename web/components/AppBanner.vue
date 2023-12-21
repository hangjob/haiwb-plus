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
           delay: 3000,
           disableOnInteraction: true,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide v-for="item in bannerListData?.data || []">
            <nuxt-link :to="toRouter(item.url)" class="bg-[#8881]  flex relative h-[280px] max-md:h-[150px] rounded-[10px] overflow-hidden">
                <nuxt-img :src="item.cover" class="w-full h-full object-cover"></nuxt-img>
                <div class="absolute bottom-[25px]  p-[20px] shadow-inner text-white left-[20px] bg-[#0006] rounded-[10px] text-[24px] max-md:text-[14px] font-bold w-[60%] max-md:w-auto max-md:right-[20px]">
                    <p class="line-clamp-2 leading-tight">{{item.des}}</p>
                </div>
            </nuxt-link>
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import {ref, onMounted, inject} from 'vue';
import {useRequest} from "~/composables/useRequest.js";

let mySwiper:any = null;
/** 断点 */
let breakpoints:any = ref(null);
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
const onSwiper = (swiper: any) => {
    mySwiper = swiper;
};
/** swiper切换 */
const onSlideChange = () => {

};


const {data: bannerListData}: { data: any } = await useRequest('/api/webv1/admin/banner/list', {
    method: 'POST',
    body: {
        // type:'home'
    }
})

</script>

<style scoped lang="less">
.active-item {
    color: tomato
}

.btns {
    margin-top: 20px
}
</style>
