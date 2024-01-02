<template>
    <div class="flex flex-col rounded-[5px] border border-solid border-slate-100 px-5">
        <div class="flex py-[18px] border-b border-solid border-slate-100 items-center overflow-hidden">
            <svg class="bag-icon stroke-2 flex-shrink-0" aria-hidden="true">
                <use xlink:href="#haiwb-paihangbang"></use>
            </svg>
            <h3 class="font-bold text-gray-700 tracking-widest ml-2 mr-2 flex-shrink-0">推荐话题</h3>
            <span class="text-gray-300 text-[12px] flex-shrink-0">小步快跑，每日更新</span>
        </div>
        <div class="mt-3">
            <a :href="'/tag'+toRouter(item)" v-for="item in data || []" :key="item.id"
                       class="bg-gradient-to-r mr-4 mb-3 from-[#00b2d1] cursor-pointer text-white to-[#79c692] hover:from-[#79c692] hover:to-[#79c692] rounded-[3px] inline-block bg-amber-50 text-[12px] px-[5px] py-[5px]">
                {{ item.title }}
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
type OptionsProp = Record<string, any>
const props = defineProps({
    data:  Array as PropType<OptionsProp[]>,
})
</script>
