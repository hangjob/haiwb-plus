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
                        <n-form-item label="用户名称" path="title">
                            <n-input v-model:value="compData.from.name" placeholder="请输入用户名称"/>
                        </n-form-item>
                        <n-form-item label="用户邮箱" path="email">
                            <n-auto-complete
                                v-model:value="compData.from.email"
                                :input-props="{autocomplete: 'disabled'}"
                                :options="compData.emailOptions"
                                placeholder="请输入用户邮箱"
                                clearable
                            />
                        </n-form-item>
                        <n-form-item label="输入新密码" path="password">
                            <n-input v-model:value="compData.from.password" placeholder="请输入新密码"/>
                        </n-form-item>
                        <n-form-item label="描述信息"  path="des">
                            <n-input type="textarea" v-model:value="compData.from.des" placeholder="请输入描述信息"/>
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
import apis from "@/api/app.js";
import {useRoute} from "vue-router"
import useComponent from "@/view/member/useComponent.js"
export default defineComponent({
    setup() {
        const {compData,compHandle} = useComponent()
        const formRef = ref(null)
        const route = useRoute()

        compHandle.validate = (e)=>{
            e.preventDefault()
            formRef.value?.validate((errors) => {
                if (!errors) {
                    compData.loading = true;
                    apis['/admin/member/update']({id: route.params.id, ...compData.from}).then(()=>{
                        compHandle.back()
                    }).finally(()=>{
                        compData.loading = false;
                    })
                }
            })
        }

        apis['/admin/member/find']({where:{id:route.params.id}}).then((res) => {
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
