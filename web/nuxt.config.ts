// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    // @ts-ignore
    // ssr: process.env.NODE_ENV !== "development",
    debug:false,
    app: {
        layoutTransition: {name: 'layout', mode: 'out-in'},
        head: {
            script: [
                {src: '//at.alicdn.com/t/c/font_3943467_cvcs8xhmcn9.js'},
                {src:'//cdn.jsdelivr.net/npm/fabric'},
                {src:'//cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js'},
            ]
        }
    },
    image: {
        domains: ['www.vipbic.com']
    },
    devtools: {enabled: true},
    modules: [
        "nuxt-bag-web",
        "nuxt-swiper"
    ],
    bagWeb: {
        name: 'bag',
        seoMeta: {
            title: '13',
            ogTitle: '',
            description: '',
            ogDescription: '',
            ogImage: 'https://example.com/image.png',
            twitterCard: 'summary_large_image',
        },
        pinia: ['./stores/**']
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
        "host": "0.0.0.0",
        port: 3001,
    },
    nitro:{
        devProxy: {
            "/webv1": {
                target: "http://127.0.0.1:7001", // 这里是接口地址
                changeOrigin: true,
                toProxy:false,
                prependPath: false,
            },
        },
    }
})
