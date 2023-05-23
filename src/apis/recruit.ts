import { postAsync } from './common';
import { PostRecruitDatatDto } from '../types/recruits';
import { RecruitInfo } from '../recoil/RecruitAtom';

export const postRecruit = async (recruit: RecruitInfo, accessToken: string) => {
  try {
    const response = await postAsync<PostRecruitDatatDto, RecruitInfo>(
        'recruits', 
        recruit, 
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
