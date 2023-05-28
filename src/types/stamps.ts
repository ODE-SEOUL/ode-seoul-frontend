import { ResponseDto } from "./common";

export interface IStampData{

    code: string;
    message: string;
    result: ResultData[];

}

export interface ResultData{

    courseId: number,
    createdAt: string;

}

export type GetIStampDataDto=ResponseDto<IStampData>;