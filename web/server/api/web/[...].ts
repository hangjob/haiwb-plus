const baseURL = process.server ? 'http://127.0.0.1:7001' : '';

// 通用接口
export default defineEventHandler(async (event) => {
    const headers = event.node.req.headers || {};
    const body = await readBody(event)
    const query = getQuery(event)
    return await $fetch(baseURL + event.node.req.url?.replace('/api/web', ''), {
        method: 'POST',
        body,
        query,
        // @ts-ignore
        headers: {
            "tag": 'nuxt',
            ...headers
        },
    })
})
