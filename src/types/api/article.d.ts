declare namespace API.Article {
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
}
