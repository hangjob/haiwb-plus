import {reactive} from "vue";
import {useRouter} from "vue-router";
export default function useComponent()
{

    const router = useRouter()
    const compData = reactive({
        from: {
            name: null,
            email:null,
            des:null,
            platform:null
        },
        rules: {
            name: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入用户名称"
            },
            email: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入用户邮箱"
            },
        },
    })

    const compHandle = reactive({
        back(){
            router.push('/member')
        },
    })
    return {
        compData,
        compHandle
    }
}
