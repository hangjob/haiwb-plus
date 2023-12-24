<template>
    <div class="flex relative items-center mb-5 bg-white rounded-[20px] max-sm:px-[15px] max-md:px-[15px] p-[30px]">
        <input @keyup.enter="handleSrearch" v-model="keys" type="text" :placeholder="`${website.name}，回车键搜索`" class="bg-[#8881] indent-2 pl-[30px] relative outline-none rounded-[30px] py-[15px] w-full text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" />
        <svg class="bag-icon stroke-2 text-[20px] absolute left-[40px] group-hover:text-[#22c55e]" aria-hidden="true">
            <use xlink:href="#haiwb-search"></use>
        </svg>
    </div>
</template>
<script lang="ts" setup>
import {debounce} from "lodash"
import {useWebsite} from "~/composables/useWebsite";
const keys = <any>ref('')
const route = useRoute()
keys.value = route.query.s;

const handleSrearch = debounce(()=>{
    console.log(222)
    useEmit('modify-nav',keys)
},250,{
    'maxWait': 3000
})

const website = useWebsite()
</script>
