<template>
    <div class="flex  flex-row max-sm:flex-col max-md:flex-col">
        <div class="flex flex-1 items-center max-sm:mb-3 max-md:mb-3">
            <nuxt-link to="/">首页</nuxt-link>
            <span class="pl-1 pr-1 text-gray-300">/</span>
            <span class="text-gray-400">{{ navData?.data?.title }}</span>
        </div>
        <div class="flex max-sm:flex-1 max-md:flex-1">
            <UInput
                class="flex-1"
                icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                placeholder="Search..."
            />
        </div>
    </div>
    <div class="mt-5 clearfix">
        <nuxt-link href=""
                   class="inline-block mr-5 mb-3 rounded-md border-solid border py-[8px] px-[10px] border-slate-200">
            <span>全部系统</span>
        </nuxt-link>
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
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";

const toast = useToast()
const modelValue = ref(1);
const loadingButton = ref(false);

const handleSearch = () => {
    toast.add({
        id: 'update_downloaded',
        title: '正在搜索中...',
        description: 'It will  be installed on restart. Restart now?',
        icon: 'i-octicon-desktop-download-24',
        timeout: 5000,
        actions: [{
            label: '没有找到数据',
            click: () => {

            }
        }]
    })
}

const getContentPapge = async () => {
    const {data: contentData}: { data: any } = await useRequest('/api/web/admin/content/page', {
        method: 'POST',
        body: {
            page: modelValue.value,
        }
    })
    return contentData;
}

let contentData = await getContentPapge()
const route = useRoute()
const {data: navData}: { data: any } = await useRequest('/api/web/admin/nav/find', {
    method: 'POST',
    body: {
        where: {
            or: [
                {id: route.params.id},
                {router: '/' + route.params.id},
            ]
        }
    }
})

const {data: navListData}: { data: any } = await useRequest('/api/web/admin/nav/list', {
    method: 'POST',
})

console.log(navListData)

watch(modelValue, async () => {
    loadingButton.value = true
    contentData = await getContentPapge()
    loadingButton.value = false
})


useOn('modify-nav', (item: any) => {
    console.log(item, 1111)
})

onBeforeUnmount(() => {
    useOff('modify-nav')
})

</script>
