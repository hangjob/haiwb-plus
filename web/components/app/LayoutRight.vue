<template>
    <div class="bg-white sticky top-0 rounded-[20px] max-sm:px-[15px] max-md:px-[15px] p-[30px] text-center">
        <div class="bg-[#3f51b5] w-full rounded-[20px] py-10">
            <div class="grid grid-cols-12 relative">
                <a href="/"
                           class="col-span-12 max-md:col-span-3 max-sm:col-span-6 max-lg:col-span-3 max-xl:col-span-2 my-4">
                    <div class="flex flex-col items-center justify-center">
                        <div
                            class="bg-[#fff] w-[50%] flex flex-col items-center justify-center p-[10px] rounded-[15px]">
                            <img class="w-full object-cover" src="/img/logo.png" :alt="website.name">
                        </div>
                        <span class="font-bold text-white mt-3">{{ website.name }}</span>
                        <p class="text-[12px] text-white mt-2 px-4 leading-tight">{{ website.minSubDescription }}</p>
                    </div>
                </a>
                <a :href="toRouter(item)"
                           class="col-span-12 max-md:col-span-3 max-sm:col-span-6 max-lg:col-span-3 max-xl:col-span-2 my-4"
                           v-for="item in data">
                    <div class="flex flex-col items-center justify-center">
                        <div
                            class="bg-[#fff] flex flex-col items-center justify-center w-[100px] px-[20px] py-[15px] rounded-[15px]">
                            <svg class="bag-icon stroke-2 text-[40px]" aria-hidden="true">
                                <use :xlink:href="'#'+item.icon"></use>
                            </svg>
                            <span class="text-[14px] pt-2">{{ item.title }}</span>
                        </div>
                    </div>
                </a>
                <div
                    class="col-span-12 max-md:col-span-3 max-sm:col-span-6 max-lg:col-span-3 max-xl:col-span-2 my-4">
                    <div class="flex justify-center flex-col items-center p-[10px] max-md:pt-0">
                        <img src="/img/qrcode.png" class="rounded-[10px] w-[60%]" :alt="website.name"/>
                        <p class="text-white mt-[5px] text-[12px]">微信公众号</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {toRouter} from "~/utils";
import {useWebsite} from "~/composables/useWebsite";

const props = defineProps({
    data: Array,
})
const website = useWebsite()
</script>
