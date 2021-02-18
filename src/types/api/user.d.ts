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
}
