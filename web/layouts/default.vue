<template>
    <div class="container mx-auto max-sm:p-[5px] max-md:p-[10px]">
        <div class="grid grid-cols-11 gap-4 mt-3">
            <div class="col-span-11 md:col-span-11 xl:col-span-2 2xl:col-span-2">
                <app-layout-right :data="data?.data?.layoutRight"></app-layout-right>
            </div>
            <div class="col-span-11 md:col-span-11 xl:col-span-8 2xl:col-span-6">
                <div class="bg-white max-sm:px-[15px] max-md:px-[15px] p-[30px] rounded-[20px]">
                    <slot/>
                </div>
            </div>
            <div class="col-span-11 md:col-span-11 xl:col-span-11 2xl:col-span-3">
                <app-search></app-search>
                <div class="bg-white rounded-[20px] max-sm:px-[15px] max-md:px-[15px] p-[30px]">
                    <div class="mb-[30px]">
                        <SidebarPhoto :data="data?.data?.photo"/>
                    </div>
                    <div>
                        <SidebarPhotoHorizontal :data="data?.data?.photoHorizontal"/>
                    </div>
                </div>
                <div class="sticky top-0 bg-white mt-[30px] rounded-[20px] max-sm:px-[15px] max-md:px-[15px] p-[30px] ">
                    <AppSidebarGange :data="data?.data?.gange"/>
                    <AppSidebarCardFull :data="data?.data?.cardFull"/>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";

const {data}: { data: any } = await useRequest('/api/webv1/web/home/layout', {
    method: 'POST',
})
</script>
<style lang="less" scoped>
body {

}
</style>
