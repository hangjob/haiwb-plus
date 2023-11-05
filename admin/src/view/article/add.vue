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
                        <n-form-item label="文章名称" path="title">
                            <n-input v-model:value="compData.from.title" placeholder="请输入文章名称"/>
                        </n-form-item>
                        <n-form-item label="文章名称" path="des">
                            <n-input type="textarea" v-model:value="compData.from.des" placeholder="请输入文章描述"/>
                        </n-form-item>
                        <n-form-item label="文章SEO" path="seo">
                            <n-input type="textarea" v-model:value="compData.from.seo" placeholder="请输入文章SEO"/>
                        </n-form-item>
                        <n-form-item label="文章关键词" path="keys">
                            <n-select
                                v-model:value="compData.from.keys"
                                placeholder="输入关键词"
                                :options="compData.keysOptions"
                                :loading="compData.keysLoading"
                                filterable
                                multiple
                                @search="compHandle.keysHandleSearch"
                            />
                            <n-input-group style="margin-left: 5px">
                                <n-input v-model:value="compData.kyesTitle" placeholder="输入关键词"/>
                                <n-button type="primary" ghost @click="compHandle.keysHandleCreated">提交</n-button>
                            </n-input-group>
                        </n-form-item>
                        <n-space>
                            <n-form-item label="点赞量" path="like">
                                <n-input-number v-model:value="compData.from.like" placeholder="请输入点赞量" clearable />
                            </n-form-item>
                            <n-form-item label="浏览量" path="views">
                                <n-input-number v-model:value="compData.from.views" placeholder="请输入浏览量" clearable />
                            </n-form-item>
                            <n-form-item label="排序" path="sort">
                                <n-input-number v-model:value="compData.from.sort" placeholder="请输入排序" clearable />
                            </n-form-item>
                        </n-space>
                        <n-form-item label="路由别名" path="router">
                            <n-input  v-model:value="compData.from.router" placeholder="当存在时使用改字段作为路由"/>
                        </n-form-item>
                        <n-form-item label="选择语言" path="langue">
                            <n-select
                                v-model:value="compData.from.langue"
                                placeholder="选择选择语言"
                                :options="langueOptions"
                            />
                        </n-form-item>
                        <n-form-item label="是否显示" path="shows">
                            <n-switch :round="false" v-model:value="compData.from.shows">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
                        </n-form-item>
                        <n-form-item label="内容" path="contnet">
<!--                            <iframe style="border: 1px solid #dddddd;border-radius: 4px" height="600px" width="100%" src="https://mdnice.haiwb.com/" frameborder="0"></iframe>-->
                        </n-form-item>

                        <n-upload
                            action="/api/upload/images"
                            :headers="{'naive-info': 'hello!'}"
                            :data="{'naive-data': 'cool! naive!'}"
                        >
                            <n-button>上传文件</n-button>
                        </n-upload>
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
import {defineComponent, reactive, computed, ref,onMounted} from "vue"
import {useMessage} from "naive-ui"
import apis from "@/api/app.js";
import {fun} from 'pm-utils'
import {langueOptions} from "@/enum"
export default defineComponent({
    setup() {
        const formRef = ref(null)
        const message = useMessage()
        const compData = reactive({
            from: {
                title: null,
                des:null,
                seo:null,
                keys:null
            },
            kyesTitle:null,
            rules: {
                title: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入文章名称"
                },
            },
            pidOptions: [],
            keysOptions:[],
            keysQuery:null,
            keysLoading:false
        })
        const compHandle = reactive({
            validate(e) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        apis['/admin/content/create']()
                    }
                })
            },
            keysHandleSearch:fun.throttle((query)=>{
                compData.keysQuery = query;
                compHandle.getKeysList();
            },200,{
                'leading': true,
                'trailing': true
            }),
            keysHandleCreated(){
                apis['/admin/keys/create']({title:compData.kyesTitle}).then(()=>{
                    compData.kyesTitle = null
                    compHandle.getKeysList()
                })
            },
            getKeysList(){
                const where = {};
                if(compData.keysQuery){
                    where['title'] = compData.keysQuery
                }
                apis['/admin/keys/list']({where}).then((res) => {
                    compData.keysOptions = res.data.map((item) => {
                        return {
                            ...item,
                            label: item.title,
                            value: item.id
                        }
                    })
                })
            },
        })
        compHandle.getKeysList()
        onMounted(()=>{
            window.addEventListener('message', function (e) {
                // try {
                //     console.log(e.data.content)
                // } catch (error) {
                //     console.log(error)
                // }
            })
        })
        return {
            compData,
            compHandle,
            formRef,
            langueOptions
        }
    }
})
</script>
