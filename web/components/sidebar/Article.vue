<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        <svg class="bag-icon stroke-2 text-[18px] mr-[2px] group-hover:text-white" aria-hidden="true">
            <use xlink:href="#haiwb-remen"></use>
        </svg>
        更多相关
    </h1>
    <ul class="relative">
        <template v-for="(item,idx) in uniqueFunc(contentDataMores,'id')">
            <li v-if="idx <= 8" class="flex mt-6 flex-col">
                <nuxt-link to="/"
                           class="overflow-hidden cursor-pointer relative rounded-[6px] bg-white h-[130px] md:h-[250px] lg:h-[170px] xl:h-[200px] 2xl:h-[150px]">
                    <nuxt-img fit="cover" class="hover:blur-sm peer-blur-sm w-full h-full object-cover" loading="lazy"
                              :src="item.cover"></nuxt-img>
                    <a class="absolute text-[16px] font-bold text-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">品茗科技</a>
                    <time class="absolute text-[14px]  text-white  bottom-1 right-1">{{lunisolar(item.createdAt).format('lY年 lM lD A')}}</time>
                </nuxt-link>
                <h2 class="text-[18px] text-gray-700 font-bold mt-3 leading-tight">
                    <nuxt-link>{{ item.title }}</nuxt-link>
                </h2>
                <div class="flex flex-wrap mt-3">
                    <nuxt-link v-for="item in 4"
                               class="group flex mr-3 mb-2 items-center rounded-[5px] text-[12px] px-[5px] py-1 bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500">
                        <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-white" aria-hidden="true">
                            <use xlink:href="#haiwb-biaoqian"></use>
                        </svg>
                        <span class="text-[12px] text-gray-500 group-hover:text-white">测试</span>
                    </nuxt-link>
                </div>
                <p class="line-clamp-3 text-[14px] text-gray-400 leading-normal">{{ item.des }}</p>
            </li>
        </template>
    </ul>
</template>
<script lang="ts" setup>

import {useRequest} from "~/composables/useRequest";

const props = defineProps({
    content: {
        type: Object,
        default: {}
    }
})

const contentDataMores = <any>ref([]);
props?.content?.data?.nav_id?.forEach(async (item: any) => {
    const {data: contentDataMore}: { data: any } = await useRequest('/api/webv1/admin/content/list', {
        method: 'POST',
        body: {
            nav_id: item,
            limit: 5
        }
    })
    if (contentDataMore?.value?.data?.length) {
        contentDataMores?.value?.push(...contentDataMore?.value?.data)
    }
})
</script>
