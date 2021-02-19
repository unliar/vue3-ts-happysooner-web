import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export const FromNow = (unixTime: number) => dayjs.unix(unixTime).fromNow();

export const DefaultFormat = (unixTime?: number) => {
  const arg = unixTime ? unixTime : ~~(+new Date() / 1000);
  return dayjs.unix(arg).format("YYYY-MM-DD HH:mm");
};
export default dayjs;
