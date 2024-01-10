<template>
    <NuxtLayout name="base">
        <template #default>
            <h1 class="font-bold text-[30px]">{{ contentData?.data?.title }}</h1>
            <div class="flex flex-wrap mt-3">
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-naozhong"></use>
                    </svg>
                    <span class="text-[14px]">发布时间<strong
                        class="ml-2 mr-2">{{
                            lunisolar(contentData?.data?.createdAt).format('lYn年 lM lD T 星期dd A')
                        }}</strong></span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-xuexi"></use>
                    </svg>
                    <span class="text-[14px]">同类型<strong
                        class="ml-2 mr-2">{{ contentData?.data?.content_count }}</strong>篇</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-dianpu"></use>
                    </svg>
                    <span class="text-[14px]">阅读<strong class="ml-2 mr-2">{{ contentData?.data?.views }}</strong>次数</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-diannao"></use>
                    </svg>
                    <span class="text-[14px]">大约字数<strong
                        class="ml-2 mr-2">{{ delHtmlTag(contentData?.data?.html).length }}</strong>个</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-zuixinziyuan"></use>
                    </svg>
                    <span class="text-[14px]">点赞<strong
                        class="ml-2 mr-2">{{ contentData?.data?.like }}</strong>次数</span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-anquanbangzhu"></use>
                    </svg>
                    <span class="text-[14px]">网站安全<strong
                        class="ml-2 mr-2">{{ ishttps('https://xxx.com') ? '加密' : '非加密' }}</strong></span>
                </div>
                <div class="flex items-center mt-3 mr-5">
                    <svg class="bag-icon stroke-2 mr-[5px]" aria-hidden="true">
                        <use xlink:href="#haiwb-kafei"></use>
                    </svg>
                    <span class="text-[14px]">阅读时长约<strong
                        class="ml-2 mr-2">{{ Math.ceil(delHtmlTag(contentData?.data?.html).length / 1000) }}</strong>分钟</span>
                </div>
            </div>
            <div class="mt-5">
                <a :href="'/tag'+toRouter(item)" v-for="item in contentData?.data?.keys_list"
                   class="inline-block border-dashed border-[1px] mr-3 mt-2 px-[6px] py-[4px] text-[14px] rounded-[3px] text-[#6a66ff]">
                    #{{ item.title }}
                </a>
            </div>
            <div class="mt-5">
                <div class="inline-block mr-3 mt-2" v-for="(item,idx) in contentData?.data?.nav_id_list">
                    <a :href="'/fl'+toRouter(item)"
                       :class="['flex group items-center pr-2 hover:bg-[#22c55e] rounded-[10px]',useTagColor(idx)]">
                        <div
                            class="rounded-[50%] mr-1 w-[22px] h-[22px] flex items-center justify-center">
                            <svg class="bag-icon stroke-2 mr-[2px] text-[12px] group-hover:text-[#22c55e]"
                                 aria-hidden="true">
                                <use xlink:href="#haiwb-wenjianjia"></use>
                            </svg>
                        </div>
                        <span class="text-[12px] group-hover:text-white">{{ item.title }}</span>
                    </a>
                </div>
            </div>
            <div
                class="mt-5 overflow-hidden rounded-md bg-white h-[300px] max-md:h-[150px] lg:h-[350px] xl:h-[300px] 2xl:h-[300px] text-center m-auto">
                <nuxt-img provider="strapi" fit="cover" class="w-full h-full object-cover" loading="lazy"
                          :src="contentData?.data?.cover"></nuxt-img>
            </div>
            <div id="itnavsHtml" v-html="contentData?.data?.html"></div>
            <div
                class="flex text-[14px] text-slate-500 mt-5 flex-col rounded-md border-solid border-[1px] px-[10px] py-[15px] overflow-hidden border-zinc-100">
                <div class="mb-3 flex items-center">
                    <svg class="bag-icon stroke-2 mr-[5px] group-hover:text-[#22c55e]" aria-hidden="true">
                        <use xlink:href="#haiwb-user"></use>
                    </svg>
                    <p class="leading-snug">发布作者：羊先生</p>
                </div>
                <div class="mb-3 flex items-center">
                    <svg class="bag-icon stroke-2 mr-[5px] group-hover:text-[#22c55e]" aria-hidden="true">
                        <use xlink:href="#haiwb-time"></use>
                    </svg>
                    <p class="leading-snug">
                        最后更新：{{ lunisolar(contentData?.data?.updateAt).format('lYn年 lM lD T 星期dd A HH时 mm分') }}</p>
                </div>
                <div class="mb-3 flex items-center">
                    <svg class="bag-icon stroke-2 mr-[5px] group-hover:text-[#22c55e]" aria-hidden="true">
                        <use xlink:href="#haiwb-link"></use>
                    </svg>
                    <p class="leading-snug break-all">本文链接：<a class="hover:text-blue-400"
                                                                  :href="location.href">{{ location.href }}</a></p>
                </div>
                <div class="flex items-center">
                    <svg class="bag-icon stroke-2 mr-[5px] group-hover:text-[#22c55e]" aria-hidden="true">
                        <use xlink:href="#haiwb-favorite"></use>
                    </svg>
                    <p class="leading-snug">版权声明：部分资源来自网络，如有问题联系站长</p>
                </div>
            </div>
            <div class="flex mt-5 flex-col rounded-md border-solid border-[1px] px-[10px] py-[15px] border-zinc-100">
                <p class="text-[14px] mb-2 text-slate-500 leading-snug">如果您觉的本站对你有用，可以按住键盘的Ctrl + D
                    收藏本站</p>
                <p class="text-[14px] leading-snug mb-2 text-slate-500">这些信息可能会帮助到你：
                    <a style="color:#00aeff" target="_blank">下载帮助</a>
                    |
                    <a style="color:red" target="_blank">修改错误</a>
                    |
                    <a style="color:#ffbe02">进站必看</a>
                </p>
                <p class="text-[14px] leading-snug text-slate-500">
                    修改网站提供的资源，加群提示为修改者自留，<b>非本站信息</b>，注意鉴别
                </p>
            </div>
            <div v-if="contentData?.data?.pan"
                 class="flex mt-10 flex-col relative rounded-md border-dashed border-[1px] px-[10px] py-[15px] border-zinc-100">
                <div class="flex justify-between items-center">
                    <p class="text-[14px]">下载：<span class="text-[26px] text-yellow-400">免费</span></p>
                    <UButton color="green" :to="contentData?.data?.pan" variant="solid" target="_blank">立即下载
                    </UButton>
                </div>
                <div class="text-[14px] mt-2">密码：<span
                    class="text-[14px]">{{ contentData?.data?.panPas ? contentData?.data?.panPas : '无需密码' }}</span>
                </div>
                <div class="absolute top-[-13px] text-[#64748b] bg-white left-3">{{ contentData?.data?.panTitle }}</div>
            </div>
            <div class="flex mt-5 flex-col">
                <CommonShare :content="contentData?.data"/>
            </div>
            <div class="flex space-x-4 max-md:space-x-0 max-md:flex-col">
                <div v-if="contentData?.data?.content_prev"
                     :style="{background:`url(${contentData?.data?.content_prev?.cover})`}"
                     class="mt-5 p-4 z-1 flex-1 justify-between min-h-[80px] flex flex-col text-white overflow-hidden rounded-[5px] cover-fill relative before:absolute before:left-0 before:top-0 before:bg-[#00000080] before:content-[''] before:w-full before:h-full">
                    <h6 class="relative z-1 text-[14px]">{{ contentData?.data?.content_prev?.title }}</h6>
                    <div class="flex z-1 relative text-[12px] justify-between items-center">
                        <a :href="'/det'+toRouter(contentData?.data?.content_prev)">上一篇</a>
                        <span>{{
                                lunisolar(contentData?.data?.content_prev?.createdAt).format('lYn年 lM lD T 星期dd A')
                            }}</span>
                    </div>
                </div>
                <div v-if="contentData?.data?.content_next"
                     :style="{background:`url(${contentData?.data?.content_next?.cover})`}"
                     class="mt-5 p-4 z-1 flex-1 justify-between min-h-[80px] flex flex-col text-white overflow-hidden rounded-[5px] cover-fill relative before:absolute before:left-0 before:top-0 before:bg-[#00000080] before:content-[''] before:w-full before:h-full">
                    <h6 class="relative z-1 text-[14px]">{{ contentData?.data?.content_next?.title }}</h6>
                    <div class="flex z-1 relative text-[12px] justify-between items-center">
                        <span>{{
                                lunisolar(contentData?.data?.content_next?.createdAt).format('lYn年 lM lD T 星期dd A')
                            }}</span>
                        <a :href="'/det'+toRouter(contentData?.data?.content_next)">下一篇</a>
                    </div>
                </div>
            </div>
        </template>
        <template #sidebar>
            <div class="bg-white rounded-[20px] max-sm:px-[15px] max-md:px-[15px] p-[30px] mb-8">
                <h1 class="text-[22px]  font-bold">访问官网</h1>
                <a :href="contentData?.data?.url" target="_blank"
                   class="mt-5 items-center flex overflow-hidden  text-white">
                    <div
                        class="bg-[#0000000f] h-[60px]  flex items-center justify-center w-[60px] flex-shrink-0 rounded-l-[15px]">
                        <svg class="bag-icon stroke-2 max-sm:text-[20px] text-[30px]" aria-hidden="true">
                            <use xlink:href="#haiwb-weixinxiaochengxu"></use>
                        </svg>
                    </div>
                    <span
                        class="h-[60px] flex-1 leading-[60px] rounded-r-[15px] px-[12px] bg-[#79c692] font-bold text-[20px] truncate text-white">{{
                            contentData?.data?.url
                        }}</span>
                </a>
                <h1 class="mt-10  text-[22px]  font-bold">文章目录</h1>
                <div class="mt-5 bg-[#F6F8FF] rounded-[10px] pl-[20px] pr-[20px] pb-[20px]">
                    <ul class="overflow-y-auto max-h-[600px] no-scrollbar">
                        <li @click="handleClickTocHtmlItem(item)"
                            class="mt-3 text-[#607d8b] hover:text-[#333] hover:font-bold cursor-pointer"
                            v-for="item in compData.tocHtml"
                            :key="item.idx">
                            <span :style="item.style">{{ item.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bg-white rounded-[20px] max-sm:px-[15px] max-md:px-[15px] p-[30px] mb-8">
                <SidebarArticle :data="contentData?.data?.content_moreList"></SidebarArticle>
            </div>
            <div class="bg-white rounded-[20px] max-sm:px-[15px] max-md:px-[15px] p-[30px] mb-8 sticky top-0">
                <h1 class="text-[22px]  font-bold">访问官网</h1>
                <a :href="contentData?.data?.url" target="_blank"
                   class="mt-5 items-center flex overflow-hidden  text-white">
                    <div
                        class="bg-[#0000000f] h-[60px]  flex items-center justify-center w-[60px] flex-shrink-0 rounded-l-[15px]">
                        <svg class="bag-icon stroke-2 max-sm:text-[20px] text-[30px]" aria-hidden="true">
                            <use xlink:href="#haiwb-weixinxiaochengxu"></use>
                        </svg>
                    </div>
                    <span
                        class="h-[60px] flex-1 leading-[60px] rounded-r-[15px] px-[12px] bg-[#79c692] font-bold text-[20px] truncate text-white">{{
                            contentData?.data?.url
                        }}</span>
                </a>
                <h1 class="mt-10  text-[22px]  font-bold">文章目录</h1>
                <div class="mt-5 bg-[#F6F8FF] rounded-[10px] pl-[20px] pr-[20px] pb-[20px]">
                    <ul class="overflow-y-auto max-h-[600px] no-scrollbar">
                        <li @click="handleClickTocHtmlItem(item)"
                            class="mt-3 text-[#607d8b] hover:text-[#333] cursor-pointer"
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
import {useTagColor} from "~/composables/useTagColor";
import {useWebsite} from "~/composables/useWebsite";

definePageMeta({
    layout: false,
    keepalive: true,
})
const route = useRoute()
const router = useRouter()
const location = useRequestURL()
const compData = reactive({
    tocHtml: <any>[],
})
const website = useWebsite()
const titleStyle = [
    {"font-size": '14px'}, {"font-size": '14px',}, {"font-size": '14px'},
    {"font-size": '12px'}, {"font-size": '12px'}, {"font-size": '12px'}
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
            style: {'padding-left': (level - 1) * 8 + 'px', ...titleStyle[level - 1]},
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


const {data: contentData}: { data: any } = await useRequest('/api/webv1/web/home/detail', {
    method: 'POST',
    body: {
        id: route.params.id
    }
})

useHead({
    title: contentData?.value?.data?.title + '-' + website.value.name,
    meta: [
        {name: 'description', content: contentData?.value?.data?.des},
        {name: 'keywords', content: contentData?.value?.data?.keys_list?.map((item:any) => item.title).join(',')}
    ]
})
</script>
