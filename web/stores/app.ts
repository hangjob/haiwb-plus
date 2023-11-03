import {defineStore} from "pinia";

export const useApp = defineStore('app', {
    state: () => ({
        name: 2,
    }),
})
