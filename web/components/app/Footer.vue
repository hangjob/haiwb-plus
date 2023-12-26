<template>
    <div class="container mx-auto text-slate-500 mt-5 font-light mb-5 text-[14px] text-center max-sm:p-[5px] max-md:p-[10px]">
        <p>友情链接：
            <nuxt-link  class="hover:text-primary mr-2" to="https://www.vipbic.com/" target="_blank">Vipbic</nuxt-link>
            <nuxt-link  class="hover:text-primary mr-2" to="https://www.itnavs.com/" target="_blank">全栈导航</nuxt-link>
            <nuxt-link  class="hover:text-primary" to="https://vite.itnavs.com/" target="_blank">Bag-Admin</nuxt-link>
        </p>
        <p>Copyrights©2024- {{website.name}} - <nuxt-link class="hover:text-primary" to="https://beian.miit.gov.cn/" target="_blank">鄂ICP备17016349号-4</nuxt-link></p>
    </div>
</template>
<script lang="ts" setup>
import {useWebsite} from "~/composables/useWebsite";

const website = useWebsite()
</script>
