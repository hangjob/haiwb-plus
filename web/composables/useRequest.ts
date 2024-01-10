export const useRequest = async (url: string, params: any) => {
    return useFetch(url, {
        onRequest({options}) {
            options.headers = options.headers || {}
            // @ts-ignore
            options.headers.sing = aesEncrypt({domain: 'itnavs', uid: getNanoid()})
        },
        ...params
    });
}

