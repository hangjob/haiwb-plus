import {reactive, computed} from "vue";
import {useRouter} from "vue-router";

export default function useComponent() {

    const router = useRouter()
    const compData = reactive({
        from: {
            name: null,
            email: null,
            des: null,
            platform: null,
            shows: true,
            code:(new Date()).getTime()
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
    compData.emailOptions = computed(() => {
        return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
            const prefix = compData?.from?.email?.split('@')[0]
            return {
                label: prefix + suffix,
                value: prefix + suffix
            }
        })
    })
    const compHandle = reactive({
        back() {
            router.push('/member')
        },
    })
    return {
        compData,
        compHandle
    }
}
