import { ResponseDto } from "./common";

export interface IUserListData{

    id:number;
    nickname:string[];
    profileImage: string;
    locationCode: string;
    signupStatus: string;

}

export type GetUserListDto=ResponseDto<IUserListData[]>;