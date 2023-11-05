<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer: 'soft'}" header-style="font-size:14px;" title="添加菜单">
                    <n-form
                        ref="formRef"
                        :model="compData.from"
                        :rules="compData.rules"
                        label-placement="left"
                        label-width="auto"
                        require-mark-placement="right-hanging"
                    >
                        <n-form-item label="名称" path="title">
                            <n-input v-model:value="compData.from.title" placeholder="请输入关键词名称"/>
                        </n-form-item>
                        <n-form-item label="描述" path="des">
                            <n-input type="textarea" v-model:value="compData.from.des" placeholder="请输入关键词描述"/>
                        </n-form-item>
                        <n-form-item label="是否显示" path="shows">
                            <n-switch :round="false" v-model:value="compData.from.shows">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
                        </n-form-item>
                    </n-form>
                    <template #action>
                        <n-space justify="end">
                            <n-button attr-type="button">返回列表</n-button>
                            <n-button attr-type="button" type="success" @click="compHandle.validate">提交数据</n-button>
                        </n-space>
                    </template>
                </n-card>
            </n-space>
        </n-grid-item>
    </n-grid>
</template>
<script>
import {defineComponent, reactive, computed, ref} from "vue"
import {tagOptions} from "./data"
import {useMessage} from "naive-ui"
import apis from "@/api/app.js";
import {useRoute} from "vue-router"

export default defineComponent({
    setup() {
        const formRef = ref(null)
        const message = useMessage()
        const route = useRoute()
        const compData = reactive({
            from: {
                title: null,
                des: null,
                shows: true,
            },
            rules: {
                title: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入关键词名称"
                },
            },
            pidOptions: []
        })
        const compHandle = reactive({
            validate(e) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        compData.from.title = compData.from.title.toLowerCase()
                        apis['/admin/keys/update']({id: route.params.id, ...compData.from})
                    }
                })
            }
        })
        apis['/admin/keys/find']({id:route.params.id}).then((res) => {
            Object.keys(compData.from).forEach((key) => {
                compData.from[key] = res.data[key]
            })
        })
        return {
            compData,
            compHandle,
            formRef
        }
    }
})
</script>
