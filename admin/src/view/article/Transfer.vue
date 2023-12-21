<template>
    <div style="display: flex;flex-direction: column;flex: 1">
        <n-space>
            <n-tag> 5</n-tag>
            <n-tag type="success">
                不该
            </n-tag>
        </n-space>
        <n-select
            v-model:value="selectedValues"
            multiple
            filterable
            placeholder="添加一级分类"
            :options="options"
            :loading="loading"
            clearable
            remote
            :clear-filter-after-select="false"
            @search="handleSearch"
            style="margin-top: 5px"
            @update:value="handleUpdate"
        />
    </div>
</template>
<script lang="ts">
import {defineComponent, ref, toRefs} from 'vue'
import {SelectOption} from 'naive-ui'

export default defineComponent({
    props: {
        id: {
            type: String,
            default: '',
        },
        options: {
            type: Array,
            default: []
        },
    },
    setup(props, {emit}) {
        const {options} = toRefs(props)
        const loadingRef = ref(false)
        const selectedValues = ref([]);
        const handleUpdate = (arr) => {
            console.log(arr);
        }
        return {
            loading: loadingRef,
            options,
            handleUpdate,
            selectedValues,
            handleSearch: (query: string) => {

            }
        }
    }
})
</script>
