import {axios} from "vue-bag-admin"

const tpl = ['list', 'create', 'find', 'update', 'destroy', 'increment', 'bulkCreate'];

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

axios.apis = apis;

export default apis;

