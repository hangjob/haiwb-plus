import {axios} from "vue-bag-admin"

const tpl = ['list', 'page', 'create', 'find', 'update', 'destroy', 'increment', 'bulkCreate'];

const apis = {}

tpl.forEach((item) => {
    apis[`/admin/menu/${item}`] = (params) => {
        return  axios.post(`/admin/menu/${item}`, params)
    }
})

tpl.forEach((item) => {
    apis[`/admin/content/${item}`] = (params) => {
        return  axios.post(`/admin/content/${item}`, params)
    }
})

tpl.forEach((item) => {
    apis[`/admin/keys/${item}`] = (params) => {
        return  axios.post(`/admin/keys/${item}`, params)
    }
})

tpl.forEach((item) => {
    apis[`/admin/nav/${item}`] = (params) => {
        return  axios.post(`/admin/nav/${item}`, params)
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

