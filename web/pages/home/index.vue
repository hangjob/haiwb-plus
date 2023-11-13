<template>
    <div class="container mx-auto space-y-3">
        <div class="grid grid-cols-12 gap-1">
            <div class="col-1 col-span-12">
                <AppArticleCardStock/>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-1 col-span-12 2xl:col-span-6 xl:col-span-4">
                <AppArticleCardStock/>
            </div>
            <div class="col-span-12 2xl:col-span-6 xl:col-span-4">
                <AppArticleCardStock/>
            </div>
            <div class="col-span-12 2xl:col-span-6 xl:col-span-4">
                <AppArticleCardStock/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'base'
})
const route = useRoute()

</script>
