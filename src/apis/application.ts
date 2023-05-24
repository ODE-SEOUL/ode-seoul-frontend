import { postAsync, deleteAsync } from './common';

//post comment
export const postApplication = async (id: number, accessToken: string) => {
  try {
    const response = await postAsync<any, null>(
      `/recruits/${id}/applications`,
      null,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );
    console.log('응답:', response);
    return response;

    // 요청 성공 시 처리할 내용
  } catch (error) {
    console.error('에러:', error);
    // 요청 실패 시 처리할 내용
  }
};

//delete comment
interface DeleteResponse {
    code: number;
    message: string;
    result: boolean;
  }
  
  // 댓글 삭제 API 호출 함수
  export async function deleteApplication(ApplicationId: number, accessToken: string): Promise<DeleteResponse> {
    try {
      const response = await deleteAsync<DeleteResponse, void>(
        `/recruits/${ApplicationId}/applications/me`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        }
      );
  
      if (response.result) {
        console.log('모집 참여가 취소되었습니다.');
      } else {
        console.error('모집 취소 실패:', response.message);
      }
  
      return response;
    } catch (error) {
      console.error('모집 취소 중 오류가 발생했습니다.', error);
      throw error;
    }
  }
  