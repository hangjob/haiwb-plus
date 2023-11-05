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
                        <n-form-item label="文章描述" path="des">
                            <n-input type="textarea" v-model:value="compData.from.des" placeholder="请输入文章描述"/>
                        </n-form-item>
                        <n-form-item label="文章SEO" path="seo">
                            <n-input type="textarea" v-model:value="compData.from.seo" placeholder="请输入文章SEO"/>
                        </n-form-item>
                        <n-form-item label="官网地址" path="url">
                            <n-input v-model:value="compData.from.url" placeholder="请输入官网地址"/>
                        </n-form-item>
                        <n-form-item label="Web菜单ID" path="nav_id">
                            <n-select
                                v-model:value="compData.from.nav_id"
                                placeholder="选择父级菜单"
                                :options="compData.nav_idOptions"
                            >
                                <template #action>
                                    选择父级菜单，可以采用树渲染哦，也阔以渲染图标哦
                                </template>
                            </n-select>
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
                                <n-input-number v-model:value="compData.from.like" placeholder="请输入点赞量"
                                                clearable/>
                            </n-form-item>
                            <n-form-item label="浏览量" path="views">
                                <n-input-number v-model:value="compData.from.views" placeholder="请输入浏览量"
                                                clearable/>
                            </n-form-item>
                            <n-form-item label="排序" path="sort">
                                <n-input-number v-model:value="compData.from.sort" placeholder="请输入排序" clearable/>
                            </n-form-item>
                        </n-space>
                        <n-form-item label="路由别名" path="router">
                            <n-input v-model:value="compData.from.router" placeholder="当存在时使用改字段作为路由"/>
                        </n-form-item>
                        <n-form-item label="网站语言" path="langue">
                            <n-select
                                v-model:value="compData.from.langue"
                                placeholder="选择选择语言"
                                :options="langueOptions"
                            />
                        </n-form-item>
                        <n-form-item label="选择标签" path="label">
                            <n-select
                                v-model:value="compData.from.label"
                                placeholder="选择标签"
                                :options="labelOptions"
                            />
                        </n-form-item>
                        <n-space>
                            <n-form-item label="资源地址" path="pan">
                                <n-input v-model:value="compData.from.pan" placeholder="请输入网盘地址" clearable />
                            </n-form-item>
                            <n-form-item label="网盘密码" path="panPas">
                                <n-input v-model:value="compData.from.panPas" placeholder="请输入网盘密码" clearable />
                            </n-form-item>
                        </n-space>
                        <n-form-item label="是否显示" path="shows">
                            <n-switch :round="false" v-model:value="compData.from.shows">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
                        </n-form-item>
                        <n-form-item label="文章封面图" path="cover">
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
                        <n-form-item label="内容" path="content">
                            <iframe id="authIframe" style="border: 1px solid #dddddd;border-radius: 4px" height="1000px"
                                    width="100%" :src="compData.mdnice.src" frameborder="0"></iframe>
                        </n-form-item>
                        <n-form-item label="md源码" path="content">
                            <n-input type="textarea" v-model:value="compData.from.content" placeholder="内容不能为空，自动获取md源码"/>
                        </n-form-item>
                        <n-form-item label="html源码" path="html">
                            <n-input type="textarea" v-model:value="compData.from.html" placeholder="点击右侧获取html源码"/>
                        </n-form-item>
                    </n-form>
                    <template #action>
                        <n-space justify="end">
                            <n-button @click="compHandle.back" attr-type="button">返回列表</n-button>
                            <n-button attr-type="button" :loading="compData.loading" type="success" @click="compHandle.validate">提交数据</n-button>
                        </n-space>
                    </template>
                </n-card>
            </n-space>
        </n-grid-item>
    </n-grid>
</template>
<script>
import {defineComponent, reactive, computed, ref, onMounted} from "vue"
import {useMessage} from "naive-ui"
import apis from "@/api/app.js";
import {file as pmFile, fun} from 'pm-utils'
import {langueOptions,labelOptions} from "@/enum"
import {useRoute, useRouter} from "vue-router";
import {mdnice} from "@/config"
export default defineComponent({
    setup() {
        const formRef = ref(null)
        const uploadImageRef = ref(null)
        const message = useMessage()
        const route = useRoute()
        const router = useRouter()
        const compData = reactive({
            from: {
                title: null,
                des: null,
                url:null,
                seo: null,
                keys: null,
                nav_id: null,
                like: null,
                views: null,
                sort: null,
                router: null,
                langue: null,
                shows: true,
                cover: null,
                content: null,
                html:null
            },
            kyesTitle: null,
            rules: {
                title: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入文章名称"
                },
                content:{
                    required: true,
                    trigger: ["blur", "input"],
                    message: "内容不能为空"
                },
                html:{
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请转换为html"
                }
            },
            pidOptions: [],
            keysOptions: [],
            nav_idOptions: [],
            keysQuery: null,
            keysLoading: false,
            mdnice,
            loading:false
        })
        const compHandle = reactive({
            validate(e) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        compData.loading = true;
                        apis['/admin/content/update']({id: route.params.id, ...compData.from}).then(()=>{
                            compHandle.back()
                        }).finally(()=>{
                            compData.loading = false;
                        })
                    }
                })
            },
            back(){
                router.push('/article')
            },
            coverCustomRequest({ file,data,headers,withCredentials,action,onFinish, onError,onProgress}){
                pmFile.fileToBase64(file.file,(img)=>{
                    uploadImageRef.value.compHandle.open(true,{img})
                })
            },
            keysHandleSearch: fun.throttle((query) => {
                compData.keysQuery = query;
                compHandle.getKeysList();
            }, 200, {
                'leading': true,
                'trailing': true
            }),
            keysHandleCreated() {
                apis['/admin/keys/create']({title: compData.kyesTitle}).then(() => {
                    compData.kyesTitle = null
                    compHandle.getKeysList()
                })
            },
            getKeysList() {
                const where = {};
                if (compData.keysQuery) {
                    where['title'] = compData.keysQuery
                }
                apis['/admin/keys/list']({where}).then((res) => {
                    compData.keysOptions = res.data.map((item) => {
                        return {
                            ...item,
                            label: item.title,
                            value: item.title
                        }
                    })
                })
            },
            getNavList() {
                apis['/admin/keys/list']().then((res) => {
                    compData.nav_idOptions = res.data.map((item) => {
                        return {
                            ...item,
                            label: item.title,
                            value: item.id
                        }
                    })
                })
            }
        })
        compHandle.getKeysList()
        compHandle.getNavList()

        apis['/admin/content/find']({id: route.params.id}).then((res) => {
            Object.keys(compData.from).forEach((key) => {
                compData.from[key] = res.data[key]
            })
            let authIframe = document.getElementById('authIframe')
            authIframe.addEventListener('load', function (e) {
                authIframe.contentWindow.postMessage({conent: compData.from.content}, compData.mdnice.src)
            })
        })

        onMounted(() => {
            window.addEventListener('message', function (e) {
                try {
                    if (e.data.content) {
                        compData.from.content = e.data.content
                    }
                    if (e.data.html) {
                        compData.from.html = e.data.html
                    }
                } catch (error) {
                    console.log(error)
                }
            })
        })
        return {
            compData,
            compHandle,
            formRef,
            uploadImageRef,
            langueOptions,
            labelOptions
        }
    }
})
</script>
