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
            cover:null
        },
        rules: {
            title: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入关键词名称"
            },
        },
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
    })
    return {
        compData,
        compHandle,
        uploadImageRef
    }
}
