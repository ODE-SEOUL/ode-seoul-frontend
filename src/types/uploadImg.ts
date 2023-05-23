import { ResponseDto } from "./common";

export interface IUploadImgData{

  file: string;

}

export type PostUploadImgDataDto=ResponseDto<IUploadImgData[]>;