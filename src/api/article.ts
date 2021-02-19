import { API_PROFIX } from "../constants";
import Axios from "../utils/fetch";

/**
 * 获取所有标签
 */
export const GetCategories = () =>
  Axios.get<API.BaseResponse<API.Article.Categories>>(
    `${API_PROFIX}/writing/categories`
  ).then((r) => r?.data);
