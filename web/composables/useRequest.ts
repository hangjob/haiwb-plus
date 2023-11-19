export const useRequest = (url: string, params: any) => {
    const _options = Object.assign({
        // @ts-ignore
        onRequest({options}) {
            options.headers = options.headers || {}
            options.headers.tag = 'nuxt'
        }
    }, params)
    return useFetch(url, _options)
}

