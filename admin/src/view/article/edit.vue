<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer: 'soft'}" header-style="font-size:14px;" title="添加菜单">
                    <template #header-extra>
                        古人学问无遗力，少壮工夫老始成
                    </template>
                    <n-form
                        ref="formRef"
                        :model="compData.from"
                        :rules="compData.rules"
                        label-placement="left"
                        label-width="auto"
                        require-mark-placement="right-hanging"
                    >
                        <n-form-item label="菜单名称" path="content">
                            <n-input type="textarea" v-model:value="compData.from.content"
                                     placeholder="请输入菜单名称"/>
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
                content: null
            },
            rules: {},
            pidOptions: []
        })
        const compHandle = reactive({
            validate(e) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        message.success("数据校验通过")
                        apis['/admin/content/update']({id: route.params.id, ...compData.from})
                    }
                })
            }
        })
        apis['/admin/content/find']({id: route.params.id}).then((res) => {
            console.log(res)
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
