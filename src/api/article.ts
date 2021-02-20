import { API_PROFIX } from "../constants";
import Axios from "../utils/fetch";

/**
 * 获取所有标签
 */
export const GetCategories = () =>
  Axios.get<API.BaseResponse<API.ARTICLE.Categories>>(
    `${API_PROFIX}/writing/categories`
  ).then((r) => r?.data);

/*
 * 获取列表文章
 * @param req
 */
export const GetArticles = (req: API.ARTICLE.GetArticleListRequest) =>
  Axios.get<API.BaseResponse<API.ARTICLE.ArticleInfoListResponse>>(
    `${API_PROFIX}/writing/articles`,
    {
      params: req,
    }
  ).then((r) => r?.data);

/**
 * 获取文章详情
 *
 * @param pid 文章ID
 */
export const GetArticleById = (pid: number | string) => {
  return Axios.get<API.BaseResponse<API.ARTICLE.ArticleInfo>>(
    `${API_PROFIX}/writing/articles/${pid}`
  );
};
