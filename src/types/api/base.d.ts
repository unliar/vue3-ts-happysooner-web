declare namespace API {
    export interface BaseResponse<T> {
        ErrorCode?: number;
        ErrorMsg: string;
        Result?: T;
    }
}
