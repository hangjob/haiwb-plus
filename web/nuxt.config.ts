// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    // @ts-ignore
    // ssr: process.env.NODE_ENV !== "development",
    debug: false,
    app: {
        "baseURL": "/",
        layoutTransition: {name: 'layout', mode: 'out-in'},
        head: {
            script: [
                {src: '//at.alicdn.com/t/c/font_3943467_mtdn5uqzxri.js'},
                {src: '//cdn.jsdelivr.net/npm/fabric'},
                {src: '//cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js'},
            ]
        }
    },
    image: {
        domains: ['www.vipbic.com']
    },
    devtools: {enabled: true},
    modules: [
        "nuxt-bag-web",
        "nuxt-swiper",
        "nuxt-lodash"
    ],
    bagWeb: {
        name: 'bag',
        seoMeta: {
            title: '',
            ogTitle: '',
            description: '',
            ogDescription: '',
            ogImage: '',
            twitterCard: '',
        },
        pinia: ['./stores/**']
    },
    runtimeConfig: {
        tag: 'nuxt'
    },
    // @ts-ignore
    vite: {
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: `@import "@/assets/vars.less";`,
                },
            },
        },
    },
    devServer: {
        host: "0.0.0.0",
        port: 3001,
    },
    nitro: {
        devProxy: {
            "/api/webv1": {
                target: "http://127.0.0.1:7010",
                changeOrigin: true,
                prependPath: true
            },
        },
        routeRules: {
            '/api/webv1/**': {
                proxy: 'http://127.0.0.1:7010/**'
            }
        }
    }
})
