import { useQuery, QueryFunction } from 'react-query';
import { getCourseList } from '../../../apis/courseList';
import { GetCourseListDto, ICourseData } from '../../../types/courseList';
import styled from '@emotion/styled';
import { RecruitAtom, RecruitInfo } from '../../../states/RecruitAtom';
import { atom, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/dist/client/router';
import { IRecruitData } from '../../../types/recruits';

interface CourseListProps {
    location: string;
  }
  
  const CourseList = ({ location }: CourseListProps) => {
    const setRecruit = useSetRecoilState(RecruitAtom);
    const recruit = useRecoilValue(RecruitAtom);

   
  
    const handleItemClick = (itemId: number) => {
      setRecruit((prevRecruit) => ({
        ...prevRecruit,
        courseId: itemId,
      }));
    };
  
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
  
    return (
      <ListContainer>
        <Ul>
          {courseData.map((item, index) => (
            <StyledLi key={item.id}>
              <Li
                onClick={() => handleItemClick(item.id)}
                active={recruit?.courseId === item.id}
              >
                {item.name}
              </Li>
              <LiSmall className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
                <div className='col-lg-8'>{item.routeSummary}</div>
              </LiSmall>
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


const Li = styled.li<{ active?: boolean }>`
  list-style: none;
  font-weight: ${({ active }) => (active ? 500 : 100)};
  padding-bottom: 40px;
  color: ${({ active }) => (active ? 'var(--color-darkgreen)' : 'inherit')};
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
  