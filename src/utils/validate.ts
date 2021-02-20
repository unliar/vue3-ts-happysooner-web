export const ValidateLoginNameRules = (text: string) => {
    if (!text.match(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/)) {
        return "参数必须为字母开头的5-16位数字和字母组合";
    }
    return "";
};
