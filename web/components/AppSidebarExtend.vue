<template>
    <div class="flex flex-col rounded-[5px] border border-solid border-slate-100 px-5">
        <div class="flex py-[18px] border-b border-solid border-slate-100 items-center overflow-hidden">
            <svg class="bag-icon stroke-2 flex-shrink-0" aria-hidden="true">
                <use xlink:href="#haiwb-zitidaxiao"></use>
            </svg>
            <h3 class="font-bold text-gray-700 tracking-widest ml-2 mr-2 flex-shrink-0">品茗科技</h3>
            <span class="text-gray-300 text-[12px] flex-shrink-0">品茗科技描述描述</span>
        </div>
        <div class="mt-3">
            <span v-for="item in keysData?.data || []" :key="item.id"
                  class="bg-gradient-to-r mr-4 mb-3 from-[#36cbff] cursor-pointer text-white to-[#2b28fc] hover:from-[#2b28fc] hover:to-[#2b28fc] rounded-[3px] inline-block bg-amber-50 text-[12px] px-[5px] py-[5px]">{{ item.title }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>

import {useRequest} from "~/composables/useRequest";

const {data: keysData}: { data: any } = await useRequest('/api/webv1/admin/keys/list', {
    method: 'POST',
    body: {
        limit: 10,
        label:2
    }
})

</script>
