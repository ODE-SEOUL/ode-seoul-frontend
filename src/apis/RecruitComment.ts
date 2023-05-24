import { postAsync } from './common';

interface Contents {
  content: string;
}
export const postComments = async (id: string, accessToken: string, contents: string) => {
  try {
    const comment: Contents = {
      content: contents,
    };

    const response = await postAsync<any, Contents>(
      `/recruits/${id}/comments`,
      comment,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );
    console.log('응답:', response);
    return response;
  } catch (error) {
    console.error('에러:', error);
  }
};


