import { useQuery } from 'react-query';
import { getCourseList } from '../../apis/courseList';


export const useCourseListQuery = () => {
  return useQuery('courseList', getCourseList, {
    select: (data) => data?.result,
    
   
    
  });
};


