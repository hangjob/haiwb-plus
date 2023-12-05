<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        <svg class="bag-icon stroke-2 text-[18px] mr-[8px] group-hover:text-white" aria-hidden="true">
            <use xlink:href="#haiwb-zuixinziyuan"></use>
        </svg>
        最新发布
    </h1>
    <ul class="hot-dotted pl-[15px] relative">
        <li class="relative mt-5" v-for="item in contentData?.data || []">
            <nuxt-link class="flex flex-col">
                <h3 class="line-clamp-2 leading-snug mb-3">{{item.title}}</h3>
                <div class="flex flex-row items-center justify-between">
                    <span class="text-[#AAAEB3] text-sm">赤壁市公共资源</span>
                    <span class="text-[#AAAEB3] text-sm">{{lunisolar(item.createdAt).format('YYYY/MM/DD HH:mm:ss')}}</span>
                </div>
            </nuxt-link>
        </li>
    </ul>
</template>
<script setup lang="ts">

import {useRequest} from "~/composables/useRequest";

const props = defineProps({
    content: {
        type: Object,
        default: {}
    }
})

const {data: contentData}: { data: any } = await useRequest('/api/webv1/admin/content/list', {
    method: 'POST',
    body: {
        limit: 8
    }
})
</script>
<style lang="less" scoped>
.hot-dotted {
    &::before {
        content: '';
        width: 1px;
        position: absolute;
        left: 0;
        top: 10px;
        bottom: 5px;
        border-left: 1px dashed rgba(30, 111, 255, 0.2);
    }

    li {
        &::before {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 100%;
            left: -17px;
            top: 9px;
            background-color: #1e6fff;
        }
    }
}
</style>
