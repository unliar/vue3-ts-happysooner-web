import { onBeforeMount } from "@vue/runtime-core";

/**
 * 插入百度统计脚本
 * @param id
 */
export const useBaiduInit = (id: string) => {
    if (!id) {
        console.error("useBaiduInit 未检测到百度统计ID", id);
        return;
    }

    onBeforeMount(() => {
        if (document.getElementById(id)) {
            console.error("useBaiduInit 无需多次调用", id);
            return;
        }
        console.info("useBaiduInit 注册成功", id);
        const hm = document.createElement("script");
        hm.src = `https://hm.baidu.com/hm.js?${id}`;
        hm.id = id;
        var s = document.getElementsByTagName("script")[0];
        s?.parentNode?.insertBefore(hm, s);
    });
};

export default {
    useBaiduInit,
};
