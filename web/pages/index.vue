<template>
    <div>
        <div class="flex items-center flex-row max-sm:flex-col max-md:flex-col">
            <div class="flex flex-1 items-center max-sm:mb-2 max-md:mb-2">
                <a href="http://localhost:8080" class="text-[14px]">项目组</a>
                <span class="text-[14px] pl-1 pr-1 text-gray-300">/</span>
                <span class="text-[14px] text-gray-300">漯河管理系统</span>
            </div>
            <div class="flex max-sm:flex-1 max-md:flex-1">
                <UInput
                    icon="i-heroicons-magnifying-glass-20-solid" size="xs" color="white" :trailing="false"
                    placeholder="Search..."
                    @keyup.enter="handleSearch"
                />
            </div>
        </div>
        <div class="mt-5 clearfix">
            <a href=""
               class="inline-block mr-5 mb-3 rounded-md border-solid border py-[8px] px-[10px] border-slate-200">
                <span>全部系统</span>
            </a>
        </div>
        <AppBanner/>
        <div class="mt-5 flex space-x-5">
            <AppSidebarExtend class="flex-1 flex-shrink-0"/>
            <AppSidebarHot class="flex-1  flex-shrink-0"/>
        </div>
        <div v-if="items.length">
            <div>
                <div v-for="(item,idx) in items" :key="item.id" class="mt-5 border border-slate-100 border-solid rounded-md">
                    <div>333</div>
                </div>
            </div>
        </div>
        <div v-else>
            <div>2222</div>
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
    </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
// const toast = useToast()

const items = ref([])
// const handleSearch = () => {
//     toast.add({
//         id: 'update_downloaded',
//         title: '正在搜索中...',
//         description: 'It will  be installed on restart. Restart now?',
//         icon: 'i-octicon-desktop-download-24',
//         timeout: 5000,
//         actions: [{
//             label: '没有找到数据',
//             click: () => {
//
//             }
//         }]
//     })
// }

await useHttp({
    url:'/admin/content/page',
    method:"post",
}).then((res:any)=>{
    items.value = res.data.rows
})
</script>
