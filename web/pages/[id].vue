<template>
    <div class="flex  flex-row max-sm:flex-col max-md:flex-col">
        <div class="flex flex-1 items-center max-sm:mb-3 max-md:mb-3 text-[14px]">
            <a href="/">首页</a>
            <template v-for="(item,idx) in allData?.data?.breadcrumb || []">
                <span class="pl-1 pr-1 text-gray-300">/</span>
                <span class="text-gray-400" v-if="idx === allData?.data?.breadcrumb?.length-1">{{ item.title }}</span>
                <a v-else :href="toRouter(item)">{{ item.title }}</a>
            </template>
        </div>
    </div>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <div v-for="item in allData?.data?.flNavList || []" class="col-1 col-span-3 2xl:col-span-2 xl:col-span-2 rounded-[6px] overflow-hidden">
            <a :href="toRouter(item)" class="cursor-pointer flex items-center justify-center w-full relative bg-white h-[50px]">
                <nuxt-img provider="strapi" fit="cover" class="blur-[3px] w-full h-full object-cover" loading="lazy" :src="item.cover"></nuxt-img>
                <span class="absolute text-[14px] font-bold text-white line-clamp-1 px-[5px]">{{item.title}}</span>
            </a>
        </div>
    </div>
    <div v-if="!compData.content?.data?.count"
         class="bg-[#8881] w-full h-[274px] mt-5 rounded-[20px] flex items-center justify-center">
        <span class="yh_text text-black text-[30px]">没有找到符合条件的结果</span>
    </div>
    <template v-for="(item,idx) in compData?.content?.data?.rows || []">
        <div v-if="idx === 0" class="mt-5 border border-slate-100 border-solid rounded-md">
            <AppArticleCard :content="item"></AppArticleCard>
        </div>
        <div v-if="idx === 1" class="mt-5 border border-slate-100 border-solid rounded-md">
            <AppArticleCard :content="item" classFlexDirection="flex-row-reverse"></AppArticleCard>
        </div>
        <div v-if="idx > 1 && idx < 4" class="mt-5 border border-slate-100 border-solid rounded-md">
            <AppArticleCardRich :content="item"></AppArticleCardRich>
        </div>
    </template>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <template v-for="(item,idx) in compData?.content?.data?.rows || []">
            <div v-if="idx > 4" class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6">
                <AppArticleCardStock :content="item"/>
            </div>
        </template>
    </div>
    <div class="mt-5 flex justify-center">
        <UPagination
            :first-button="{
                icon: 'i-heroicons-arrow-small-left-20-solid',
                label: 'First',
                color: 'gray',
            }"
            :last-button="{
                icon: 'i-heroicons-arrow-small-right-20-solid',
                trailing: true,
                label: 'Last',
                color: 'gray',
            }"
            :activeButton="{
                loading:loadingButton
            }"
            :inactiveButton="{

            }"
            v-model="modelValue"
            :total="compData.content?.data?.count"
            show-first
            show-last
            @update:model-value="hanlePageUpdate"
        />
    </div>
</template>
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";
import {toRouter} from "~/utils";
import {useWebsite} from "~/composables/useWebsite";

const modelValue = ref(1);
const loadingButton = ref(false);
const route = useRoute()
const website = useWebsite()

const compData = reactive({
    content:{}
})

const getContentPapge = async (page:any) => {
    loadingButton.value = true
    const {data: contentData}: { data: any } = await useRequest('/api/webv1/web/home/contentPage', {
        method: 'POST',
        body: {
            page,
            id: route.params.id
        }
    })
    loadingButton.value = false
    compData.content = contentData
    return contentData;
}

await getContentPapge(modelValue.value)

const {data:allData}: { data: any } = await useRequest('/api/webv1/web/home/fl', {
    method: 'POST',
    body:{
        order: 'like',
        id: route.params.id,
    }
})

const hanlePageUpdate = async (page: any) => {
    await getContentPapge(page)
}


useHead({
    title: allData?.value?.data?.breadcrumb[allData?.value?.data?.breadcrumb?.length - 1].title + '-' + website.value.name,
    meta: [
        {name: 'description', content: allData?.value?.data?.breadcrumb[allData?.value?.data?.breadcrumb?.length - 1].des},
    ],
})

definePageMeta({
    keepalive: true,
})
</script>
