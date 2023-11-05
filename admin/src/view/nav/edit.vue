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
                        <n-form-item label="Web菜单名称" path="title">
                            <n-input v-model:value="compData.from.title" placeholder="请输入Web菜单名称"/>
                        </n-form-item>
                        <n-form-item label="父级菜单" path="pid">
                            <n-select
                                v-model:value="compData.from.pid"
                                placeholder="选择父级菜单"
                                :options="compData.pidOptions"
                            >
                                <template #action>
                                    选择父级菜单，可以采用树渲染哦，也阔以渲染图标哦
                                </template>
                            </n-select>
                        </n-form-item>
                        <n-form-item label="Web别名菜单路由" path="router">
                            <n-input v-model:value="compData.from.router" placeholder="请输入Web别名菜单路由"/>
                        </n-form-item>
                        <n-form-item label="描述" path="des">
                            <n-input type="textarea" v-model:value="compData.from.des" placeholder="请输入描述"/>
                        </n-form-item>
                        <n-form-item label="封面图" path="cover">
                            <n-input-group>
                                <n-input v-model:value="compData.from.cover" placeholder="请输入封面图"/>
                                <n-button type="primary" ghost>上传图片</n-button>
                            </n-input-group>
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
import {useMessage} from "naive-ui"
import apis from "@/api/app.js";
import {useRoute} from "vue-router";

export default defineComponent({
    setup() {
        const formRef = ref(null)
        const message = useMessage()
        const route = useRoute()
        const compData = reactive({
            from: {
                title: null,
                pid:null,
                router:null,
                des:null,
                cover:null,
                shows:true
            },
            rules: {
                title: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入Web菜单名称"
                },
                path: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入菜单路由"
                },
                file: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入文件路径"
                }
            },
            pidOptions: []
        })
        const compHandle = reactive({
            validate(e) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        apis['/admin/nav/update']({id: route.params.id,...compData.from})
                    }
                })
            }
        })
        apis['/admin/nav/list']().then((res) => {
            const pidOptions = res.data.map((item) => {
                return {
                    ...item,
                    label: item.title,
                    value: item.id,
                }
            })
            compData.pidOptions = pidOptions.filter((item)=>item.shows)
        })

        apis['/admin/nav/find']({id:route.params.id}).then((res) => {
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
