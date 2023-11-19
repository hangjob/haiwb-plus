<template>
    <div class="flex  flex-row max-sm:flex-col max-md:flex-col">
        <div class="flex flex-1 items-center max-sm:mb-3 max-md:mb-3">
            <a href="http://localhost:8080" class="">项目组</a>
            <span class="pl-1 pr-1 text-gray-300">/</span>
            <span class="text-gray-400">漯河管理系统</span>
        </div>
        <div class="flex max-sm:flex-1 max-md:flex-1">
            <UInput
                class="flex-1"
                icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                placeholder="Search..."
                @keyup.enter="handleSearch"
            />
        </div>
    </div>
    <div class="mt-5 clearfix">
        <nuxt-link href=""
           class="inline-block mr-5 mb-3 rounded-md border-solid border py-[8px] px-[10px] border-slate-200">
            <span>全部系统</span>
        </nuxt-link>
    </div>
    <AppBanner/>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <AppSidebarExtend class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6"/>
        <AppSidebarHot class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6"/>
    </div>
    <div class="mt-5 border border-slate-100 border-solid rounded-md" v-for="(item,idx) in data?.data?.rows || []" :key="idx">
        <AppArticleCard :content="item"></AppArticleCard>
    </div>
    <div class="mt-5 border border-slate-100 border-solid rounded-md">
        <AppArticleCard classFlexDirection="flex-row-reverse"></AppArticleCard>
    </div>
    <div class="mt-5 border border-slate-100 border-solid rounded-md">
        <AppArticleCardRich></AppArticleCardRich>
    </div>
    <div class="mt-5 border border-slate-100 border-solid rounded-md">
        <AppArticleCardRich></AppArticleCardRich>
    </div>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <div class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6">
            <AppArticleCardStock/>
        </div>
        <div class="col-span-12 2xl:col-span-6 xl:col-span-6">
            <AppArticleCardStock/>
        </div>
        <div class="col-span-12 2xl:col-span-6 xl:col-span-6">
            <AppArticleCardStock/>
        </div>
    </div>

</template>
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";

const toast = useToast()
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
const {data,pending} = await useRequest('/api/web/admin/content/page',{
    method:'POST',
    body:{
        a:1
    }
})
</script>
