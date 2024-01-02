<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        <svg class="bag-icon stroke-2 text-[18px] mr-[2px] group-hover:text-white" aria-hidden="true">
            <use xlink:href="#haiwb-remen"></use>
        </svg>
        更多相关
    </h1>
    <ul class="relative">
        <template v-for="(item,idx) in uniqueFunc(data || [],'id')">
            <li v-if="idx <= 8" :class="['item-hot flex relative mt-6 flex-col','top_'+(idx+1)]">
                <nuxt-link :to="'/det'+toRouter(item)"
                           class="overflow-hidden cursor-pointer relative rounded-[6px] bg-white h-[130px] md:h-[250px] lg:h-[170px] xl:h-[200px] 2xl:h-[150px]">
                    <nuxt-img fit="cover" class="hover:blur-sm peer-blur-sm w-full h-full object-cover" loading="lazy"
                              :src="item.cover"></nuxt-img>
                    <span class="absolute text-[16px] font-bold text-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">{{website.name}}</span>
                    <span class="absolute text-[14px] text-white  bottom-1 right-1">
                        {{ lunisolar(item?.data?.createdAt).format('lYn年 lM lD T 星期dd A') }}
                    </span>
                </nuxt-link>
                <h2 class="text-[18px] text-gray-700 font-bold mt-3 leading-tight">
                    <a>{{ item.title }}</a>
                </h2>
                <div class="flex flex-wrap mt-3">
                    <a :href="'/tag'+toRouter(item)" v-for="item in item.keys_list"
                               class="group flex mr-3 mb-2 items-center rounded-[5px] text-[12px] px-[5px] py-1 bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500">
                        <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-white" aria-hidden="true">
                            <use xlink:href="#haiwb-biaoqian"></use>
                        </svg>
                        <span class="text-[12px] text-gray-500 group-hover:text-white">{{ item.title }}</span>
                    </a>
                </div>
                <p class="line-clamp-3 text-[14px] text-gray-400 leading-normal">{{ item.des }}</p>
            </li>
        </template>
    </ul>
</template>
<script lang="ts" setup>
import {useRequest} from "~/composables/useRequest";
import {uniqueFunc} from "~/utils";
import {useWebsite} from "~/composables/useWebsite";

type OptionsProp = Record<string, any>
const props = defineProps({
    data:  Array as PropType<OptionsProp[]>,
})

const website = useWebsite()
</script>
