<template>
    <div class="container mx-auto max-sm:p-[20px]">
        <div class="grid grid-cols-11 gap-4 mt-3">
<!--            <div class="rounded-[20px] col-span-11 md:col-span-11 xl:col-span-3 2xl:col-span-2">-->
<!--                <ul class="bg-[#e91e63] left-bg p-[30px] pb-[10px] max-md:flex items-center max-md:flex-wrap max-xl:flex max-xl:flex-wrap rounded-[20px] text-center">-->
<!--                    <li class="flex items-center  justify-center max-sm:mr-[10px] max-sm:mb-[10px] max-md:mr-[20px] max-xl:mr-[20px]  mb-[20px] "  v-for="item in 5">-->
<!--                        <div class="flex items-center justify-center cursor-pointer text-center bg-white max-sm:p-[10px] max-sm:rounded-[10px]  p-[20px] px-[30px] rounded-[20px]">-->
<!--                            <div class="flex items-center justify-center flex-col">-->
<!--                                <svg class="bag-icon stroke-2 max-sm:text-[20px] text-[40px]" aria-hidden="true">-->
<!--                                    <use xlink:href="#haiwb-Web"></use>-->
<!--                                </svg>-->
<!--                                <span class="text-[14px] mt-2">项目组</span>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
            <div class="bg-white rounded-[20px] p-[30px] col-span-11 md:col-span-11 xl:col-span-8 2xl:col-span-6">
                <slot/>
            </div>
            <div class="col-span-11 xl:col-span-11 2xl:col-span-3">
                <div class="bg-white rounded-[20px] p-[30px]">
                    <slot name="sidebar" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
.left-bg{
    width: 100%;
    --color: rgb(255 255 255 / 8%);
    background-color: #E91E63;
    background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent), linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
    background-size: 55px 55px;
}
</style>
