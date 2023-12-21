<template>
    <NuxtLayout name="base">
        <template #default>
            <div class="flex  flex-row max-sm:flex-col max-md:flex-col">
                <div class="flex flex-1 items-center max-sm:mb-3 max-md:mb-3 text-[14px]">
                    <nuxt-link to="/">首页</nuxt-link>
                    <template v-for="(item,idx) in navThreeData?.data || []">
                        <span class="pl-1 pr-1 text-gray-300">/</span>
                        <span class="text-gray-400" v-if="idx === navThreeData?.data?.length-1">{{ item.title }}</span>
                        <nuxt-link v-else :to="toRouter(item)">{{ item.title }}</nuxt-link>
                    </template>
                </div>
                <div class="flex max-sm:flex-1 max-md:flex-1">
                    <UInput
                        class="flex-1"
                        icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div class="mt-5 grid grid-cols-12 gap-4">
                <div v-for="item in navListData?.data || []" class="col-1 col-span-3 2xl:col-span-2 xl:col-span-2 rounded-[6px] overflow-hidden">
                    <nuxt-link :to="toRouter(item.classify_det) + toRouter(item)" class="cursor-pointer flex items-center justify-center w-full relative bg-white h-[50px]">
                        <nuxt-img fit="cover" class="blur-[3px] w-full h-full object-cover" loading="lazy" :src="item.cover"></nuxt-img>
                        <span class="absolute text-[14px] font-bold text-white line-clamp-1 px-[5px]">{{item.title}}</span>
                    </nuxt-link>
                </div>
            </div>
            <template v-for="(item,idx) in contentData?.data?.rows || []">
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
                <template v-for="(item,idx) in contentData?.data?.rows || []">
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
                    :total="contentData?.data?.count"
                    show-first
                    show-last
                />
            </div>
        </template>
        <template #sidebar>

        </template>
    </NuxtLayout>
</template>
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";
import {toRouter} from "~/utils";
const route = useRoute()
const modelValue = ref(1);
definePageMeta({
    layout: false
})
const toast = useToast()
const loadingButton = ref(false);

const getContentPapge = async () => {
    const {data: contentData}: { data: any } = await useRequest('/api/webv1/admin/content/page', {
        method: 'POST',
        body: {
            page: modelValue.value,
            nav_id: route.params.id
        }
    })
    return contentData;
}

let contentData = await getContentPapge()

const {data: navThreeData}: { data: any } = await useRequest('/api/webv1/web/classify/three', {
    method: 'POST',
    body: {
        id: route.params.id,
    }
})

const {data: navListData}: { data: any } = await useRequest('/api/webv1/admin/nav/list', {
    method: 'POST',
    body: {
        pid: route.params.id,
    }
})



watch(modelValue, async () => {
    loadingButton.value = true
    contentData = await getContentPapge()
    loadingButton.value = false
})

</script>
