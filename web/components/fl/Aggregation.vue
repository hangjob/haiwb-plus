<template>
    <UTabs :items="items" class="w-full">
        <template #item="{ item }">
            <template v-if="item.key === '1'">
                <template v-for="todo,idx in contentData?.data || []">
                    <nuxt-link :to="'/det'+toRouter(todo)" v-if="idx === 0" class="flex relative flex-col overflow-hidden">
                        <nuxt-img class="w-full h-[150px] rounded-md"
                                  :src="todo.cover"></nuxt-img>
                        <h3 class="text-[14px] font-bold mt-2">{{todo.title}}</h3>
                        <p class="text-[#657C98] font-[300] text-[12px]">{{ lunisolar(todo.createdAt).format('lYn年 lM lD T 星期dd A') }}</p>
                        <span :style="{backgroundColor:useColorWarm(idx).color}"
                              :class="['absolute top-0 left-0 text-[12px] rounded-[3px] px-[6px]  text-white bg-amber-400 inline-block']">{{
                                idx + 1
                            }}</span>
                    </nuxt-link>
                    <nuxt-link :to="'/det'+toRouter(todo)" v-else class="flex relative flex-row overflow-hidden mt-5">
                        <nuxt-img class="w-[110px] h-[70px] rounded-md object-cover mr-2"
                                  :src="todo.cover"></nuxt-img>
                        <div class="flex-1 flex  justify-around flex-col flex-shrink-0">
                            <h3>{{todo.title}}</h3>
                            <p class="text-[#657C98] font-[300] text-[12px]">{{ lunisolar(todo.createdAt).format('lYn年 lM lD T 星期dd A') }}</p>
                        </div>
                        <span :style="{backgroundColor:useColorWarm(idx).color}"
                              :class="['absolute top-0 left-0 text-[12px] rounded-[3px] px-[6px]  text-white bg-amber-400 inline-block']">{{
                                idx + 1
                            }}</span>
                    </nuxt-link>
                </template>
            </template>
            <template v-if="item.key === '2'">
                <template v-for="todo,idx in navData?.data || []">
                    <nuxt-link :to="'/fl'+toRouter(todo)" class="group flex h-[70px] mb-5 relative justify-center flex-col overflow-hidden">
                        <nuxt-img
                            class="blur-[2px] group-hover:blur-0 w-full absolute top-0 bottom-0  h-full rounded-md object-cover overflow-hidden"
                            :src="todo.cover"></nuxt-img>
                        <h3 class="relative z-10 text-[20px] text-white font-bold pl-[30px] flex">{{todo.title}}<span
                            class="text-[12px] ml-2">{{todo.content_count}}</span></h3>
                    </nuxt-link>
                </template>
            </template>
        </template>
    </UTabs>
</template>

<script lang="ts" setup>
import {useColorWarm} from "~/composables/useTagColor.js";
import {useRequest} from "~/composables/useRequest";

const items = [{
    key: '1',
    label: '文章',
}, {
    key: '2',
    label: '分类',
}]
const {data: contentData}: { data: any } = await useRequest('/api/webv1/web/common/contentHot', {
    method: 'POST',
    body: {
        order: 'like'
    }
})
const {data: navData}: { data: any } = await useRequest('/api/webv1/web/common/navList', {
    method: 'POST',
})
</script>
