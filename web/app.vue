<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
    <UNotifications/>
</template>

<script setup lang="ts">
import {useWebsite} from "~/composables/useWebsite";

const website = useWebsite()
useHead({
    title: website.value.name,
    meta: [
        {name: 'description', content: website.value.description},
        {name: 'keywords', content: website.value.keywords}
    ],
})
</script>
<style lang="less">
@import url('./assets/style.less');
@import url('./assets/media.less');
</style>
