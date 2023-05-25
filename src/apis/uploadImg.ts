import { postAsync } from "./common";
import { PostUploadImgDataResponseDto } from "../types/uploadImg";

export const uploadImage = async (file: File, accessToken: string):Promise<string>  => {
  const formData = new FormData();
  formData.append("file", file);

  try{
    const response = await postAsync<PostUploadImgDataResponseDto, FormData>(
      "/api/images",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );
    return response.result.url;
  }catch(e){
    
  }

  
};
