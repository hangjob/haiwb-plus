import {createApp} from 'vue'
import App, {install, router, axios} from "vue-bag-admin"
axios.defaults.baseURL = '/api'
import "@/style/style.css"
import "@/api/app.js"
import {setupGlobComponents} from "@/components/index.js";
import logo2 from "@/assets/logo2.png"
createApp(App).use(install, {
    getViews: () => import.meta.glob("./view/**/*.vue", {eager: true}),
    apis: {
        "/login":"/common/login",
        "/menus": "/admin/menu/list",
        "/userInfo": "/common/userinfo",
        "/register":"admin/member/create"
    },
    website: {
        title: "",
        logo:logo2,
        maxLogo:logo2
    },
    events:{

    }
}).use(setupGlobComponents).use(router).mount("#app")
