// @ts-ignore
import mitt from 'mitt'

export default defineNuxtPlugin(() => {
    const emitter = mitt<any>()
    return {
        provide: {
            emits: emitter.emit, // 触发事件方法 $emits
            on: emitter.on // 监听事件方法 $on
        }
    }
})

