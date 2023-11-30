import {defineStore} from "pinia";

export const useApp = defineStore('app', {
    state: () => ({
        content: {},
        // 左侧导航菜单
        nav: {
            data: []
        }
    }),
    getters: {
        getNav(state) {
            return state.nav.data.filter((item: any) => !item.pid)
        }
    }
})
