<template>
    <div class="px-3 py-3 rounded-[5px] bg-white overflow-hidden">
        <div
            class="flex max-sm:flex-col max-md:flex-col max-lg:flex-col max-xl:flex-row max-2xl:flex-row"
            :class="[compData.classFlexDirection]"
        >
            <div
                class="relative max-sm:basis-full max-md:basis-full max-lg:basis-full basis-8/12 max-sm:mr-0
                max-sm:ml-0 max-md:mr-0 max-md:ml-0 max-lg:mr-0 max-lg:ml-0"
                :class="[compData.classCardLeft,compData.classCardRight]"
            >
                <h1 class="text-[18px] font-normal">赤壁市第六小学新建项目</h1>
                <p class="text-[14px] pt-4 leading-5 text-justify line-clamp-2">
                    赤壁市锦华工程造价咨询有限公司赤壁市锦华工程造价咨询有限公司赤壁市锦华工程造价咨询有限公司赤壁市锦华工程造价咨询有限公司赤壁市锦华工程造价咨询有限公司</p>
                <div class="pt-2 space-x-3 space-y-2 pb-8">
                    <UBadge class="bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500 hover:text-white"
                            :ui="{ rounded: 'rounded-full' }" size="sm">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-biaoqian"></use>
                        </svg>
                        测试
                    </UBadge>
                    <UBadge class="bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500 hover:text-white"
                            :ui="{ rounded: 'rounded-full' }" size="sm">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-biaoqian"></use>
                        </svg>
                        测试
                    </UBadge>
                </div>
                <div class="mt-3 flex items-center flex-row space-x-2 absolute bottom-0 left-0 w-full">
                    <div class="flex items-center flex-row flex-shrink-0">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-naozhong"></use>
                        </svg>
                        <span class="text-[12px] text-gray-500">2023年07月16日 星期日</span>
                    </div>
                    <div class="flex items-center flex-row flex-shrink-0">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-zuixinziyuan"></use>
                        </svg>
                        <span class="text-[12px] text-gray-500">32131</span>
                    </div>
                    <div class="flex items-center flex-row flex-shrink-0">
                        <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                            <use xlink:href="#haiwb-zixun"></use>
                        </svg>
                        <span class="text-[12px] text-gray-500">测试</span>
                    </div>
                    <div class="flex items-center flex-row basis-full justify-end">
                        <a class="flex items-center flex-row bg-slate-100 rounded-[5px] px-2 py-1" href="">
                            <svg class="bag-icon stroke-2 mr-1" aria-hidden="true">
                                <use xlink:href="#haiwb-biaoqiankuozhan_wode-285"></use>
                            </svg>
                            <span class="text-[12px] text-gray-500">测试</span>
                        </a>
                    </div>
                </div>
            </div>
            <NuxtLink
                :to="getDelPath(content)"
                class="max-sm:basis-full  max-sm:mt-2  max-md:basis-full max-md:mt-2 max-lg:basis-full max-lg:mt-2 basis-4/12 ">
                <div
                    class="overflow-hidden rounded-[6px] bg-white sm-thumbnail md-thumbnail lg-thumbnail h-40"
                    :class="[compData.classFhumbnail]"
                >
                    <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy"
                              src="https://www.vipbic.com/uploads/20230923/466ccd86b419fbd0da712aa7532bee06.jpg"></nuxt-img>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    classFlexDirection: {
        type: String,
        default: 'flex-row'
    },
    content:{
        type: Object,
        default:{}
    }
})

const compData = reactive({
    classFhumbnail: 'thumbnail-right',
    classFlexDirection: props.classFlexDirection,
    classCardLeft: '',
    classCardRight: 'mr-[10px]'
})
if (props.classFlexDirection !== 'flex-row') {
    compData.classFhumbnail = 'thumbnail-left'
    compData.classFlexDirection = 'flex-row-reverse max-xl:flex-row-reverse max-2xl:flex-row-reverse'
    compData.classCardLeft = 'ml-[10px]'
}
</script>

<style lang="less">
.thumbnail-left {
    clip-path: polygon(0 0, 90% 0, 100% 108%, 0 100%);

}

.thumbnail-right {
    clip-path: polygon(2% 0, 100% 0, 100% 100%, 10% 100%);
}
</style>
