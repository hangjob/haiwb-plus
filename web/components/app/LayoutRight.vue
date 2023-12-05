<template>
    <div class="bg-white sticky top-0 rounded-[20px] py-8 px-8 text-center">
        <div class="bg-[#3f51b5] w-full rounded-[20px] py-10">
            <div class="grid grid-cols-12 relative">
                <nuxt-link to="/"
                           class="col-span-12 max-md:col-span-3 max-sm:col-span-6 max-lg:col-span-3 max-xl:col-span-2 my-4">
                    <div class="flex flex-col items-center justify-center">
                        <div
                            class="bg-[#fff] w-[50%] flex flex-col items-center justify-center p-[10px] rounded-[15px]">
                            <img class="w-full object-cover" src="/img/logo.png" alt="">
                        </div>
                        <span class="font-bold text-white mt-3">全栈导航</span>
                        <p class="text-[12px] text-white mt-2 px-4">找导航就上全栈导航</p>
                    </div>
                </nuxt-link>
                <nuxt-link :to="toRouter(item)"
                           class="col-span-12 max-md:col-span-3 max-sm:col-span-6 max-lg:col-span-3 max-xl:col-span-2 my-4"
                           v-for="item in navaData?.data || []">
                    <div class="flex flex-col items-center justify-center">
                        <div
                            class="bg-[#fff] flex flex-col items-center justify-center w-[100px] px-[20px] py-[15px] rounded-[15px]">
                            <svg class="bag-icon stroke-2 text-[40px]" aria-hidden="true">
                                <use :xlink:href="'#'+item.icon"></use>
                            </svg>
                            <span class="text-[14px] pt-2">{{ item.title }}</span>
                        </div>
                    </div>
                </nuxt-link>
                <div
                    class="col-span-12 max-md:col-span-3 max-sm:col-span-6 max-lg:col-span-3 max-xl:col-span-2 my-4 mt-8">
                    <div class="flex justify-center flex-col items-center p-[10px]">
                        <nuxt-img src="/img/qrcode.jpg" class="rounded-[10px]"></nuxt-img>
                        <p class="text-white mt-[5px] text-[12px]">微信公众号</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useRequest} from "~/composables/useRequest";
import {toRouter} from "~/utils";

const {data: navaData}: { data: any } = await useRequest("/api/webv1/admin/classify/list", {
    method: "POST",
})
</script>
