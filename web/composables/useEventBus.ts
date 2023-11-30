// composables/useEventBus.ts
import mitt from 'mitt'

const emitter = mitt<any>()

export const useEmit = emitter.emit
export const useOn = emitter.on

export const useOff = emitter.off
