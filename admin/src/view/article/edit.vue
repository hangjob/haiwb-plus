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
                            <n-input type="textarea" maxlength="120" show-count v-model:value="compData.from.des" placeholder="请输入文章描述"/>
                        </n-form-item>
                        <n-form-item label="文章SEO" path="seo">
                            <n-input type="textarea" maxlength="120" show-count v-model:value="compData.from.seo" placeholder="请输入文章SEO"/>
                        </n-form-item>
                        <n-form-item label="发布平台" path="origin">
                            <n-select
                                v-model:value="compData.from.origin"
                                placeholder="选择发布平台"
                                :options="compData.originOptions"
                            >
                                <template #action>
                                    选择父级菜单，可以采用树渲染哦，也阔以渲染图标哦
                                </template>
                            </n-select>
                        </n-form-item>
                        <n-form-item label="官网地址" path="url">
                            <n-input v-model:value="compData.from.url" placeholder="请输入官网地址"/>
                        </n-form-item>
                        <n-form-item label="一级分类" path="classify_id">
                            <n-select
                                v-model:value="compData.from.classify_id"
                                placeholder="选择一级分类"
                                :options="compData.classify_idOptions"
                                clearable
                                @update:value="compHandle.getNavList"
                            >
                                <template #action>
                                    选择父级菜单，可以采用树渲染哦，也阔以渲染图标哦
                                </template>
                            </n-select>
                        </n-form-item>
                        <n-form-item label="二级分类" path="nav_id">
                            <n-select
                                v-model:value="compData.from.nav_id"
                                placeholder="选择父级菜单"
                                multiple
                                :options="compData.nav_idOptions"
                                @update:value="compHandle.getKeysListAll"
                            >
                            </n-select>
                        </n-form-item>
                        <n-form-item label="文章关键词" path="keys">
                            <n-select
                                v-model:value="compData.from.keys"
                                multiple
                                filterable
                                placeholder="输入关键词"
                                :options="compData.keysOptions"
                                :loading="compData.keysLoading"
                                clearable
                                remote
                                :clear-filter-after-select="false"
                                @search="compHandle.keysHandleSearch"
                            />
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
                            <n-form-item label="资源名称" path="panTitle">
                                <n-input v-model:value="compData.from.panTitle" placeholder="请输入资源名称" clearable/>
                            </n-form-item>
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
                        <n-form-item label="游客访问" path="visitor">
                            <n-switch :round="false" v-model:value="compData.from.visitor">
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
import apis from "@/api/app.js";
import {langueOptions, labelOptions, originOptions} from "@/enum"
import {useRoute, useRouter} from "vue-router";
import useComponent from "@/view/article/useComponent.js";
import Transfer from './Transfer.vue'
export default defineComponent({
    components:{
        Transfer
    },
    setup() {
        const formRef = ref(null)
        const route = useRoute()
        const {compData,compHandle,uploadImageRef} = useComponent()
        compHandle.validate = (e)=>{
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
        }
        apis['/admin/content/find']({where:{id: route.params.id}}).then((res) => {
            Object.keys(compData.from).forEach((key) => {
                compData.from[key] = res.data[key]
            })
            compHandle.getNavList(false)
            // compHandle.getKeysListAll(res.data.nav_id)
            let authIframe = document.getElementById('authIframe')
            authIframe.addEventListener('load', function (e) {
                authIframe.contentWindow.postMessage({content: compData.from.content}, compData.mdnice.src)
            })
        })

        return {
            compData,
            compHandle,
            formRef,
            uploadImageRef,
            langueOptions,
            labelOptions,
        }
    }
})
</script>
