<template>
    <div class="flex flex-col rounded-[5px] border border-solid border-slate-100 px-5">
        <div class="flex py-[18px] border-b border-solid border-slate-100 items-center overflow-hidden">
            <svg class="flex-shrink-0 bag-icon stroke-2" aria-hidden="true">
                <use xlink:href="#haiwb-zitidaxiao"></use>
            </svg>
            <h3 class="font-bold text-gray-700 tracking-widest ml-2 mr-2 flex-shrink-0">品茗科技2</h3>
            <span class="text-gray-300 text-[12px] flex-shrink-0">品茗科技描述描述</span>
        </div>
        <div class="pt-2 pb-2 flex justify-between">
            <div v-for="item in keysData?.data || []" :key="item.id" class="flex flex-col items-center justify-center">
                <div
                    class="flex flex-col items-center justify-center text-[20px] rounded-[50%] bg-[#f9f9f9] h-[36px] w-[36px]">
                    <svg class="bag-icon stroke-1" aria-hidden="true">
                        <use :xlink:href="'#'+item.icon"></use>
                    </svg>
                </div>
                <span class="text-[12px] mt-1 text-gray-500">{{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useRequest} from "~/composables/useRequest";

const {data: keysData}: { data: any } = await useRequest('/api/web/admin/nav/list', {
    method: 'POST',
    body: {
        where: {pid: {key: 'not', value: null}}
    }
})
</script>
