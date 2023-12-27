<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer: 'soft'}" header-style="font-size:14px;" title="编辑关键词">
                    <n-form
                        ref="formRef"
                        :model="compData.from"
                        :rules="compData.rules"
                        label-placement="left"
                        label-width="auto"
                        require-mark-placement="right-hanging"
                    >
                        <n-form-item label="二级分类" path="nav_id">
                            <n-select
                                v-model:value="compData.from.nav_id"
                                placeholder="选择二级分类"
                                :options="compData.nav_idOptions"
                                clearable
                            >
                                <template #action>
                                    选择父级菜单，可以采用树渲染哦，也阔以渲染图标哦
                                </template>
                            </n-select>
                        </n-form-item>
                        <n-form-item label="名称" path="title">
                            <n-input v-model:value="compData.from.title" placeholder="请输入关键词名称"/>
                        </n-form-item>
                        <n-form-item label="描述" path="des">
                            <n-input type="textarea" v-model:value="compData.from.des" placeholder="请输入关键词描述"/>
                        </n-form-item>
                        <n-form-item label="选择标签" path="label">
                            <n-select
                                v-model:value="compData.from.label"
                                placeholder="选择标签"
                                :options="labelOptions"
                            />
                        </n-form-item>
                        <n-form-item label="封面图" path="cover">
                            <n-input-group>
                                <n-input v-model:value="compData.from.cover" placeholder="请输入封面图"/>
                                <n-upload
                                    abstract
                                    :default-file-list="[]"
                                    action=""
                                    :custom-request="compHandle.coverCustomRequest"
                                >
                                    <n-button-group>
                                        <n-upload-trigger #="{ handleClick }" abstract>
                                            <n-button @click="handleClick">
                                                上传图片
                                            </n-button>
                                        </n-upload-trigger>
                                    </n-button-group>
                                </n-upload>
                            </n-input-group>
                            <upload-image v-model:url="compData.from.cover" ref="uploadImageRef"></upload-image>
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
import useComponent from "@/view/keys/useComponent.js";
import {firstToUpper} from "@/utils/index.js";
import {labelOptions} from "@/enum"

export default defineComponent({
    setup() {
        const formRef = ref(null)
        const route = useRoute()
        const {compData,compHandle,uploadImageRef} = useComponent()

        compHandle.validate = (e)=> {
            e.preventDefault()
            formRef.value?.validate((errors) => {
                if (!errors) {
                    compData.from.title = firstToUpper(compData.from.title)
                    apis['/admin/keys/update']({id: route.params.id, ...compData.from}).then((res)=>{
                        compHandle.back()
                    })
                }
            })
        }

        apis['/admin/keys/find']({where:{id:route.params.id}}).then((res) => {
            Object.keys(compData.from).forEach((key) => {
                compData.from[key] = res.data[key]
            })
        })
        return {
            compData,
            compHandle,
            formRef,
            labelOptions,
            uploadImageRef
        }
    }
})
</script>
