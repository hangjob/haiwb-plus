<template>
    <div class="container mx-auto max-sm:p-[20px]">
        <div class="grid grid-cols-11 gap-4 mt-3">
            <div class="bg-white rounded-[20px] p-[30px] col-span-11 md:col-span-3 xl:col-span-3 2xl:col-span-2">
                1
            </div>
            <div class="bg-white rounded-[20px] p-[30px] col-span-11 md:col-span-8 xl:col-span-8 2xl:col-span-6">
                <slot></slot>
            </div>
            <div class="bg-white rounded-[20px] p-[30px] col-span-11 xl:col-span-11 2xl:col-span-3">

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
