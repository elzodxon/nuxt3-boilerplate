import { NitroFetchRequest } from 'nitropack'
import { FetchOptions } from 'ofetch'

export const useApi = (apiUrl?: string) => {
    const baseURL = apiUrl || (import.meta.env.VITE_API_BASE_URL as string)

    function $service(options?: FetchOptions) {
        return $fetch.create({
            ...options,
            baseURL,
            headers: {
                ...options?.headers,
            },
        })
    }

    function get<T = never>(
        endpoint: NitroFetchRequest,
        options?: FetchOptions
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            $service(options)(endpoint)
                .then((response: T | any) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error.response)
                })
        })
    }

    return {
        baseURL,
        get,
    }
}
