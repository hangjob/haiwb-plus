<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        <svg class="bag-icon stroke-2 text-[18px] mr-[8px] group-hover:text-white" aria-hidden="true">
            <use xlink:href="#haiwb-remen"></use>
        </svg>
        实时热门
    </h1>
    <ul class="hot-dotted pl-[15px] relative">
        <li class="relative mt-5" v-for="item in data || []">
            <nuxt-link :to="'/det'+toRouter(item)" class="flex flex-col">
                <h3 class="line-clamp-2 leading-snug mb-3 text-[#494B4D]">{{lunisolar(item.createdAt).format('lM')}} {{lunisolar(item.createdAt).format('lD')}}，{{lunisolar(item.createdAt).format('dddd')}}，{{item.title}}</h3>
                <div class="flex justify-between mt-2">
                    <span class="text-[#AAAEB3] text-sm">{{item.nav_id_list[0].title}}</span>
                    <span class="text-[#AAAEB3] text-sm">{{lunisolar(item.createdAt).format('mm:ss')}}</span>
                </div>
            </nuxt-link>
        </li>
    </ul>
</template>
<script setup lang="ts">
type OptionsProp = Record<string, any>
const props = defineProps({
    data:  Array as PropType<OptionsProp[]>,
})
</script>
<style lang="less" scoped>
.hot-dotted {
    &::before {
        content: '';
        width: 1px;
        position: absolute;
        left: 0;
        top: 10px;
        bottom: 46px;
        border-left: 1px dashed rgba(30, 111, 255, 0.2);
    }

    li {
        &::before {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 100%;
            left: -17px;
            top: 9px;
            background-color: #1e6fff;
        }
    }
}
</style>
