<template>
    <div class="px-3 py-3 rounded-[5px] bg-white overflow-hidden">
        <div
            class="flex max-sm:flex-col max-md:flex-col max-lg:flex-col max-xl:flex-row max-2xl:flex-row"
            :class="[compData.classFlexDirection]"
        >
            <div
                class="relative flex flex-col max-sm:basis-full max-md:basis-full max-lg:basis-full basis-8/12 max-sm:mr-0
                max-sm:ml-0 max-md:mr-0 max-md:ml-0 max-lg:mr-0 max-lg:ml-0"
                :class="[compData.classCardLeft,compData.classCardRight]"
            >
                <a :href="'/det'+toRouter(content)" class="inline-block text-[18px] font-bold" v-html="keywordscolorful(content?.title,route?.query?.s)"></a>
                <a :href="'/det'+toRouter(content)" class="inline-block text-[14px] pt-4 leading-5 text-justify line-clamp-2" v-html="keywordscolorful(content?.des,route?.query?.s)"></a>
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
                                <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                                    <use xlink:href="#haiwb-naozhong"></use>
                                </svg>
                                <span class="text-[12px] text-gray-500">{{lunisolar(content?.createdAt).format('lYn年 lM lD A')}}</span>
                            </div>
                            <div class="flex items-center flex-row mr-2 mt-3">
                                <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                                    <use xlink:href="#haiwb-zuixinziyuan"></use>
                                </svg>
                                <span class="text-[12px] text-gray-500">访问 {{content.views}}</span>
                            </div>
                            <a :href="'/fl'+toRouter(content?.nav_id_list[0])" class="flex text-gray-500 items-center flex-row mt-3 p-1 rounded-[5px] bg-blue-100">
                                <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                                    <use xlink:href="#haiwb-zixun"></use>
                                </svg>
                                <span class="text-[12px]">{{content?.nav_id_list[0].title}}</span>
                            </a>
                        </div>
                        <div class="flex items-center flex-row mt-3">
                            <div class="flex items-center flex-row bg-slate-100 rounded-[5px] px-2 py-1">
                                <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                                    <use xlink:href="#haiwb-biaoqiankuozhan_wode-285"></use>
                                </svg>
                                <span class="text-[12px] text-gray-500">{{website.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NuxtLink
                :to="'/det'+toRouter(content)"
                class="max-sm:basis-full inline-block max-sm:mt-2  max-md:basis-full max-md:mt-2 max-lg:basis-full max-lg:mt-2 basis-4/12 ">
                <div
                    class="overflow-hidden rounded-[6px] bg-white sm-thumbnail md-thumbnail lg-thumbnail h-40"
                    :class="[compData.classFhumbnail]"
                >
                    <nuxt-img provider="strapi" preload loading="lazy" :alt="content?.title" fit="cover" class="w-full h-full object-cover"
                              :src="content.cover"></nuxt-img>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useWebsite} from "~/composables/useWebsite";
import {keywordscolorful} from "~/composables/useTagColor";
const route = useRoute()
const props = defineProps({
    classFlexDirection: {
        type: String,
        default: 'flex-row'
    },
    content:{
        type: Object,
        default:{}
    }
})
const compData = reactive({
    classFhumbnail: 'thumbnail-right',
    classFlexDirection: props.classFlexDirection,
    classCardLeft: '',
    classCardRight: 'mr-[10px]'
})
if (props.classFlexDirection !== 'flex-row') {
    compData.classFhumbnail = 'thumbnail-left'
    compData.classFlexDirection = 'flex-row-reverse max-xl:flex-row-reverse max-2xl:flex-row-reverse'
    compData.classCardLeft = 'ml-[10px]'
}
const website = useWebsite()
</script>

<style lang="less">
.thumbnail-left {
    clip-path: polygon(0 0, 90% 0, 100% 108%, 0 100%);

}

.thumbnail-right {
    clip-path: polygon(2% 0, 100% 0, 100% 100%, 10% 100%);
}
</style>
