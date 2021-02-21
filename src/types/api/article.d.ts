declare namespace API.ARTICLE {
    // 话题列表
    export interface Categories {
        List: Category[];
    }
    // 话题item
    export interface Category {
        Id: number;
        CN: string;
        EN: string;
    }
    // 获取文章列表参数
    export interface GetArticleListRequest {
        LimitArticleID?: number; // 列表最后一个id
        Page?: number; // 页码
        Size?: number; // 数量
        CategoryID?: number; // 主题id
        OrderType?: "desc" | "asc"; // 排序顺序
        UID?: number;
    }
    // 文章列表
    export interface ArticleInfoListResponse {
        Articles?: ArticleInfo[];
    }
    // 文章item
    export interface ArticleInfo {
        Id: number; // id
        Title: string; // 标题
        Summary: string; // 摘要
        CreatedAt: number; // 创建时间
        Status: number; // 状态
        Content: string; // 内容
        Category: Category; // 分类
        AuthorInfo: AuthorInfo;
        Navigation?: Navigation;
    }
    export interface AuthorInfo {
        Avatar: string;
        Nickname: string;
        UID: number;
    }
    export interface Navigation {
        Prev?: ArticleInfo;
        Next?: ArticleInfo;
    }
    export interface MeiRiYiWenData {
        content: string;
        author: string;
        title: string;
        digest: string;
        wx: number;
        date: Dates;
    }

    export interface Dates {
        curr: string;
        next: string;
        prev: string;
    }
    export interface PostCommentRequest {
        PostID: number; // 文章ID
        Content: string; // 评论
        AuthorUID: number; // 作者ID
        ReplyCommentID?: number; // 回复评论ID
        ReplyCommentUID?: number; // 回复评论作者ID
    }
    // 评论item
    export interface CommentItem {
        Content: string;
        Id: number;
        CreatedAt: number;
        CommentUserInfo: {
            Nickname: string;
            UID: number;
            Avatar: string;
            Roles: Role[];
        };
    }

    export interface Role {
        Title: string;
        Description: string;
        RID: number;
    }

    export interface CommentQueryList {
        Page: number;
        Size: number;
        PostID: number;
    }
}
