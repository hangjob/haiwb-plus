<template>
    <AppBanner/>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <AppSidebarExtend class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6"/>
        <AppSidebarHot class="col-1 col-span-12 2xl:col-span-6 xl:col-span-6"/>
    </div>
    <template v-for="(item,idx) in compData?.content?.data?.rows">
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
        <template v-for="(item,idx) in compData?.content?.data?.rows">
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

const toast = useToast()
const modelValue = ref(1);
const loadingButton = ref(false);

const compData = reactive({
    content:{}
})

const getContentPapge = async (page: any) => {
    loadingButton.value = true
    const {data: contentData}: { data: any } = await useRequest('/api/webv1/admin/content/page', {
        method: 'POST',
        body: {
            page
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


useOn('modify-nav', (item: any) => {
})

onBeforeUnmount(() => {
    useOff('modify-nav')
})

</script>
