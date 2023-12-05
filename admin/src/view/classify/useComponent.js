import {reactive, ref} from "vue";
import apis from "@/api/app.js";
import {useRouter} from "vue-router";
import {file as pmFile} from "pm-utils";

export default function useComponent()
{
    const router = useRouter()
    const uploadImageRef = ref(null)
    const compData = reactive({
        from: {
            title: null,
            pid:null,
            router:null,
            des:null,
            cover:null,
            shows:true,
            icon:null
        },
        rules: {
            title: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入一级分类"
            }
        },
    })

    const compHandle = reactive({
        back(){
            router.push('/classify')
        },
        coverCustomRequest({ file,data,headers,withCredentials,action,onFinish, onError,onProgress}){
            pmFile.fileToBase64(file.file,(img)=>{
                uploadImageRef.value.compHandle.open(true,{img})
            })
        },
    })
    return {
        compData,
        compHandle,
        uploadImageRef
    }
}
