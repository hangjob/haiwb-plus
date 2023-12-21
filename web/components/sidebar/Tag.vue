<template>
    <div>
        <h1 class="flex items-center text-[22px]  font-bold">
            推荐话题
        </h1>
        <div class="grid mt-5 grid-cols-12 gap-4">
            <div v-for="item in contentData?.data || []" class="col-1 col-span-12 md:col-span-6 2xl:col-span-12 xl:col-span-6">
                <nuxt-link :to="'/det'+toRouter(item)" class="overflow-hidden inline-block cursor-pointer relative w-full rounded-[6px] bg-white h-[130px] md:h-[250px] lg:h-[170px] xl:h-[200px] 2xl:h-[150px]">
                    <nuxt-img fit="cover" class="blur-[1px] peer-blur-sm w-full h-full object-cover" loading="lazy"
                              :src="item.cover"></nuxt-img>
                    <div class="absolute z-1 left-0 right-0 bottom-0 pl-[15px] pr-[15px] pb-[10px] pt-[20px] list-content">
                        <p class="text-white leading-tight font-bold text-[14px] mb-2 line-clamp-2">{{item.des}}</p>
                        <div class="flex leading-tight text-[12px] text-[#ffffff80]">{{item.views}}阅读 ，<time>{{lunisolar(item.createdAt).format('lD A')}}</time>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";

const route = useRoute()
const {data: contentData}: { data: any } = await useRequest('/api/webv1/admin/content/list', {
    method: 'POST',
    body: {
        keys: route.params.id
    }
})
</script>
<style lang="less" scoped>
.list-content{
    background: -webkit-linear-gradient(to bottom, rgba(6, 6, 8, 0), rgba(6, 6, 8, 0.7));
    background: linear-gradient(to bottom, rgba(6, 6, 8, 0), rgba(6, 6, 8, 0.7));
}

</style>
