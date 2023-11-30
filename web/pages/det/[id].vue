<template>
    <NuxtLayout name="base">
        <template #default>
            <h1 class="font-bold text-[30px]">{{contentData?.data?.title}}</h1>
            <div class="flex flex-wrap mt-3">
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-naozhong"></use>
                    </svg>
                    <span class="text-[14px]">发布时间<strong class="ml-2 mr-2">{{lunisolar(contentData?.data?.createdAt).format('lY年 lM lD A dddd')}}</strong></span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-xuexi"></use>
                    </svg>
                    <span class="text-[14px]">同类型<strong class="ml-2 mr-2">0</strong>篇</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-dianpu"></use>
                    </svg>
                    <span class="text-[14px]">阅读<strong class="ml-2 mr-2">{{contentData?.data?.views}}</strong>次数</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-diannao"></use>
                    </svg>
                    <span class="text-[14px]">大约字数<strong class="ml-2 mr-2">{{delHtmlTag(contentData?.data?.html).length}}</strong>个</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-zuixinziyuan"></use>
                    </svg>
                    <span class="text-[14px]">点赞<strong class="ml-2 mr-2">{{contentData?.data?.like}}</strong>次数</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-duoyuyanguanli"></use>
                    </svg>
                    <span class="text-[14px]">支持语言<strong class="ml-2">中文</strong></span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-anquanbangzhu"></use>
                    </svg>
                    <span class="text-[14px]">网站安全<strong class="ml-2 mr-2">加密</strong></span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-gaoliuchangdiyanshi-01"></use>
                    </svg>
                    <span class="text-[14px]">网站速度<strong class="ml-2 mr-2">疾速</strong></span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-kafei"></use>
                    </svg>
                    <span class="text-[14px]">阅读时长约<strong class="ml-2 mr-2">{{Math.ceil(delHtmlTag(contentData?.data?.html).length / 1000)}}</strong>分钟</span>
                </div>
            </div>
            <div class="mt-5">
                <div class="inline-block mr-3">
                    <nuxt-link class="flex group items-center pr-2 hover:bg-[#22c55e] rounded-[10px] bg-slate-100">
                        <div class="rounded-[50%] mr-1  border border-solid border-slate-50 bg-white w-[22px] h-[22px] flex items-center justify-center">
                            <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-[#22c55e]" aria-hidden="true">
                                <use xlink:href="#haiwb-biaoqian"></use>
                            </svg>
                        </div>
                        <span class="text-[12px] group-hover:text-white">品茗科22技</span>
                    </nuxt-link>
                </div>
                <div class="inline-block">
                    <nuxt-link class="flex group items-center pr-2 hover:bg-[#22c55e] rounded-[10px] bg-slate-100">
                        <div class="rounded-[50%] mr-1  border border-solid border-slate-50 bg-white w-[22px] h-[22px] flex items-center justify-center">
                            <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-[#22c55e]" aria-hidden="true">
                                <use xlink:href="#haiwb-biaoqian"></use>
                            </svg>
                        </div>
                        <span class="text-[12px] group-hover:text-white">品茗科22技</span>
                    </nuxt-link>
                </div>
            </div>
            <div class="mt-5">
                <nuxt-link to="/" class="inline-block rounded-sm border-dashed border-[1px] p-[8px] text-[14px] text-[#6a66ff]">
                    #资源下载
                </nuxt-link>
            </div>
            <div class="mt-5 overflow-hidden rounded-lg bg-white h-[300px] max-md:h-[150px] lg:h-[350px] xl:h-[300px] 2xl:h-[300px] text-center m-auto">
                <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy" :src="contentData?.data?.cover"></nuxt-img>
            </div>
            <div id="itnavsHtml" v-html="contentData?.data?.html"></div>
            <div class="flex mt-5 flex-col rounded-md border-solid border-[1px] px-[10px] py-[15px] border-zinc-100">
                <p class="text-[14px] mb-2 text-slate-500">如果您觉的本站对你有用，可以按住键盘的Ctrl + D 收藏本站</p>
                <p class="text-[14px] mb-2 text-slate-500">这些信息可能会帮助到你：
                    <a href="" style="color:#00aeff" target="_blank">下载帮助</a>|
                    <a href="" style="color:red" target="_blank">修改错误</a>|
                    <a href="" style="color:#ffbe02">进站必看</a>
                </p>
                <p class="text-[14px] text-slate-500">修改网站提供的资源，加群提示为修改者自留，<b>非本站信息</b>，注意鉴别</p>
            </div>
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
                        class="h-[60px] flex-1 leading-[60px] rounded-r-[15px] px-[12px] bg-[#FFD55D] font-bold text-[20px] truncate text-[#333]">{{ contentData?.data?.url }}</span>
                </nuxt-link>
                <h1 class="mt-10  text-[22px]  font-bold">文章目录</h1>
                <div class="mt-5 bg-[#F6F8FF] rounded-[20px] p-[30px]">
                    <ul class="overflow-y-auto max-h-[600px] no-scrollbar">
                        <li @click="handleClickTocHtmlItem(item)"
                            class="mt-5 text-[#607d8b] hover:text-[#8bc34a] cursor-pointer"
                            v-for="item in compData.tocHtml"
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
                <SidebarArticle :content="contentData"></SidebarArticle>
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
                        class="h-[60px] flex-1 leading-[60px] rounded-r-[15px] px-[12px] bg-[#FFD55D] font-bold text-[20px] truncate text-[#333]">{{ contentData?.data?.url }}</span>
                </nuxt-link>
                <h1 class="mt-10  text-[22px]  font-bold">文章目录</h1>
                <div class="mt-5 bg-[#F6F8FF] rounded-[20px] p-[30px]">
                    <ul class="overflow-y-auto max-h-[600px] no-scrollbar">
                        <li @click="handleClickTocHtmlItem(item)"
                            class="mt-5 text-[#607d8b] hover:text-[#8bc34a] cursor-pointer"
                            v-for="item in compData.tocHtml"
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
import {delHtmlTag} from "~/utils";

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

const {data: contentData} = await useRequest("/api/web/admin/content/find", {
    method: "POST",
    body: {
        id: route.params.id
    }
})


</script>
