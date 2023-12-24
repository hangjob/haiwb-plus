<template>
    <div class="flex group mt-5 flex-col relative w-full h-[300px] rounded-[20px] overflow-hidden">
        <nuxt-link class="absolute top-0 left-0 w-full h-full inline-block bg-cover group-hover:scale-125 bg-no-repeat"
                   :style="{backgroundImage:`url(${compData?.content?.data?.cover})`}">
            <div class="absolute top-0 left-0 w-full h-full bg-[#20232b] opacity-40 hover:opacity-60"></div>
        </nuxt-link>
        <div class="flex flex-col z-1 text-white relative p-[20px]">
            <div class="text-[64px] leading-none">{{lunisolar(compData?.content?.data?.createdAt).format('lDn')}}</div>
            <div class="mt-1">{{lunisolar(compData?.content?.data?.createdAt).format('lYn年 / lM')}}</div>
        </div>
        <div class="absolute text-white line-clamp-2 font-600 text-[22px] bottom-[20px] left-[20px] right-[20px]">
            {{compData?.content?.data?.title}}
        </div>
        <div @click.once="getContentData" class="absolute active:animate-spin duration-100 z-2 cursor-pointer right-[20px] top-[20px]">
            <svg class="bag-icon stroke-2 mr-1 text-white text-[36px]" aria-hidden="true">
                <use xlink:href="#haiwb-shuaxin"></use>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";

const compData = reactive({
    content: {}
})
const getContentData = async () => {
    const {data: content}: { data: any } = await useRequest('/api/webv1/web/common/contentRand', {
        method: 'POST',
    })
    compData.content = content;
}

await getContentData()

</script>
