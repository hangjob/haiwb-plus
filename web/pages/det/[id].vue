<template>
    <NuxtLayout name="base">
        <template #default>
            <div id="itnavsHtml" v-html="data?.data?.html"></div>
        </template>
        <template #sidebar>
            <div class="bg-white rounded-[20px] p-[30px] mb-8">
                <h1 class="text-[22px]  font-bold">访问官网</h1>
                <nuxt-link class="mt-5 items-center flex overflow-hidden  text-white">
                    <div
                        class="bg-[#0000000f] h-[60px]  flex items-center justify-center w-[60px] flex-shrink-0 rounded-l-[15px]">
                        <svg class="bag-icon stroke-2 max-sm:text-[20px] text-[30px]" aria-hidden="true">
                            <use xlink:href="#haiwb-weixinxiaochengxu"></use>
                        </svg>
                    </div>
                    <span
                        class="h-[60px] flex-1 leading-[60px] rounded-r-[15px] px-[12px] bg-[#FFD55D] font-bold text-[20px] truncate text-[#333]">https://dig.ccccmixterccmixtermixter.org/</span>
                </nuxt-link>
                <h1 class="mt-10  text-[22px]  font-bold">文章目录</h1>
                <div class="mt-5 bg-[#F6F8FF] rounded-[20px] p-[30px]">
                    <ul class="overflow-y-auto max-h-[600px] no-scrollbar">
                        <li @click="handleClickTocHtmlItem(item)"
                            class="mt-5 text-[#607d8b] hover:text-[#8bc34a] cursor-pointer" v-for="item in compData.tocHtml"
                            :key="item.idx">
                            <span :style="item.style">{{ item.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bg-white rounded-[20px] p-[30px] mb-8">
                <SidebarHot></SidebarHot>
            </div>
            <div class="bg-white rounded-[20px] p-[30px] mb-8">
                <SidebarArticle></SidebarArticle>
            </div>
            <div class="bg-white rounded-[20px] p-[30px] mb-8 sticky top-0">
                <h1 class="text-[22px]  font-bold">访问官网</h1>
                <nuxt-link class="mt-5 items-center flex overflow-hidden  text-white">
                    <div
                        class="bg-[#0000000f] h-[60px]  flex items-center justify-center w-[60px] flex-shrink-0 rounded-l-[15px]">
                        <svg class="bag-icon stroke-2 max-sm:text-[20px] text-[30px]" aria-hidden="true">
                            <use xlink:href="#haiwb-weixinxiaochengxu"></use>
                        </svg>
                    </div>
                    <span
                        class="h-[60px] flex-1 leading-[60px] rounded-r-[15px] px-[12px] bg-[#FFD55D] font-bold text-[20px] truncate text-[#333]">https://dig.ccccmixterccmixtermixter.org/</span>
                </nuxt-link>
                <h1 class="mt-10  text-[22px]  font-bold">文章目录</h1>
                <div class="mt-5 bg-[#F6F8FF] rounded-[20px] p-[30px]">
                    <ul class="overflow-y-auto max-h-[600px] no-scrollbar">
                        <li @click="handleClickTocHtmlItem(item)"
                            class="mt-5 text-[#607d8b] hover:text-[#8bc34a] cursor-pointer" v-for="item in compData.tocHtml"
                            :key="item.idx">
                            <span :style="item.style">{{ item.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>
<script setup lang="ts">
import $ from "jquery"
import {useRequest} from "~/composables/useRequest";
definePageMeta({
    layout: false
})
const route = useRoute()
const compData = reactive({
    tocHtml: <any>[]
})

const titleStyle = [
    {"font-size": '18px', 'font-weight': 'bold'}, {
        "font-size": '18px',
        'font-weight': 'bold'
    }, {"font-size": '16px', 'font-weight': 500},
    {"font-size": '14px', 'font-weight': 400}, {
        "font-size": '12px',
        'font-weight': 200
    }, {"font-size": '12px', 'font-weight': 200}
]

const createHtml = function () {
    let headings = $('#itnavsHtml').find('h1,h2,h3,h4,h5,h6');
    const tocHtml: any = [];
    headings.each(function (i: any, heading: any) {
        let level = parseInt(heading.tagName.toLowerCase().replace("h", "") || 0);
        let id = $(heading).attr('id') || ('heading-' + i);
        tocHtml.push({
            idx: i,
            level,
            id,
            style: {'padding-left': (level - 1) * 10 + 'px', ...titleStyle[level - 1]},
            title: $(heading).find('.content').text()
        })
        $(heading).find('.content').attr('id', id)
    });
    compData.tocHtml = tocHtml
}

const nuxtApp = useNuxtApp()

nuxtApp.hook("link:prefetch", () => {
    createHtml()
})

onMounted(() => {
    createHtml()
})

const handleClickTocHtmlItem = (item: any) => {
    const dom: any = $('#' + item.id);
    if (dom) {
        dom.get(0).scrollIntoView({
            behavior: 'smooth'
        });
        dom.addClass('bag-title-obvious')
        setTimeout(() => {
            dom.removeClass('bag-title-obvious')
        }, 1500)
    }
}

const {data} = await useRequest("/api/web/admin/content/find", {
    method: "POST",
    body: {
        id: route.params.id
    }
})

</script>
