import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {mdnice} from "@/config/index.js";
import {file as pmFile, fun} from "pm-utils";
import apis, {post} from "@/api/app.js";
import {originOptions} from "@/enum"

export default function useComponent() {
    const formRef = ref(null)
    const router = useRouter()
    const uploadImageRef = ref(null)
    const compData = reactive({
        from: {
            title: null,
            des: null,
            pan: null,
            panPas: null,
            panTitle: null,
            url: null,
            seo: null,
            keys: null,
            classify_id: null,
            nav_id: null,
            like: 1,
            views: 1,
            sort: 1,
            router: null,
            langue: null,
            shows: true,
            cover: null,
            content: null,
            html: null,
            origin: null,
            label: null,
            visitor: true
        },
        kyesTitle: null,
        kyesDes: null,
        rules: {
            title: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入文章名称"
            },
            content: {
                required: true,
                trigger: ["blur", "input"],
                message: "内容不能为空"
            },
            html: {
                required: true,
                trigger: ["blur", "input"],
                message: "请转换为html"
            },
            des: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入文章描述"
            },
            url: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入官网地址"
            },
            cover: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入封面图"
            }
        },
        pidOptions: [],
        keysOptions: [],
        keysTagOptions: [],
        nav_idOptions: [],
        nav_idOptionsSelct: [],
        classify_idOptions: [],
        reclassify_idOptions: [],
        topic_idOptions: [],
        keysQuery: null,
        keysLoading: false,
        keysTag: [],
        mdnice,
        loading: false,
        originOptions
    })

    const compHandle = reactive({
        back() {
            router.push('/article').then()
        },
        coverCustomRequest({file, data, headers, withCredentials, action, onFinish, onError, onProgress}) {
            pmFile.fileToBase64(file.file, (img) => {
                uploadImageRef.value.compHandle.open(true, {img})
            })
        },
        keysHandleSearch: fun.throttle((query) => {
            apis['/admin/keys/list']({title: query}).then((res) => {
                compData.keysOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        }, 200, {
            'leading': true,
            'trailing': true
        }),
        keysHandleCreated() {
            if (compData.kyesDes && compData.kyesTitle) {
                apis['/admin/keys/create']({
                    title: compData.kyesTitle,
                    nav_id: compData.from.nav_id[0],
                    des: compData.kyesDes
                }).then(() => {
                    compData.kyesTitle = null
                    compData.kyesDes = null
                    compHandle.getKeysList()
                })
            }
        },
        getKeysList() {
            apis['/admin/keys/list']({nav_id: compData.keysQuery}).then((res) => {
                compData.keysOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        },
        keysFilter(pattern, option) {
            console.log(pattern, option)
        },
        getKeysListAll(arr) {
            const https = [];
            arr && arr.length && arr.forEach((item) => {
                const http = post('/admin/keys/list', {nav_id: item})
                https.push(http);
            })
            const datas = [];
            Promise.all(https).then((res) => {
                res.forEach((item, idx) => {
                    datas.push(...item.data)
                })
                compData.keysOptions = datas.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
                const new_keys = []
                compData.from.keys.forEach((key) => {
                    const data = datas.find((item) => key === item.id)
                    data && new_keys.push(data.id)
                })
                compData.from.keys = new_keys
            })
        },
        getNavList(empty = true) {
            compData.from.classify_id && apis['/admin/nav/list']({pid: compData.from.classify_id}).then((res) => {
                compData.nav_idOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
                if (empty) {
                    compData.from.keys = []
                    compData.from.nav_id = []
                }
            })
        },
        getClassifyOptions() {
            apis['/admin/classify/list']().then((res) => {
                compData.classify_idOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        },
        getReclassifyOptions() {
            apis['/admin/reclassify/list']().then((res) => {
                compData.reclassify_idOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        },
        getTopicOptions() {
            apis['/admin/topic/list']().then((res) => {
                compData.topic_idOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        },
    })
    onMounted(() => {
        window.addEventListener('message', (e) => {
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
    compHandle.getClassifyOptions()
    return {
        compData,
        compHandle,
        uploadImageRef,
        formRef
    }
}
