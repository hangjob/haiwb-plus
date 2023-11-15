export const useRequest = (url: string, params: any) => {
    if (process.server) {
        return useFetch(url, params)
    } else {
        return useFetch(url, {
            headers: {
                "tag": 'nuxt'
            },
            ...params
        })
    }
}

