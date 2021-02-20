import axios from 'axios'
import { HAPPY_AUTH_TOKEN } from '../constants'
import { GetTokenCookies } from './cookie'

const Axios = axios.create({
    baseURL: (import.meta.env.VITE_BASE_HOST as string) || '/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

Axios.interceptors.request.use(
    (req) => {
        req.headers[HAPPY_AUTH_TOKEN] = GetTokenCookies()
        return req
    },
    (err) => ({
        ErrorCode: -1,
        ErrorMsg: JSON.stringify(err),
        Result: null,
    })
)

Axios.interceptors.response.use(
    (res) => {
        const url = res.config.url
        if (res?.data?.ErrorCode === 403) {
            console.error('权限错误❌')
            console.error('请求接口: ', url)
            console.error('错误信息: ', res?.data?.ErrorMsg)
        } else if (!!res?.data?.ErrorCode) {
            console.error('其他错误❌')
            console.error('请求接口: ', url)
            console.error('错误数据', JSON.stringify(res?.data ?? '{}'))
        }
        return res
    },
    (err: Error) => {
        console.error('系统错误❌', err)
        return Promise.resolve({
            data: {
                ErrorCode: -1,
                ErrorMsg: err.message,
                Result: null,
            },
        })
    }
)

export default Axios
