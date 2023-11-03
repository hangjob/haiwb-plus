<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer: 'soft'}" header-style="font-size:14px;" title="添加菜单">
                    <template #header-extra>

                    </template>
                    <n-form
                        ref="formRef"
                        :model="compData.from"
                        :rules="compData.rules"
                        label-placement="left"
                        label-width="auto"
                        require-mark-placement="right-hanging"
                    >
                        <n-form-item label="菜单名称" path="title">
                            <n-input v-model:value="compData.from.title" placeholder="请输入菜单名称"/>
                        </n-form-item>
                        <n-form-item label="内容" path="contnet">
                            <iframe style="border: 1px solid #dddddd;border-radius: 4px" height="600px" width="100%" src="/build/index.html" frameborder="0"></iframe>
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
import {useMessage} from "naive-ui"
import apis from "@/api/app.js";

export default defineComponent({
    setup() {
        const formRef = ref(null)
        const message = useMessage()
        const compData = reactive({
            from: {
                title: null,
                path: null,
                file: null,
                icon: null,
                shows: true,
                pid: null,
                keepAlive: false,
                tabFix: false,
            },
            rules: {
                title: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入菜单名称"
                },
            },
            pidOptions: []
        })
        const compHandle = reactive({
            validate(e) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        message.success("数据校验通过")
                        apis['/admin/content/create']()
                    }
                })
            }
        })
        apis['/admin/content/list']().then((res) => {
            compData.pidOptions = res.data.map((item) => {
                return {
                    label: item.title,
                    value: item.id
                }
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
