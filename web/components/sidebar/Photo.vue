<template>
    <h1 class="flex items-center text-[22px]  font-bold">
        更多相关
    </h1>
    <div class="flex mt-6 flex-col">
        <div class="col-1 col-span-6 2xl:col-span-6 xl:col-span-6 overflow-hidden">
            <template v-for="(item,idx) in data">
                <nuxt-link v-if="idx === 0" :to="'/det'+toRouter(item)"
                           class="overflow-hidden w-full rounded-[6px] inline-block cursor-pointer relative bg-white h-[100px] md:h-[150px] lg:h-[130px] xl:h-[150px] 2xl:h-[120px]">
                    <nuxt-img provider="strapi" fit="cover" class="peer-blur-sm w-full h-full object-cover" loading="lazy"
                              :src="item.cover"></nuxt-img>
                    <span
                        class="absolute text-[14px] font-bold text-white bottom-[10px] rounded-[6px] left-[10px] bg-[#00000066] block p-[10px]">{{item?.nav_id_list[0]?.title}}</span>
                </nuxt-link>
            </template>
        </div>
    </div>
    <div class="mt-5 grid grid-cols-12 gap-4">
        <template v-for="(item,idx) in data">
            <div v-if="idx >= 1 && idx <= 4" class="col-1 col-span-6 2xl:col-span-6 xl:col-span-6 overflow-hidden">
                <nuxt-link :to="'/det'+toRouter(item)"
                           class="overflow-hidden w-full  rounded-[6px]  inline-block cursor-pointer relative bg-white h-[90px] md:h-[90px] lg:h-[90px] xl:h-[90px] 2xl:h-[90px]">
                    <nuxt-img provider="strapi" fit="cover" class="peer-blur-sm w-full h-full object-cover" loading="lazy"
                              :src="item.cover"></nuxt-img>
                    <span
                        class="absolute text-[14px] font-bold text-white bottom-[10px] rounded-[6px] left-[10px] bg-[#00000066] block p-[10px]">{{item?.nav_id_list[0]?.title}}</span>
                </nuxt-link>
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
type OptionsProp = Record<string, any>
const props = defineProps({
    data:  Array as PropType<OptionsProp[]>,
})
</script>
