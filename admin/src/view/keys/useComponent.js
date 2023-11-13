import {reactive, ref} from "vue";
import {useMessage} from "naive-ui";
import {useRouter} from "vue-router";
import {firstToUpper} from "@/utils/index.js";
import apis from "@/api/app.js";

export default function useComponent()
{
    const router = useRouter()
    const compData = reactive({
        from: {
            title: null,
            des: null,
            shows: true,
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
        back(){
            router.push('/keys')
        },
    })
    return {
        compData,
        compHandle
    }
}
