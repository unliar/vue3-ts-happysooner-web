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
 * 获取文章详情
 *
 * @param pid 文章ID
 */
export const GetArticleById = async (pid: number | string) => {
    return Axios.get<API.BaseResponse<API.ARTICLE.ArticleInfo>>(
        `${API_PROFIX}/writing/articles/${pid}`
    ).then(r => r?.data);
};

/**
 * 获取每日一文文章
 * @param type random or day
 * @param date 20180811
 */
export const GetMeiRiYiWen = async (type: string, date?: string) => {
    return Axios.get<API.BaseResponse<API.ARTICLE.MeiRiYiWenData>>(
        `${API_PROFIX}/proxy/meiriyiwen/${type}/articles?date=${date}`
    ).then(r => r?.data);
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
