<template>
    <NuxtLayout name="base">
        <template #default>
            <div class="flex  flex-row max-sm:flex-col max-md:flex-col">
                <div class="flex flex-1 items-center max-sm:mb-3 max-md:mb-3 text-[14px]">
                    <nuxt-link href="/">首页</nuxt-link>
                    <span class="pl-1 pr-1 text-gray-300">/</span>
                    <span class="text-gray-400">话题：{{ keysData?.data?.title }}</span>
                </div>
                <div class="flex max-sm:flex-1 max-md:flex-1">
                    <UInput
                        class="flex-1"
                        icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div class="mt-5 flex flex-col p-[30px] bg-[#8881] rounded-[20px]">
                <h1 class="text-[24px] font-bold">{{ keysData?.data?.title }}</h1>
                <p class="mt-3 text-[#9DA0B3]">{{ keysData?.data?.des }}</p>
            </div>
            <div class="mt-10 grid grid-cols-12 gap-4">
                <div v-for="item in compData?.content?.data?.rows || []"
                     class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6">
                    <AppArticleCardStock :content="item"/>
                </div>
            </div>
            <div class="mt-5 flex justify-center">
                <UPagination
                    :first-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'First', color: 'gray',}"
                    :last-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true,label: 'Last',color: 'gray',}"
                    :activeButton="{ loading:loadingButton}"
                    :inactiveButton="{}"
                    v-model="modelValue"
                    :total="compData.content?.data?.count"
                    show-first
                    show-last
                    @update:model-value="hanlePageUpdate"
                />
            </div>
        </template>
        <template #sidebar>
            <div class="bg-white rounded-[20px] p-[30px]">
                <SidebarTag :navId="keysData?.data?.nav_det?.id"/>
            </div>
        </template>
    </NuxtLayout>
</template>
<script setup lang="ts">
// 推荐话题
import {useRequest} from "~/composables/useRequest";

const toast = useToast()
const modelValue = ref(1);
const route = useRoute()
const loadingButton = ref(false);

definePageMeta({
    layout: false
})

const compData = reactive({
    content:{}
})

const {data: keysData}: { data: any } = await useRequest('/api/webv1/admin/keys/find', {
    method: 'POST',
    body: {
        id: route.params.id,
    },
})

const getContentPapge = async (page:any) => {
    loadingButton.value = true
    const {data: contentData}: { data: any } = await useRequest('/api/webv1/admin/content/page', {
        method: 'POST',
        body: {
            page,
            keys: route.params.id
        }
    })
    loadingButton.value = false
    compData.content = contentData
    return contentData;
}
await getContentPapge(modelValue.value)
const hanlePageUpdate = async (page: any) => {
    await getContentPapge(page)
}
</script>
