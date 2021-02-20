declare namespace API.USERS {
    export interface Role {
        Title: string;
        Description: string;
        RID: number;
    }

    export interface UserInfo {
        Id: number;
        LoginName: string;
        Nickname: string;
        Age: number;
        Gender: number;
        Avatar: string;
        Location: string;
        Profession: string;
        Status: number;
        Brief: string;
        Email: string;
        Roles: Role[];
    }

    export interface Role {
        Title: string;
        Description: string;
        RID: number;
    }

    export interface UserInfoWithToken {
        UserInfo: UserInfo;
        Token: string;
        TokenAvailableDays: number;
    }
    export interface Account {
        type: string; // 用于指明类型
        value: string; // 手机号 邮箱 登录名
    }

    export interface PostToken extends Account {
        password: string; // 密码
    }

    export interface PostUser extends Account {
        password: string; // 密码
        nickname: string; // 昵称
    }
}
