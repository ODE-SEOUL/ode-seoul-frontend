import React, { useState, useEffect } from 'react';
import Nav from '../../common/Nav/Nav';
import Title from './Title';
import styled from '@emotion/styled';
import { getGugunList } from '../../../apis/guguns';
import CourseList from './CourseList';
import { AiOutlineSearch } from 'react-icons/ai';
import CommunityCategory from '../CommunityCategory';
import Footer from '../../common/Footer/Footer';
import UploadImg from './UploadImg';
import { atom, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { RecruitAtom, RecruitInfo } from '../../../states/RecruitAtom';
import { uploadImage } from '../../../apis/uploadImg';
import { userAtom } from '../../../states/UserAtom';
import axios from 'axios';
import { postRecruit } from '../../../apis/recruit';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import Modal from '../../../modal/LoginError';
import useModal from '@/src/hooks/useModal';
import { useRouter } from 'next/router';
import Checkbox from './Checkbox';
import { useCourseListQuery } from '../../CourseList/courseListQuery';
import { useRef } from "react";

const Recruit = () => {

  

  const router = useRouter();
  //캘린더
    const [value, onChange] = useState(new Date());
    const [showRecoil, setShowRecoil] = useState(false); // Recoil 컴포넌트 보여줄지 여부
    const user = useRecoilValue(userAtom);
   
    // console.log(user);
    const [selectedFile, setSelectedFile] = useState(null);
    const setRecruitImg = useSetRecoilState(RecruitAtom);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.target.files[0]);
    };
    
    
    const HandlerRecruit = () => {
      if (!user) {
        alert("로그인이 필요한 서비스입니다.");
        router.push('/');
      } else {
        postRecruit(recruit, user.accessToken)
        .then((res: any) => {
          console.log(res);
          if (res.code === 200) {
            alert('신청되었습니다.')
            router.push(`/community`);
            } else{
            alert('성공적으로 업데이트 되지 않았습니다. 다시 시도해주세요.')
          }
        });
      }
  
      if (!isChecked) {
        alert("주의사항을 확인하셔야 신청가능합니다.");
      } else {
        setShowRecoil(true); // OK 버튼이 클릭되면 상태 변경
      }
    };

    const imgRef = useRef(null);
    function SaveImgFile() {
      const file = imgRef.current.files[0];
      const res=uploadImage(file,user.accessToken);
      res.then(result => {
          console.log('여기', typeof(result));
          setRecruitImg((prevRecruit) => ({
            ...prevRecruit,
            image: result,
          }))
      }).catch(error => {
          console.error(error);
      });
      
      
  };

    const Noti = 
        "자유게시판에서는 주제와 무관히 자유롭게 이야기를 나눌 수 있습니다. \n 자유게시판의 게시글 및 댓글은 로그인을 해야만 작성 수 있습니다.\n 아직 가입하지 않으셨나요? 지금 바로 회원가입하세요!(우상단 버튼)\n자유게시판에서 모든 게시물 및 댓글의 작성자는 작성자의 닉네임으로 표시됩니다.\n 작성자를 익명으로 하고 싶다면 ‘익명게시판’을 이용해 보세요!\n 홍보성 게시글이나 제제가 필요한 게시물 및 댓글은 관리자에 의해 삭제될 수 있습니다.\n 홍보성 게시글은 ‘정보게시판’을 이용 바랍니다. "
      
  //구군 get 요청
  const [names, setNames] = useState([]);
  useEffect(() => {
    getGugunList()
      .then((response) => {
        const result = response.result;
        const names = result.map((item) => item.name);
        setNames(names);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [location, setLocation] = useState('');
  const handleLocationSelect = (name: string) => {
    setLocation(name);
  };

  //상태
  const [state, setState] = useState<RecruitInfo>({
    courseId: 0,
    category: 'COM_ANIMAL',
    title: '',
    content: '',
    image: 'https://ik.imagekit.io/njw1204/tr:w-720,h-720,c-at_max/ode-seoul/20230524012509_BTlTBranq',
    maxPeople: null,
    scheduledAt: '',
  });

  const [recruit, setRecruit] = useRecoilState(RecruitAtom);
  const [isOverLimit, setIsOverLimit]= useState(false);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const truncatedValue = value.slice(0, 15); // 15자로 제한
    if(value.length > 15){
      setIsOverLimit(true);
    } else{
      setIsOverLimit(false);
    }
      
    
    setState((prevState) => ({
      ...prevState,
      title: truncatedValue,
    }));
  };
  
  const [isCalender, setIsCalender] = useState(false);
  const handleClick = (e:any) =>{
    setIsCalender(true);
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      content: value,
    }));
  };

   //날짜, 시간 선택
   const convertTo24HourFormat = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    let formattedHours = parseInt(hours);
  
    if (!isAM && formattedHours < 12) {
      formattedHours += 12;
    }
  
    if (isAM && formattedHours === 12) {
      formattedHours = 0;
    }
  
    const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes}`;
    return formattedTime;
  };
  
    
    const [selectedDate, setSelectedDate] = useState('');
    const [schedule, setSchedule] = useState(['', '']);
    
    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedTime(e.target.value);
      const timeString = e.target.value;
      const dateString = selectedDate;
      const scheduleString = `${dateString}T${timeString}`;
      setSchedule([dateString, timeString]);
      setState((prevState) => ({
        ...prevState,
        scheduledAt: scheduleString,
      }));
    
      const formattedTime = isAM ? timeString : convertTo24HourFormat(timeString);
      const formattedDateTime = `${selectedDate}T${formattedTime}:00`;
      handleScheduledAtChange(new Date(formattedDateTime));
    };
    
    const handleScheduledAtChange = (value: any) => {
      const dateString = value.toLocaleDateString("ko", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const timeString = selectedTime;
      const scheduleString = `${dateString}T${timeString}:00`;
      const date = scheduleString.replace(/\./g, '-');
      const formattedDate = date.replace(/\s/g, '').replace('-T', 'T');
      console.log(formattedDate); 
    
      setSelectedDate(dateString); // selectedDate 상태 업데이트
      setState((prevState) => ({
        ...prevState,
        scheduledAt: formattedDate,
      }));
    
      setIsCalender(false);
    };
  


  const handleMaxPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      maxPeople: parseInt(value),
    }));
  };

  type RecruitData = {
  [key: string]: any;
};

//courseList
const { data: courseData } = useCourseListQuery();
//courseId를 courseName으로 바꾸는 함수
const printCourseName = (courseId: number) => {
  const matchingCourse = courseData?.find((course) => course.id === courseId);
  if (matchingCourse) {
    return matchingCourse.name;
  } else {
    console.log(`Course with id ${courseId} not found.`);
  }
};

//formatDate
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  return `${year}년 ${month}월 ${day}일`;
}
enum Category {
  COM_ANIMAL = '#반려동물',
  COM_HOUSE = '#주부',
  COM_OFFICE = '#직장인',
  COM_NEIGHBOR = '#이웃주민',
  COM_EXERCISE = '#운동',
  COM_PHOTO = '#사진',
  COM_EXPER = '#체험',
}
const getCategoryLabel = (category: string): string | undefined => {
  switch (category) {
    case 'COM_ANIMAL':
      return Category.COM_ANIMAL;
    case 'COM_HOUSE':
      return Category.COM_HOUSE;
    case 'COM_OFFICE':
      return Category.COM_OFFICE;
    case 'COM_NEIGHBOR':
      return Category.COM_NEIGHBOR;
    case 'COM_EXERCISE':
      return Category.COM_EXERCISE;
    case 'COM_PHOTO':
      return Category.COM_PHOTO;
    case 'COM_EXPER':
      return Category.COM_EXPER;
    default:
      return undefined;
  }
};


const ShowRecoil: React.FC<{ recruit: RecruitData }> = ({ recruit }) => {

  
  if (!recruit) {
  return null; // recruit 값이 유효하지 않을 때 null 또는 다른 처리를 하세요.
  }
  
  const { courseId, category, title, content, image, maxPeople, scheduledAt } = recruit;
  const course = printCourseName(courseId)
  const formattedDate = formatDate(scheduledAt)
  const cate = getCategoryLabel(category)
  return (
   
  <>
  <StyledTitle>약속 정보가 맞다면 등록해주세요!</StyledTitle>
  <Card>
  <div>
  <LLi>생태문화길: {course}</LLi>
  <LLi>카테고리: {cate}</LLi>
  <LLi>제목: {title}</LLi>
  <LLi>내용: {content}</LLi>
  <LLi>최대 인원: {maxPeople}</LLi>
  <LLi>약속 날짜: {formattedDate}</LLi>
  </div>
  </Card>
  </>
  );
  };


  useEffect(() => {
    setRecruit(state); // Recoil 상태 업데이트
  }, [state, setRecruit]);


  //시간 선택
  const [selectedTime, setSelectedTime] = useState('00:00');
  const [isAM, setIsAM] = useState(true);

  const toggleAMPM = () => {
    setIsAM(!isAM);
  };

  const [isChecked, setIsChecked] = useState(false); //주의사항

  return (
    <>
      <Nav />
        <Wrapper >
            {/*  */}
            <Title text='제목을 입력해주세요' /> 
            <StyledInput
            type='text'
            value={state.title}
            onChange={handleTitleChange}
            placeholder='같이 출사하러 가요!'
            />
            <CharacterCount1>
              {isOverLimit && <>제목 글자수는 15글자까지 입력할 수 있어요.</>}
            </CharacterCount1>
            <CharacterCount2>
              {state.title.length}/15
            </CharacterCount2>
            <Title text='내용을 입력해주세요' /> 
            <StyledInput
            type='text'
            value={state.content}
            onChange={handleContentChange}
            placeholder='서로의 모델과 작가가 되어줄 사람 구합니다!'
            />
            <Title text='생태 문화길을 선택해주세요' />
            <Container className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
                <div className='col-lg-4 col-sm-12'>
                    < ListContainer  >
                        <Ul>
                            {names.map((name, index) => (
                            <Li key={index} onClick={() => handleLocationSelect(name)}>
                                {name}
                            </Li>
                            ))}
                        </Ul>
                    </ListContainer >
                </div>
                <div className='col-lg-8 col-sm-12'>
                    <CourseList location={location} />
                </div>
            </Container>
            <Title text='약속 정보를 입력해주세요' />
            
             
              
                <SearchInput>
                    <Input
                          type="text"
                          onClick={handleClick}
                          onChange={handleScheduledAtChange}
                          placeholder="약속 날짜를 정해주세요"
                          value={state.scheduledAt}
                    />
                    <SearchIcon />
                </SearchInput>

               {isCalender &&
               <>
                <Container>
                  <Calendar onChange={handleScheduledAtChange} value={value} />
                </Container>
                <div>
                  
                </div>
               </>
              
               }

              
              <SearchInput>
                <Btn onClick={toggleAMPM}>{isAM ? 'AM' : 'PM'}</Btn>
                <Input
                type="text"
                value={selectedTime}
                onChange={handleTimeChange}
                placeholder="시간을 입력해주세요 (HH:MM)">
                </Input>
                
              </SearchInput>
               


               
                <SearchInput>
                    <Input
                        type="number"
                        value={state.maxPeople}
                        onChange={handleMaxPeopleChange}
                        placeholder="최대 인원을 정해주세요"
                    />
                    <SearchIcon />
                </SearchInput>

            <Title text='카테고리를 선택해주세요' />
                <CommunityCategory />
            <Title text='배경 사진을 선택해주세요' />
                <UploadImg text='img' />
                <Container2>
                    <input type="file" ref={imgRef} accept="image/*" onChange={SaveImgFile} />
                    {/* <button onClick={SaveImgFile}>Upload</button> */}
                </Container2>

            <Title text='주의사항을 확인해주세요' />
                <SmallText className="pb-300">
                    {Noti}
                </SmallText>

                
                <Checkbox
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  label="주의사항 확인했어요"
                />

                {/* isChecked 값이 true일 때만 ShowRecoil 컴포넌트를 보여줌 */}
                {isChecked && <ShowRecoil recruit={recruit} />}

            <Btn onClick={HandlerRecruit}>등록하기</Btn>

        </Wrapper>
    <Footer/>
        
      
    </>
  );
};

export default Recruit;

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 50px;
`;

const Btn = styled.button`
    width:10%;
    padding: 0.5rem 0.3rem;
    margin: 0rem 0.2rem;
    border:  1px solid #eee;
    border-radius: 5px;
`;

// const Checkbox = styled.div`
// width:10%;
//     padding: 0.5rem 0.3rem;
//     margin: 0rem 0.2rem;
//     border:  1px solid #eee;
//     border-radius: 5px;

// `

const StyledInput = styled.input`
  padding: 0.8rem 0rem;
  margin-bottom: 0.5rem;
  border: none;
  border-bottom:  1px solid #999999;
  width: 100%;

  ::placeholder {
    color: #ccc;
    padding: 3px;
  }
  
`;

const Container = styled.div`
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    font-family: var(--font-secondary);
    font-weight: 200;
    @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

`;

const Card = styled.div`
border: 1px solid #eee;
padding: 10px;
margin: 20px 0px;
border-radius: 15px;
width: 300px;
`;

const LLi = styled.li`
  list-style: none;
  font-weight: 100;
  border-bottom :  1px solid #eee;
  width: 100%;
  line-height: 50px;
 
`;

const StyledTitle = styled.div`
    font-size: 18px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    padding: 20px 0px 0px 0px ;
    color: rgb(108, 128, 75);
    font-weight: 300;

`;


const CharacterCount1 = styled.div`
font-family: var(--font-secondary);
font-weight: 100;
font-size: 12px;
    color: #bbb;
    display: inline;
`;

const CharacterCount2 = styled.div`
float: right;
font-family: var(--font-secondary);
font-weight: 100;
font-size: 12px;
    color: #bbb;
    display: inline;
`;

const Container2 = styled.div`
width: 70%;
margin: auto;
`;

const SmallText = styled.div`
    font-size: 10px;
    color: #ccc;
    white-space: pre-line;
    margin-bottom: 100px;
`;

const ListContainer = styled.div`
background-color: #fff;
overflow: scroll;
height: 300px;

`;

const Li = styled.li`
  list-style: none;
  font-weight: 100;
  border-bottom :  1px solid #eee;
  width: 100%;
  text-align: center;
  line-height: 50px;
 
`;



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

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0rem;
  border:  1px solid #eee;
  border-radius: 5px;
  width: 100%;
  margin: 20px 0px;

`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
  
  ::placeholder {
    color: #ccc;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin-right: 0.5rem;
  color: #ccc;
`;

