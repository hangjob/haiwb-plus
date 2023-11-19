<template>
    <div class="px-3 py-3 rounded-[5px] bg-white overflow-hidden flex flex-col">
        <div class="overflow-hidden rounded-[6px] bg-white h-[80px] md:h-[150px] lg:h-[120px] xl:h-[150px] 2xl:h-[100px]">
            <nuxt-img fit="cover" class="w-full h-full object-cover" loading="lazy"
                      src="https://www.vipbic.com/uploads/20230923/466ccd86b419fbd0da712aa7532bee06.jpg"></nuxt-img>
        </div>
        <div class="flex flex-col justify-between py-[4px]">
            <h1 class="font-bold text-[18px] text-gray-700  mt-2">赤壁市第六小学新建项目</h1>
            <p class="text-[14px] text-gray-600 leading-4 mt-2 tracking-wide line-clamp-2">赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目</p>
        </div>
        <div class="flex flex-wrap items-center mt-2">
            <nuxt-link class="group flex mr-3 mb-2 items-center rounded-[5px] text-[12px] px-[5px] py-1 bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500">
                <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-white" aria-hidden="true">
                    <use xlink:href="#haiwb-biaoqian"></use>
                </svg>
                <span class="text-[12px] text-gray-500 group-hover:text-white">测试</span>
            </nuxt-link>
        </div>
        <div class="flex items-center flex-wrap">
            <div class="flex items-center flex-1">
                <div class="flex items-center text-[16px] mr-2">
                    <svg class="bag-icon stroke-2 mr-[2px]" aria-hidden="true">
                        <use xlink:href="#haiwb-tupian"></use>
                    </svg>
                    <span class="text-[14px]">品茗</span>
                </div>
                <div class="flex items-center text-[16px]  mr-2">
                    <svg class="bag-icon stroke-2 mr-[2px]" aria-hidden="true">
                        <use xlink:href="#haiwb-naozhong"></use>
                    </svg>
                    <span class="text-[14px]">2023年07月12日 星期三 </span>
                    <span class="text-[14px] text-gray-400"></span>
                </div>
                <div class="flex items-center text-[14px]">
                    <svg class="bag-icon stroke-2 mr-[3px]" aria-hidden="true">
                        <use xlink:href="#haiwb-zuixinziyuan"></use>
                    </svg>
                    <span class="text-[14px]">4823</span>
                    <span class="text-[14px] text-gray-400"></span>
                </div>
            </div>
            <div class="flex items-center text-[14px]">
                <span class="text-[13px] group flex  items-center rounded-[5px] text-[12px] px-[7px] py-[5px] bg-gray-100  cursor-pointer hover:bg-green-500 hover:text-white text-gray-400">品茗科技</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
