
<template>
    <NuxtLayout name="base">
        <template #default>
            <div id="content" v-html="compData.html"></div>
        </template>
        <template #sidebar>
            <h1 class="text-[22px]  font-bold">访问官网</h1>
            <nuxt-link class="mt-5 items-center flex overflow-hidden  text-white">
                <div class="bg-[#0000000f] h-[60px]  flex items-center justify-center w-[60px] flex-shrink-0 rounded-l-[15px]">
                    <svg class="bag-icon stroke-2 max-sm:text-[20px] text-[30px]" aria-hidden="true">
                        <use xlink:href="#haiwb-weixinxiaochengxu"></use>
                    </svg>
                </div>
                <span class="h-[60px] leading-[60px] rounded-r-[15px] px-[12px] bg-[#FFD55D] font-bold text-[20px] truncate text-[#333]">https://dig.ccccmixterccmixtermixter.org/</span>
            </nuxt-link>
            <h1 class="mt-10  text-[22px]  font-bold">文章目录</h1>
            <div class="mt-5 bg-[#8881]">
                <ul>
                    <template v-for="item in compData.tocHtml" :key="item.idx">
                        <li>
                            <span>{{item.title}}</span>
                        </li>
                    </template>
                </ul>
            </div>
        </template>
    </NuxtLayout>
</template>
<script setup lang="ts">
import $ from "jquery"
import {onMounted} from "vue";

definePageMeta({
    layout: false
})

const nuxtApp = useNuxtApp()
const route = useRoute()

const compData = reactive({
    title:'',
    html:'',
    tocHtml:<any>[]
})
const createHtml = function (){
    let  headings = $('#content').find('h1,h2,h3,h4,h5,h6');
    const tocHtml:any = [];
    headings.each(function(i:any, heading:any) {
        let level = heading.tagName.toLowerCase().replace("h", "")
        let  id = $(heading).attr('id') || ('heading-' + i);
        let  indent = new  Array(level - 1).join('&nbsp;&nbsp;');
        tocHtml.push({
            indent,
            id:id,
            level,
            idx:i,
            title:$(heading).find('.content').text()
        })
    });
    compData.tocHtml = tocHtml
}

onMounted(()=>{
    createHtml()
})

useHttp({
    url:'/admin/content/find',
    method:"post",
    body: {
        id: route.params.id
    }
}).then((res:any)=>{
    compData.html = res.data.html
})

</script>
