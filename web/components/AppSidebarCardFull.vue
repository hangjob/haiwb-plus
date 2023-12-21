<template>
    <div class="flex mt-[30px]" v-for="item in contentData?.data || []">
        <nuxt-link :to="toRouter(item)"
                   class="basis-4/12 flex-shrink-0 mr-4 overflow-hidden rounded-[6px] bg-white h-[80px] md:h-[150px] lg:h-[120px] xl:h-[150px] 2xl:h-[100px]">
            <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy"
                      :src="item.cover"></nuxt-img>
        </nuxt-link>
        <div class="flex flex-col justify-between flex-1 py-[4px]">
            <div class="flex flex-col">
                <div class="flex">
                    <nuxt-link :to="'/fl'+toRouter(item?.nav_id_list[0])"
                               class="flex text-gray-500 items-center flex-row p-1 rounded-[5px] bg-blue-100">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-zixun"></use>
                        </svg>
                        <span class="text-[12px]">{{ item?.nav_id_list[0].title }}</span>
                    </nuxt-link>
                </div>
                <nuxt-link :to="'/det'+toRouter(item)" class="mt-2">
                    <h1 class="font-black leading-[1.4] line-clamp-2">{{ item.title }}</h1>
                </nuxt-link>
            </div>
            <div class="flex items-center">
                <svg class="bag-icon stroke-2 mr-1 max-md:hidden" aria-hidden="true">
                    <use xlink:href="#haiwb-naozhong"></use>
                </svg>
                <span class="text-[14px] text-gray-600">{{
                        lunisolar(item.createdAt).format('lYn年 lM lD T 星期dd A')
                    }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useRequest} from "~/composables/useRequest.js";

const {data: contentData}: { data: any } = await useRequest('/api/webv1/admin/content/list', {
    method: 'POST',
    body: {
        label: 3,
        limit: 5
    }
})
</script>
