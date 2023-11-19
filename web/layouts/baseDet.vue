<template>
    <div class="container mx-auto max-sm:p-[20px]">
        <div class="grid grid-cols-11 gap-4 mt-3">
            <div class="rounded-[20px] col-span-11 md:col-span-11 xl:col-span-2 2xl:col-span-2">
                <ul class="bg-[#fff] left-bg p-[30px] pb-[10px] max-md:flex items-center max-md:flex-wrap max-xl:flex max-xl:flex-wrap rounded-[20px] text-center">
                    <li class="flex items-center  justify-center max-sm:mr-[10px] max-sm:mb-[10px] max-md:mr-[20px] max-xl:mr-[20px]  mb-[20px] "  v-for="item in 5">
                        <div class="flex items-center justify-center cursor-pointer text-center bg-white max-sm:p-[10px] max-sm:rounded-[10px]  p-[20px] px-[30px] rounded-[20px]">
                            <div class="flex items-center justify-center flex-col">
                                <svg class="bag-icon stroke-2 max-sm:text-[20px] text-[40px]" aria-hidden="true">
                                    <use xlink:href="#haiwb-Web"></use>
                                </svg>
                                <span class="text-[14px] mt-2">项目组</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bg-white rounded-[20px] p-[30px] col-span-11 md:col-span-11 xl:col-span-8 2xl:col-span-6">
                <slot/>
            </div>
            <div class="col-span-11 xl:col-span-11 2xl:col-span-3">
                <div class="bg-white rounded-[20px] p-[30px] mb-8">
                    <SidebarArticle></SidebarArticle>
                </div>
                <div class="bg-white mt-[30px] rounded-[20px] p-[30px]">
                    <div class="mb-[30px]">
                        <SidebarPhoto/>
                    </div>
                    <div>
                        <SidebarPhotoHorizontal/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
