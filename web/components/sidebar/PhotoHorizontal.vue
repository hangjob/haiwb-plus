<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        更多相关
    </h1>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <div v-for="item in contentData?.data || []" class="col-1 col-span-6 md:col-span-4 2xl:col-span-4 xl:col-span-4 overflow-hidden">
            <nuxt-link to="/"
                       class="overflow-hidden inline-block w-full rounded-[6px] cursor-pointer relative bg-white h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px] 2xl:h-[100px]">
                <nuxt-img fit="cover" class="peer-blur-sm w-full h-full object-cover" loading="lazy"
                          :src="item.cover"></nuxt-img>
            </nuxt-link>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";

const {data: contentData}: { data: any } = await useRequest('/api/web/admin/keys/list', {
    method: 'POST',
    body: {
        where: {
            label: {
                key: 'eq',
                value: 1
            },
            cover: {
                key: 'ne',
                value: ''
            }
        }
    }
})
</script>
