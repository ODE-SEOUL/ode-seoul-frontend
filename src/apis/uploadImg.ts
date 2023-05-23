import { postAsync } from "./common";

export const uploadImage = async (file: File, accessToken: string): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await postAsync<any, FormData>(
      "/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    // Handle error
  }
};
