import { ResponseDto } from "./common";

export interface IUserInfoData{

    id: number,
    nickname: "string",
    profileImage: "string",
    locationCode: null,
    signupStatus:"string",

}

export type GetUserInfoDto=ResponseDto<IUserInfoData[]>;