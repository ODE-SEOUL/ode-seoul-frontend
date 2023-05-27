import { ResponseDto } from "./common";

export interface IGuGunListData{

    code: string;
    message: string;
    result: [];

}

export type GetGuGunListDto=ResponseDto<IGuGunListData[]>;