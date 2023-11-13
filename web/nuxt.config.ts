// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    // @ts-ignore
    app: {
        layoutTransition: {name: 'layout', mode: 'out-in'},
        head: {
            script: [{src: '//at.alicdn.com/t/c/font_3943467_cvcs8xhmcn9.js'}]
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
        server: {
            proxy: {
                "^/api": {
                    target: "http://127.0.0.1:7001/",
                    changeOrigin: true,
                    rewrite: (path:any) => path.replace(/^\/api/, ""),
                }
            }
        }
    },
    nitro:{
        devProxy: {
            "/api": {
                target: "http://127.0.0.1:7001", // 这里是接口地址
                changeOrigin: true,
                toProxy:false,
                prependPath: false,
            },
        },
    }
})