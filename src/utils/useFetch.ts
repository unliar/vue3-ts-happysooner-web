import { AxiosRequestConfig } from "axios";
import { reactive, watchEffect, toRefs } from "vue";
import Axios from "./fetch";

// 花里胡哨请求数据
const useFetch = <T extends Object>(config: AxiosRequestConfig) => {
    const r = reactive<{
        data: T;
        loading: boolean;
        err?: Error;
    }>({
        data: undefined as any,
        loading: false,
        err: undefined,
    });

    const fn = async (x: AxiosRequestConfig) => {
        r.loading = true;
        try {
            const data = await Axios(x).then(t => t?.data as typeof t.data);
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

    return {
        fn,
        ...toRefs(r),
    };
};

export default useFetch;
