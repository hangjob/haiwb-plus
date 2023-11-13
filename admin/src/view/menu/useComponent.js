import {reactive} from "vue";
import {useRouter} from "vue-router";
import apis from "@/api/app.js";
export default function useComponent()
{

    const router = useRouter()
    const compData = reactive({
        from: {
            title: null,
            path: null,
            file: null,
            icon: null,
            shows: true,
            pid: null,
            keepAlive: false,
            tabFix: false,
        },
        rules: {
            title: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入菜单名称"
            },
            path: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入菜单路由"
            },
            file: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入文件路径"
            }
        },
        pidOptions: []
    })

    const compHandle = reactive({
        back(){
            router.push('/menu')
        },
        getPidOptions(){
            apis['/admin/menu/list']().then((res) => {
                const pidOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id,
                    }
                })
                compData.pidOptions = pidOptions.filter((item)=>item.shows)
            })
        }
    })
    compHandle.getPidOptions()
    return {
        compData,
        compHandle
    }
}
