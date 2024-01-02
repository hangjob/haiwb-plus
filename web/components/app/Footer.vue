<template>
    <div class="container mx-auto text-slate-500 mt-5 font-light mb-5 text-[14px] text-center max-sm:p-[5px] max-md:p-[10px]">
        <p>友情链接：
            <a class="hover:text-primary mr-2" href="https://www.vipbic.com/" target="_blank">Vipbic</a>
            <a class="hover:text-primary mr-2" href="https://www.itnavs.com/" target="_blank">全栈导航</a>
            <a class="hover:text-primary" href="https://vite.itnavs.com/" target="_blank">Bag-Admin</a>
        </p>
        <p>Copyrights©2024- {{website.name}} - <a class="hover:text-primary" href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备17016349号-4</a></p>
    </div>
</template>
<script lang="ts" setup>
import {useWebsite} from "~/composables/useWebsite";

const website = useWebsite()
</script>
