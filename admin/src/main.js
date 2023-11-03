import {createApp} from 'vue'
import App, {install, router, axios} from "vue-bag-admin"
axios.defaults.baseURL = '/api'
import "@/api/app.js"

createApp(App).use(install, {
    getViews: () => import.meta.glob("./view/**/*.vue", {eager: true}),
    apis: {
        "/menus": "/admin/menu/list",
        "/userInfo": "/common/userinfo"
    },
    website: {
        title: "管理系统"
    },
}).use(router).mount("#app")
