<template>
    <div class="flex mt-[30px]" v-for="item in contentData?.data || []">
        <div
            class="basis-4/12 flex-shrink-0 mr-4 overflow-hidden rounded-[6px] bg-white h-[80px] md:h-[150px] lg:h-[120px] xl:h-[150px] 2xl:h-[100px]">
            <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy"
                      src="https://www.vipbic.com/uploads/20230923/466ccd86b419fbd0da712aa7532bee06.jpg"></nuxt-img>
        </div>
        <div class="flex flex-col justify-between flex-1 py-[4px]">
            <div class="flex flex-col">
                <div class="flex">
                    <span class="text-[14px] text-gray-400">黄石一体化</span>
                </div>
                <div class="mt-2">
                    <h1 class="font-black leading-[1.4] line-clamp-2">{{ item.title }}</h1>
                </div>
            </div>
            <div class="flex items-center">
                <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                    <use xlink:href="#haiwb-naozhong"></use>
                </svg>
                <span class="text-[14px] text-gray-600">{{ lunisolar(item.createdAt).format('lM lD A dddd') }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useRequest} from "~/composables/useRequest.js";

const {data: contentData}: { data: any } = await useRequest('/api/web/admin/content/list', {
    method: 'POST',
    body: {
        where: {
            label: {
                key: 'eq',
                value: 3
            }
        },
        limit: 5
    }
})
</script>
