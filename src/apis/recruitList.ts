import { getAsync } from './common';
import { GetRecruitListDto } from '../types/recruitList';

export const getRecruitList = async (Hid?: number, Aid?: number) => {
  let url = '/recruits';

  if (Hid && Aid) {
    // Hid와 Aid가 모두 존재할 경우
    url = `/recruits?host=${Hid}&member=${Aid}`;
  } else if (Hid) {
    // Hid만 존재할 경우
    url = `/recruits?host=${Hid}`;
  } else if (Aid) {
    // Aid만 존재할 경우
    url = `/recruits?member=${Aid}`;
  }

  const response = await getAsync<GetRecruitListDto, undefined>(url);
  return response;
};
