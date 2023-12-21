<template>
    <div class="flex flex-col rounded-[5px] border border-solid border-slate-100 px-5">
        <div class="flex py-[18px] border-b border-solid border-slate-100 items-center overflow-hidden">
            <svg class="flex-shrink-0 bag-icon stroke-2" aria-hidden="true">
                <use xlink:href="#haiwb-zitidaxiao"></use>
            </svg>
            <h3 class="font-bold text-gray-700 tracking-widest ml-2 mr-2 flex-shrink-0">专栏</h3>
            <span class="text-gray-300 text-[12px] flex-shrink-0">原创收录，最近添加</span>
        </div>
        <div class="pt-2 flex-1 flex flex-wrap justify-between">
            <nuxt-link :to="'/fl' + toRouter(item)" v-for="item in keysData?.data || []" :key="item.id"
                       class="flex max-md:w-[50%] max-md:mb-2 px-[5px] text-center flex-col items-center justify-center">
                <div
                    class="flex flex-col items-center justify-center text-[20px] rounded-[50%] bg-[#f9f9f9] h-[36px] w-[36px]">
                    <svg class="bag-icon stroke-1" aria-hidden="true">
                        <use :xlink:href="'#'+item.icon"></use>
                    </svg>
                </div>
                <span class="text-[12px] line-clamp-2 mt-1 text-gray-500">{{ item.title }}</span>
            </nuxt-link>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useRequest} from "~/composables/useRequest";

const {data: keysData}: { data: any } = await useRequest('/api/webv1/admin/nav/list', {
    method: 'POST',
    body: {
        limit: 4
    }
})
</script>
