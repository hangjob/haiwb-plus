import {axios} from "vue-bag-admin"
import {utils, crypto, string} from "pm-utils"

function unusualResult(result) {
    const {config, data} = result;
    if (data?.msg && config.hint) {
        if (utils.dataType(data?.msg) === 'array') {
            window.$message.warning(data?.msg[0].message)
        } else {
            window.$message.warning(data?.msg)
        }
    }
    return result
}

axios.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return unusualResult(response);
}, error => {
    return Promise.reject(unusualResult(error));
})


const post = (url, params, config) => {
    return axios.post(url, params, config)
}

const get = (url, params, config) => {
    return axios.get(url, {params, ...config})
}

const tpls = [
    {url: 'list'},
    {url: 'page'},
    {url: 'find'},
    {url: 'increment'},
    {url: 'bulkCreate'},
    {url: 'create', config: {hint: true}},
    {url: 'destroy', config: {hint: true}},
    {url: 'update', config: {hint: true}}
];

const apis = {}

const apiss = ['menu', 'content', 'keys', 'banner', 'nav', 'member', 'classify', 'reclassify', 'topic']

apiss.forEach((ctrol) => {
    tpls.forEach((item) => {
        let url = `/admin/${ctrol}/${item.url}`
        apis[url] = (params) => {
            return axios.post(url, params, item.config || {})
        }
    })
})

apis[`/upload/images`] = (params) => {
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
    return axios.post(`/upload/images`, params, config)
}

axios.apis = apis;
export default apis;
export {
    post
}

