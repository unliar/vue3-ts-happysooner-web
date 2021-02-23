import { AxiosRequestConfig } from "axios";
import { reactive, watchEffect, toRefs } from "vue";
import Axios from "./fetch";

// 花里胡哨请求数据
const useFetch = <T = any>(config: AxiosRequestConfig) => {
    const r = reactive<{
        data: API.BaseResponse<T>;
        loading: boolean;
    }>({
        data: {},
        loading: false,
    });

    const fn = async (x: AxiosRequestConfig) => {
        r.loading = true;
        try {
            const data = await Axios(x).then(t => t?.data as typeof t.data);
            r.data = data;
        } catch (error) {
            const d: API.BaseResponse<any> = {
                ErrorCode: -1,
                ErrorMsg: error?.message ?? "系统错误",
            };
            r.data = d;
        }
        r.loading = false;
    };
    // fn will exec when config changed;
    watchEffect(() => {
        fn(config);
    });

    return toRefs(r);
};

export default useFetch;
