import useFetch from "~/utils/useFetch";
import { API_PROFIX } from "../constants";
import Axios from "../utils/fetch";

/**
 * 获取所有标签
 */
export const GetCategories = () =>
    Axios.get<API.BaseResponse<API.ARTICLE.Categories>>(
        `${API_PROFIX}/writing/categories`
    ).then(r => r?.data);

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
    ).then(r => r?.data);

/**
 * 花式获取文章详情
 * @param pid
 */
export const UseGetArticleById = (pid: number | string) =>
    useFetch<API.ARTICLE.ArticleInfo>({
        url: `${API_PROFIX}/writing/articles/${pid}`,
    });

/**
 * 花式获取每日一文文章v2
 * @param type
 * @param date
 */
export const UseGetMeiRiYiWen = (date?: string) => {
    let t = "random";
    if (date) {
        t = "day";
    }
    return useFetch<API.ARTICLE.MeiRiYiWenData>({
        url: `${API_PROFIX}/proxy/meiriyiwen/${t}/articles?date=${date}`,
    });
};

/**
 * 发表评论
 * @param req
 */
export const PostComment = (req: API.ARTICLE.PostCommentRequest) =>
    Axios.post<API.BaseResponse<null>>(
        `${API_PROFIX}/writing/articles/${req.PostID}/comments`,
        {
            Content: req.Content,
            AuthorUID: req.AuthorUID,
            ReplyCommentID: req.ReplyCommentID || 0,
            ReplyCommentUID: req.ReplyCommentUID || 0,
        }
    ).then(r => r?.data);

/**
 * 获取文章评论列表
 *
 * @param req
 */
export const GetCommentList = (req: API.ARTICLE.CommentQueryList) =>
    Axios.get<API.BaseResponse<{ Comments?: API.ARTICLE.CommentItem[] }>>(
        `${API_PROFIX}/writing/articles/${req.PostID}/comments`,
        {
            params: {
                Page: req.Page,
                Size: req.Size,
            },
        }
    ).then(r => r?.data);
