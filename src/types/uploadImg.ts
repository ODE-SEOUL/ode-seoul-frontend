import { ResponseDto } from "./common";

export interface IUploadImgData{

  file: string;

}

export interface IUploadImgRequestData{
  url:string
}

export type PostUploadImgDataDto=ResponseDto<IUploadImgData[]>;
export type PostUploadImgDataResponseDto=ResponseDto<IUploadImgRequestData>;