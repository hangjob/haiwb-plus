import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {mdnice} from "@/config/index.js";
import {file as pmFile, fun} from "pm-utils";
import apis from "@/api/app.js";
import {originOptions} from "@/enum"
export default function useComponent()
{

    const router = useRouter()
    const uploadImageRef = ref(null)
    const compData = reactive({
        from: {
            title: null,
            des:null,
            pan:null,
            panPas:null,
            panTitle:null,
            url:null,
            seo:null,
            keys:null,
            nav_id:null,
            like:null,
            views:null,
            sort:null,
            router:null,
            langue:null,
            shows:true,
            cover:null,
            content:null,
            html:null,
            origin:null,
            label:null
        },
        kyesTitle:null,
        rules: {
            title: {
                required: true,
                trigger: ["blur", "input"],
                message: "请输入文章名称"
            },
            content:{
                required: true,
                trigger: ["blur", "input"],
                message: "内容不能为空"
            },
            html:{
                required: true,
                trigger: ["blur", "input"],
                message: "请转换为html"
            }
        },
        pidOptions: [],
        keysOptions:[],
        nav_idOptions:[],
        keysQuery:null,
        keysLoading:false,
        mdnice,
        loading:false,
        originOptions
    })

    const compHandle = reactive({
        back(){
            router.push('/article')
        },
        coverCustomRequest({ file,data,headers,withCredentials,action,onFinish, onError,onProgress}){
            pmFile.fileToBase64(file.file,(img)=>{
                uploadImageRef.value.compHandle.open(true,{img})
            })
        },
        keysHandleSearch:fun.throttle((query)=>{
            compData.keysQuery = query;
            compHandle.getKeysList();
        },200,{
            'leading': true,
            'trailing': true
        }),
        keysHandleCreated(){
            apis['/admin/keys/create']({title:compData.kyesTitle}).then(()=>{
                compData.kyesTitle = null
                compHandle.getKeysList()
            })
        },
        getKeysList(){
            const where = {};
            if(compData.keysQuery){
                where['title'] = compData.keysQuery
            }
            apis['/admin/keys/list']({where}).then((res) => {
                compData.keysOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        },
        getNavList(){
            apis['/admin/nav/list']().then((res) => {
                compData.nav_idOptions = res.data.map((item) => {
                    return {
                        ...item,
                        label: item.title,
                        value: item.id
                    }
                })
            })
        }
    })
    onMounted(()=>{
        window.addEventListener('message', (e)=>{
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
    compHandle.getKeysList()
    compHandle.getNavList()
    return {
        compData,
        compHandle,
        uploadImageRef
    }
}
