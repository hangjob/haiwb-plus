<template>
    <div
        class="rounded-[5px] bg-white mb-4 overflow-hidden max-sm:h-[160px]  max-md:h-[180px] max-lg:h-[200px] max-xl:h-[220px] max-2xl:h-[220px] h-[220px] relative">
        <div class="flex absolute z-1 top-0 bottom-0 left-0 right-0">
            <div class="flex-1">
                <nuxt-img provider="strapi" fit="cover" class="w-full h-full object-cover" loading="lazy"
                          src="https://www.vipbic.com/uploads/20230923/466ccd86b419fbd0da712aa7532bee06.jpg"></nuxt-img>
            </div>
        </div>
        <div class="lucency z-10 absolute top-0 bottom-0 left-0 right-0">
            <div class="flex flex-col min-h-full max-h-full justify-center items-center">
                <h1 class="text-white mb-4 font-bold text-[20px]">赤壁市第六小学新建项目</h1>
                <div class="flex text-white items-center">
                    <span>品茗</span>
                    <span class="font-bold text-[20px] ml-2 mr-2">·</span>
                    <span>2023年10月28日 23:28</span>
                    <span class="font-bold text-[20px] ml-2 mr-2">·</span>
                    <span>交易平台</span>
                </div>
            </div>
        </div>
        <div class="lucency-bg absolute z-1 top-0 bottom-0 left-0 right-0"></div>
        <div class="absolute right-0 pt-1.5 pb-1.5 w-[26px] text-white text-center tag-vertical discount">测试</div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
.lucency-bg {
    background-color: rgba(80, 80, 80, .1);
}

.lucency:hover ~ .lucency-bg {
    background-color: rgba(80, 80, 80, .3);
}

.tag-vertical{
    background: #f9ad54;
}

.tag-vertical::after {
    position: absolute;
    content: "";
    left: 0;
    top: 100%;
    border-style: solid;
    border-width: 0 13px 13px 13px;
    border-color: #f9ad54 #f9ad54 transparent #f9ad54;
}

</style>
