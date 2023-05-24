import { postAsync, deleteAsync } from './common';

interface Contents {
  content: string;
}
export const postComments = async (id: string, accessToken: string, contents: string) => {
  try {
    const comment: Contents = {
      content: contents,
    };

    const response = await postAsync<any, Contents>(
      `/api/recruits/${id}/comments`,
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

interface DeleteResponse {
  code: number;
  message: string;
  result: boolean;
}

// 댓글 삭제 API 호출 함수
export async function deleteComments(commentId: number, accessToken: string): Promise<DeleteResponse> {
  try {
    const response = await deleteAsync<DeleteResponse, void>(
      `/recruits/comments/${commentId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );

    if (response.result) {
      console.log('댓글이 삭제되었습니다.');
    } else {
      console.error('댓글 삭제 실패:', response.message);
    }

    return response;
  } catch (error) {
    console.error('댓글 삭제 중 오류가 발생했습니다.', error);
    throw error;
  }
}
