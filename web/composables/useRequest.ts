export const useRequest = (url: string, params: any) => {
    return useFetch(url, {
        onRequest({options}) {
            options.headers = options.headers || {}
            // @ts-ignore
            options.headers.tag = 'nuxt'
            // @ts-ignore
            options.headers.sing = aesEncrypt({domain: 'itnvas', uid: getNanoid()})
        },
        ...params
    })
}

