<template>
    <div class="grid grid-cols-12 gap-3">
        <div v-for="item in contentData?.data || []"
             class="hover:shadow-md cursor-pointer p-[15px] rounded-[10px] col-1 bg-white col-span-6 sm:col-span-12 md:col-span-4 2xl:col-span-6 xl:col-span-6 overflow-hidden">
            <div class="flex">
                <svg class="bag-icon stroke-2 mr-[5px] text-[20px] group-hover:text-red-600" aria-hidden="true">
                    <use xlink:href="#haiwb-biaoqian"></use>
                </svg>
                <div class="flex flex-col">
                    <h3 class="text-[16px] font-bold">{{item.title}}</h3>
                    <span class="text-[#8a8a8a] text-[14px] mt-3">已发布<em>11</em>篇文章</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";

const {data: contentData}: { data: any } = await useRequest('/api/web/admin/nav/list', {
    method: 'POST',
    body: {
        where: {
            pid: {
                key: 'ne',
                value: ''
            }
        },
        limit: 10
    }
})
console.log(contentData)
</script>
