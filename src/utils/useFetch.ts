import { AxiosRequestConfig } from "axios";
import { reactive, watchEffect } from "vue";
import Axios from "./fetch";

// 花里胡哨请求数据
const useFetch = <T = any>(config: AxiosRequestConfig) => {
    const r = reactive<{
        data?: T;
        loading: boolean;
        err?: Error;
    }>({
        data: undefined,
        loading: false,
        err: undefined,
    });

    const fn = async (x: AxiosRequestConfig) => {
        r.loading = true;
        try {
            const data = await Axios(x).then(t => t?.data as typeof r.data);
            r.data = data;
        } catch (error) {
            r.err = error;
        }
        r.loading = false;
    };
    // fn will exec when config changed;
    watchEffect(() => {
        fn(config);
    });

    return r;
};

export default useFetch;
