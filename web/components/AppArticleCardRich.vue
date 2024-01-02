<template>
    <div class="px-3 py-3 rounded-[5px] bg-white overflow-hidden flex flex-col">
        <a :href="'/det'+toRouter(content)" class="overflow-hidden rounded-[6px] bg-white h-[120px] md:h-[130px] lg:h-[180px] xl:h-[130px] 2xl:h-[160px]">
            <nuxt-img fit="cover" :alt="content?.title" class="w-full h-full object-cover" loading="lazy"
                      :src="content.cover"></nuxt-img>
        </a>
        <div class="flex flex-col justify-between py-[4px]">
            <a :href="'/det'+toRouter(content)" class="font-bold text-[18px] text-gray-700  mt-2" v-html="keywordscolorful(content.title,route.query.s)"></a>
            <a :href="'/det'+toRouter(content)" class="text-[14px] text-gray-600 leading-4 mt-2 tracking-wide line-clamp-2" v-html="keywordscolorful(content.des,route.query.s)"></a>
        </div>
        <div class="flex flex-wrap items-center mt-2">
            <a :href="'/tag'+toRouter(item)" v-for="(item,idx) in content.keys_list" class="group flex mr-3 mb-2 items-center rounded-[5px] text-[12px] px-[5px] py-[6px] bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500">
                <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-white" aria-hidden="true">
                    <use xlink:href="#haiwb-biaoqian"></use>
                </svg>
                <span class="text-[12px] text-gray-500 group-hover:text-white">{{item.title}}</span>
            </a>
        </div>
        <div class="flex flex-1 items-end flex-row w-full">
            <div class="flex items-center max-md:items-start max-md:flex-col flex-1">
                <div class="items-center max-md:items-start max-md:flex-col flex flex-1">
                    <div class="flex items-center flex-row mr-2 mt-3">
                        <svg class="bag-icon stroke-2 mr-[2px]" aria-hidden="true">
                            <use xlink:href="#haiwb-tupian"></use>
                        </svg>
                        <span class="text-[14px]">{{website.name}}</span>
                    </div>
                    <div class="flex items-center flex-row mr-2 mt-3">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-naozhong"></use>
                        </svg>
                        <span class="text-[14px]">{{lunisolar(content.createdAt).format('lYn年 lM lD A')}}</span>
                    </div>
                    <div class="flex items-center flex-row mr-2 mt-3">
                        <svg class="bag-icon stroke-2 mr-[3px]" aria-hidden="true">
                            <use xlink:href="#haiwb-zuixinziyuan"></use>
                        </svg>
                        <span class="text-[14px]">访问 {{content.views}}</span>
                    </div>
                </div>
                <div class="flex items-center flex-row mt-3">
                    <a :href="'/fl'+toRouter(content.nav_id_list[content.nav_id_list.length - 1])" class="flex text-gray-500 items-center flex-row p-1 rounded-[5px] bg-blue-100">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-zixun"></use>
                        </svg>
                        <span class="text-[12px]">{{content.nav_id_list[content.nav_id_list.length - 1].title}}</span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import {useWebsite} from "~/composables/useWebsite";
import {keywordscolorful} from "~/composables/useTagColor";
const route = useRoute()
const props = defineProps({
    content:{
        type: Object,
        default:{}
    }
})
const website = useWebsite()
</script>
