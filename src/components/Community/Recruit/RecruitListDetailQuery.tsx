import { useQuery } from 'react-query';
import { getRecruitDetail } from '../../../apis/recruitDetail';

export const useRecruitListQuery = (id: number) => {
  return useQuery(['RecruitDetail', id], () => getRecruitDetail(Number(id)), {
    select: (data) => data?.result,
  });
};



