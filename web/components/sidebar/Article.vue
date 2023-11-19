<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        <svg class="bag-icon stroke-2 text-[18px] mr-[2px] group-hover:text-white" aria-hidden="true">
            <use xlink:href="#haiwb-remen"></use>
        </svg>
        更多相关
    </h1>
    <ul class="relative">
        <li class="flex mt-6 flex-col" v-for="item in 2">
            <nuxt-link to="/" class="overflow-hidden cursor-pointer relative rounded-[6px] bg-white h-[130px] md:h-[250px] lg:h-[170px] xl:h-[200px] 2xl:h-[150px]">
                <nuxt-img fit="cover" class="hover:blur-sm peer-blur-sm w-full h-full object-cover" loading="lazy"
                          src="https://www.vipbic.com/uploads/20230923/466ccd86b419fbd0da712aa7532bee06.jpg"></nuxt-img>
                <a class="absolute text-[16px] font-bold text-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">品茗科技</a>
                <time class="absolute text-[14px]  text-white  bottom-1 right-1">2023-11-12 22:22:00</time>
            </nuxt-link>
            <h2 class="text-[18px] text-gray-700 font-bold mt-3 leading-tight">
                <nuxt-link>赤壁市第六小学新建项目赤壁项目赤壁市第六小学新</nuxt-link>
            </h2>
            <div class="flex flex-wrap mt-3">
                <nuxt-link v-for="item in 4" class="group flex mr-3 mb-2 items-center rounded-[5px] text-[12px] px-[5px] py-1 bg-gray-100 text-slate-900 cursor-pointer hover:bg-green-500">
                    <svg class="bag-icon stroke-2 mr-[2px] group-hover:text-white" aria-hidden="true">
                        <use xlink:href="#haiwb-biaoqian"></use>
                    </svg>
                    <span class="text-[12px] text-gray-500 group-hover:text-white">测试</span>
                </nuxt-link>
            </div>
            <p class="line-clamp-3 text-[14px] text-gray-400 leading-normal">赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目赤壁市第六小学新建项目</p>
        </li>
    </ul>
</template>
<script lang="ts" setup>


</script>
