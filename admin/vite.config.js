import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import Components from "unplugin-vue-components/vite"
import {NaiveUiResolver} from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    build: {
        chunkSizeWarningLimit: 1024*5,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        proxy: {
            "^/api": {
                target: "http://127.0.0.1:7001/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            }
        }
    }
})
