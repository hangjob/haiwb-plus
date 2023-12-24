<template>
    <div class="container mx-auto max-sm:p-[5px] max-md:p-[10px]">
        <div class="grid grid-cols-11 gap-4 mt-3">
            <div class="rounded-[20px] col-span-11 md:col-span-11 xl:col-span-3 2xl:col-span-2">
                <app-layout-right></app-layout-right>
            </div>
            <div class="col-span-11 md:col-span-11 xl:col-span-8 2xl:col-span-6">
                <div class="bg-white max-sm:px-[15px] max-md:px-[15px] p-[30px] rounded-[20px]">
                    <slot/>
                </div>
            </div>
            <div class="col-span-11 xl:col-span-11 2xl:col-span-3 sticky top-0">
                <app-search></app-search>
                <slot name="sidebar" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>

</style>
