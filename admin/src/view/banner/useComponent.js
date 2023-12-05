import {reactive, ref} from "vue";
import {useMessage} from "naive-ui";
import {useRouter} from "vue-router";
import {firstToUpper} from "@/utils/index.js";
import apis from "@/api/app.js";
import {file as pmFile} from "pm-utils";
import {imageTypeOptions} from "@/enum"
export default function useComponent()
{
    const router = useRouter()
    const uploadImageRef = ref(null)
    const compData = reactive({
        from: {
            title: null,
            des: null,
            shows: true,
            url:null,
            cover:null
        },
        rules: {
            title: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入Banner名称"
            },
        },
        imageTypeOptions
    })
    const compHandle = reactive({
        coverCustomRequest({file, data, headers, withCredentials, action, onFinish, onError, onProgress}) {
            pmFile.fileToBase64(file.file, (img) => {
                uploadImageRef.value.compHandle.open(true, {img})
            })
        },
        back(){
            router.push('/banner')
        },
    })
    return {
        compData,
        compHandle,
        uploadImageRef
    }
}
