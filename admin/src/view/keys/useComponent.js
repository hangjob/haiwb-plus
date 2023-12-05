import {reactive, ref} from "vue";
import {useMessage} from "naive-ui";
import {useRouter} from "vue-router";
import {firstToUpper} from "@/utils/index.js";
import apis from "@/api/app.js";
import {file as pmFile} from "pm-utils";

export default function useComponent() {
    const router = useRouter()
    const uploadImageRef = ref()
    const compData = reactive({
        from: {
            title: null,
            des: null,
            shows: true,
            label: null,
            cover:null,
            nav_id:null,
        },
        rules: {
            title: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入关键词名称"
            },
        },
        nav_idOptions:[]
    })
    const compHandle = reactive({
        back() {
            router.push('/keys')
        },
        coverCustomRequest({file, data, headers, withCredentials, action, onFinish, onError, onProgress}) {
            pmFile.fileToBase64(file.file, (img) => {
                uploadImageRef.value.compHandle.open(true, {img})
            })
        },
        getNavList() {
            apis['/admin/nav/list']().then((res) => {
                compData.nav_idOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        },
    })
    compHandle.getNavList()
    return {
        compData,
        compHandle,
        uploadImageRef
    }
}
