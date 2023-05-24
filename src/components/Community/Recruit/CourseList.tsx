import { useQuery, QueryFunction } from 'react-query';
import { getCourseList } from '../../../apis/courseList';
import { GetCourseListDto, ICourseData } from '../../../types/courseList';
import styled from '@emotion/styled';

interface CourseListProps {
  location: string;
}

const CourseList = ({ location }: CourseListProps) => {
    const queryFunction: QueryFunction<GetCourseListDto> = async () => {
      const response = await getCourseList();
      return response;
    };
  
    const { isLoading, data: courseData } = useQuery('courseList', queryFunction, {
      select: (data) => {
        if (Array.isArray(data?.result)) {
          const filteredItems = data.result.filter((item) => item?.gugunSummary === location);
          return filteredItems;
        }
        return [];
      },
    });

    if (!courseData) {
        // courseData가 undefined인 경우 처리
        return <div></div>;
      }

    console.log(courseData);

    return (
        <ListContainer>
          <Ul>
            {courseData.map((item, index) => (
              <StyledLi key={item.id}>
                <Li>{item.name}</Li>
                <LiSmall>{item.routeSummary}</LiSmall>
            </StyledLi>
            ))}
          </Ul>
        </ListContainer>
      );
  };
  
  export default CourseList;

  const ListContainer = styled.div`
  background-color: #fff;
  overflow: scroll;
  height: 300px;
 
`;

const Li = styled.li`
  list-style: none;
  font-weight: 100;
  padding-bottom: 40px;
  
`;
const LiSmall = styled.div`
    font-weight: 100;
    font-size : 0.8rem;
`;
const StyledLi = styled.div`
    width: 100%;
    text-align: left;
    height: 80px;
    padding: 10px;
    border-bottom :  1px solid #eee;
`
const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #666666;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;

  
 
  
`;