<template>
    <div class="flex flex-col rounded-lg border border-solid border-slate-100">
        <div class="overflow-hidden rounded-t-lg relative bg-white h-[100px] md:h-[180px] lg:h-[180px] xl:h-[180px] 2xl:h-[150px]">
            <nuxt-link class="inline-block w-full h-full" :to="'/det'+toRouter(content)">
                <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy"
                          :src="content.cover"></nuxt-img>
            </nuxt-link>
            <div class="absolute top-3 left-3 flex flex-wrap">
                <template v-for="(item,idx) in content.nav_id_list">
                    <nuxt-link :to="'/fl'+toRouter(item)" v-if="idx >= 1"
                         class="rounded-[3px] text-white mr-2 flex flex-row items-center bg-[#00000099] px-[8px] py-[4px] hover:bg-[#22c55e]">
                        <span class="text-[12px]">{{ item.title }}</span>
                    </nuxt-link>
                </template>
            </div>
        </div>
        <nuxt-link :to="'/det'+toRouter(content)" class="flex flex-col px-[12px]">
            <h1 class="text-[16px] font-bold line-clamp-2 leading-tight my-3" v-html="keywordscolorful(content.title,route.query.s)"></h1>
        </nuxt-link>
        <nuxt-link :to="'/det'+toRouter(content)" class="flex flex-col bg-slate-50 px-[12px] py-3 min-h-[80px] items-center justify-center">
            <p class="text-[14px] text-gray-500 line-clamp-3 leading-snug" v-html="keywordscolorful(content.des,route.query.s)"></p>
        </nuxt-link>
        <div class="flex flex-row border-b border-solid border-slate-50 pb-2 px-[12px] items-center mt-2">
            <div class="flex-wrap flex">
                <template v-for="(item,idx) in content.keys_list">
                    <nuxt-link v-if="idx <= 4" :to="'/tag'+toRouter(item)"
                               class="flex mr-2 mb-1 group items-center pr-2 hover:bg-[#22c55e] rounded-[10px] bg-slate-100">
                        <div
                            class="rounded-[50%] mr-1  border border-solid border-slate-50 bg-white w-[22px] h-[22px] flex items-center justify-center">
                            <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-[#22c55e]" aria-hidden="true">
                                <use xlink:href="#haiwb-biaoqian"></use>
                            </svg>
                        </div>
                        <span class="text-[12px] inline-block group-hover:text-white">{{ item.title }}</span>
                    </nuxt-link>
                </template>
            </div>
        </div>
        <div class="flex items-center max-md:items-start max-md:flex-col justify-between py-[12px] px-[12px]">
            <template v-for="(item,idx) in content.nav_id_list">
                <nuxt-link :to="'/fl'+toRouter(item)" v-if="idx === 0"
                           :class="['flex group items-center pr-2 text-white rounded-[10px]']" :style="{backgroundColor:useColorHash(content.id)}">
                    <div
                        class="rounded-[50%] w-[22px] h-[22px] flex items-center justify-center">
                        <svg class="bag-icon stroke-2 text-[12px] group-hover:text-[#22c55e]" aria-hidden="true">
                            <use xlink:href="#haiwb-wenjianjia"></use>
                        </svg>
                    </div>
                    <span class="text-[12px]">{{ item.title }}</span>
                </nuxt-link>
            </template>
            <div>
                <span class="text-[14px]">{{ lunisolar(content.createdAt).format('lYn年 lM lD T 星期dd A') }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {keywordscolorful, useColorHash, useTagColor} from "~/composables/useTagColor";
const route = useRoute()
const props = defineProps({
    content: {
        type: Object,
        default: {}
    }
})
</script>
