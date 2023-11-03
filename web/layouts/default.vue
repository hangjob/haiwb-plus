<template>
    <div class="container mx-auto max-sm:p-[20px]">
        <div class="grid grid-cols-11 gap-4 mt-3">
            <div class="rounded-[20px] col-span-11 md:col-span-3 xl:col-span-3 2xl:col-span-2">
                <div class="bg-white p-[30px] rounded-[20px] text-center">
                    <ul class="bg-[#8881] p-[30px]  rounded-[20px] text-center space-y-[30px]">
                    <li class="flex items-center justify-center">
                        <div class="inline-block cursor-pointer text-center bg-white rounded-[20px] pt-[18px] pb-[18px] pl-[22px] pr-[22px]">
                            <div class="flex items-center justify-center flex-col">
                                <svg class="bag-icon stroke-2 text-[30px]" aria-hidden="true">
                                    <use xlink:href="#haiwb-Web"></use>
                                </svg>
                                <span class="text-[14px] mt-2">项目组</span>
                            </div>
                        </div>
                    </li>
                    <li class="flex items-center justify-center">
                        <div class="inline-block cursor-pointer text-center bg-white rounded-[20px] pt-[18px] pb-[18px] pl-[22px] pr-[22px]">
                            <div class="flex items-center justify-center flex-col">
                                <svg class="bag-icon stroke-2 text-[30px]" aria-hidden="true">
                                    <use xlink:href="#haiwb-Web"></use>
                                </svg>
                                <span class="text-[14px] mt-2">项目组</span>
                            </div>
                        </div>
                    </li>
                    <li class="flex items-center justify-center">
                        <div class="inline-block cursor-pointer text-center bg-white rounded-[20px] pt-[18px] pb-[18px] pl-[22px] pr-[22px]">
                            <div class="flex items-center justify-center flex-col">
                                <svg class="bag-icon stroke-2 text-[30px]" aria-hidden="true">
                                    <use xlink:href="#haiwb-Web"></use>
                                </svg>
                                <span class="text-[14px] mt-2">项目组</span>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <div class="bg-white rounded-[20px] p-[30px] col-span-11 md:col-span-8 xl:col-span-8 2xl:col-span-6">
                <slot/>
            </div>
            <div class=" col-span-11 xl:col-span-11 2xl:col-span-3">
                <div class="bg-white rounded-[20px] p-[30px]">
                    <div class="mb-8">
                        <AppSidebarCardFull/>
                    </div>
                    <div>
                        <AppSidebarGange/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
