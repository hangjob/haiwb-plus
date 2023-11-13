import {axios} from "vue-bag-admin"
import {utils} from "pm-utils"

function unusualResult(result){
    const {config,data} = result;
    if(data?.msg && config.hint){
        if(utils.dataType(data?.msg) === 'array'){
            window.$message.warning(data?.msg[0].message)
        }else{
            window.$message.warning(data?.msg)
        }
    }
    return result
}


axios.interceptors.response.use(response => {
    return unusualResult(response);
}, error => {
    return Promise.reject(unusualResult(error));
})


const tpls = [
    {url:'list'},
    {url:'page'},
    {url:'find'},
    {url:'increment'},
    {url:'bulkCreate'},
    {url:'create',config:{hint:true}},
    {url:'destroy',config:{hint:true}},
    {url:'update',config:{hint:true}}
];

const apis = {}

tpls.forEach((item) => {
    apis[`/admin/menu/${item.url}`] = (params) => {
        return  axios.post(`/admin/menu/${item.url}`, params, item.config || {})
    }
})

tpls.forEach((item) => {
    apis[`/admin/content/${item.url}`] = (params) => {
        return  axios.post(`/admin/content/${item.url}`, params, item.config || {})
    }
})

tpls.forEach((item) => {
    apis[`/admin/keys/${item.url}`] = (params) => {
        return  axios.post(`/admin/keys/${item.url}`, params, item.config || {})
    }
})

tpls.forEach((item) => {
    apis[`/admin/nav/${item.url}`] = (params) => {
        return  axios.post(`/admin/nav/${item.url}`, params, item.config || {})
    }
})

tpls.forEach((item) => {
    apis[`/admin/member/${item.url}`] = (params) => {
        return  axios.post(`/admin/member/${item.url}`, params, item.config || {})
    }
})


apis[`/upload/images`] = (params)=>{
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
    return axios.post(`/upload/images`, params ,config)
}


axios.apis = apis;

export default apis;

