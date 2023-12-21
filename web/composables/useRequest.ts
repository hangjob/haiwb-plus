export const useRequest = (url: string, params: any) => {
    if (params && params.body) {
        params.query = params.body
    }
    return useFetch(url, {
        onRequest({options}) {
            options.headers = options.headers || {}
            // @ts-ignore
            options.headers.tag = 'nuxt'
            // @ts-ignore
            options.headers.sing = aesEncrypt({domain: 'itnvas', uid: getNanoid()})
        },
        // watch: [getNanoid()],
        ...params
    })
}
