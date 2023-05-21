import { ResponseDto } from "./common";

export interface IGuGunListData{

    code: string;
    name: string;
    latitude: number;
    longitude: number;

}

export type GetGuGunListDto=ResponseDto<IGuGunListData[]>;