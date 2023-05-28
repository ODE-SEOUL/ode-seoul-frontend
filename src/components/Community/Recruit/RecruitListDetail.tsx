import React, {useState, useEffect} from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from '../../common/Nav/Nav';
import styled from '@emotion/styled';
import Footer  from "../../common/Footer/Footer";
import Modal from "../../../modal/DefaultModal";
import useModal from '../../../hooks/useModal';
import Application from './Application';
import { getRecruitDetail } from '@/src/apis/recruitDetail';
import { userAtom } from '../../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';
import { postComments, deleteComments } from "@/src/apis/RecruitComment";
import { deleteApplication } from "@/src/apis/application";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMapLocationDot, faCalendarCheck, faPencil, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import LModal from '../../../modal/LoginError';


interface ApplicationData {
    id: number;
    member: {
      id: number;
      nickname: string;
      profileImage: string;
      locationCode: string | null;
      signupStatus: string;
    };
    createdAt: string;
  }

  interface CourseListDetailProps {
    applications: ApplicationData[];
    user: string;
  }

  interface Comment {
    id: number;
    user: {
      id: number;
      nickname: string;
      profileImage: string;
      locationCode: string | null;
      signupStatus: string;
    };
    content: string;
    createdAt: string;
  };

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

export default function CourseListDetail(){

    


    const [Rcontent, setRContent] = useState('');

    const user = useRecoilValue(userAtom);

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log(value);
        setRContent(value);
      };

    const CommentHandler = () => {
        if (!user){
            alert("로그인이 필요한 서비스입니다.");
            router.push('/');
        }else if(user){
            postComments(String(id), user.accessToken, Rcontent);
            setRContent("");
        }
       
    };

    const [applicationtoggle, setApplicationToggle] = useState(false);
    const handlerToggle = () => {
        setApplicationToggle(!applicationtoggle);
    };
    
    const { isShowing, toggle } = useModal();
    const handleClick = () => {
        toggle();
      };

    const router=useRouter();
    const {courseId,courseName, category,title,content,image,maxPeople,scheduledAt,
        currentPeople,progressStatus, createdAt, id  }=router.query;

       //detail
       const [result, setResult] = useState(null); // 결과를 저장할 상태

       useEffect(() => {
        // 데이터 가져오기
        getRecruitDetail(Number(id))
          .then((response) => {
            const result = response.result;
            setResult(result);
          })
          .catch((error) => {
            console.error(error);
          });
     }, [id, result]); 

      const { host, comments, applications } = result || {};

      const imageSrc = Array.isArray(image) ? image[0] : image;

      if (!result) {
        return null; // 데이터가 로딩 중인 경우에는 null을 반환하여 아무것도 렌더링하지 않음
      }
      const categoryLabel = getCategoryLabel(String(category));
        return(
        <>
        <Navbar />
            <Wrapper >
                <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                    <StyledCategory>{categoryLabel}</StyledCategory> 
                    <StyledCategory>{progressStatus}</StyledCategory> 
                    <StyledTitle>{title}</StyledTitle> 
                    <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                        <StyledSub className="col-lg-2"><FontAwesomeIcon icon={faMapLocationDot} className="mr-10" style={{color: 'rgb(171, 184, 104)' }}/>{courseName}</StyledSub>
                        <StyledSub className="col-lg-2"><FontAwesomeIcon icon={faCalendarCheck} className="mr-10" style={{color: 'rgb(171, 184, 104)' }}/>{scheduledAt}</StyledSub>
                        <StyledSub className="col-lg-2"><FontAwesomeIcon icon={faUserGroup} className="mr-10" style={{color: 'rgb(171, 184, 104)' }}/>참여 인원 : {currentPeople}/{maxPeople}</StyledSub>
                    </div>
                    <div className="col-lg-8">
                        <Img src={imageSrc} width="90%"></Img>
                        < StyledSubTitle>{content}</ StyledSubTitle>
                        <StyledSub className="col-lg-4">{createdAt}</StyledSub>
                        <Border></Border>
                        <StyledInput
                            type="text"
                            placeholder="댓글을 입력해주세요."
                            value={Rcontent}
                            onChange={handleCommentChange}
                        ></StyledInput>
                        <StyledLight onClick={CommentHandler}>등록하기</StyledLight>
                        <div>
                                        {comments.map((comment: Comment) => (
                                        <Container4 key={comment.id}>
                                            <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                                                <div className="col-lg-2" >
                                                    <PImg2 src={comment.user.profileImage} alt="Profile" />
                                                </div>
                                                <div className="col-lg-10">
                                                    <StyledTitle2>{comment.user.nickname} </StyledTitle2>
                                                    <StyledSub className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                                                        <div className="col-lg-12">{comment.content}</div>
                                                    </StyledSub>
                                                    <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                                                        <div className="col-lg-10"></div>
                                                        <Small className="col-lg-2">{comment.createdAt}</Small >
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                           
                                        </Container4>
                                        ))}
                                        </div>

                    </div>
                    <div className="col-lg-4">
                        <Container>
                            <div className="row mb-10" style={{display: 'flex', flexWrap: 'wrap'}}>
                                <div className="col-lg-4">
                                    <PImg src={host.profileImage}></PImg>
                                </div>
                                <div className="col-lg-8">
                                    <StyledTitle2>{host.nickname}</StyledTitle2>
                                    <StyledSub>모임장</StyledSub>
                                </div>
                            </div>
                            
                        <StyledButton onClick={handleClick}>신청하기</StyledButton>  
                        {isShowing && (
                        <Modal isShowing={isShowing} hide={toggle}>
                            <Application
                                title={String(title)}
                                date={String(scheduledAt)}
                                time={String(scheduledAt)}
                                dest={String(courseId)}
                                nickname={host.nickname} 
                                id={Number(id)}
                                />
                        </Modal>
                        )}
                        </Container>
                        <Container2 className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Box1 className="col-lg-7" >함께하는 사람</Box1>
                            <Angle onClick={handlerToggle} className="col-lg-5"
                              ><FontAwesomeIcon icon={faUserGroup} className="mr-10" style={{color: 'rgb(171, 184, 104)' }}/>{currentPeople}/{maxPeople}</Angle>
                            { applicationtoggle && 
                                <div>
                                        <div>
                                        {applications.map((application: ApplicationData) => (
                                        <Container3 key={application.id}>
                                            <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                                                <div className="col-lg-4" >
                                                    <PImg2 src={application.member.profileImage} alt="Profile" />
                                                </div>
                                                <div className="col-lg-8">
                                                    <StyledTitle2>{application.member.nickname} </StyledTitle2>
                                                    <StyledSub>{application.createdAt}</StyledSub>
                                                </div>
                                            </div>
                                           
                                        </Container3>
                                        ))}
                                        </div>
                                </div>
                            }
                        </Container2>

                    </div>
                </div>
            </Wrapper>
            
            <Footer/>
        </>

    );
} 

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 50px;
`;

const Border = styled.hr`
    margin: 40px 0px;
    width: 90%;
    border: 1px solid #ccc;
`;

const Small = styled.div`
    font-weight: 100;
    font-size: 8px;
    color: #ccc;
`;

const StyledCategory= styled.div`
    width: 100px;
    padding: 5px 10px;
    border-radius: 20px;
    height: 20px;
    border: 1px solid rgb(108, 128, 75);
    font-weight: 100;
    text-align: center;
    margin-bottom: 20px;
    margin-right: 20px;
    
`;

const StyledTitle= styled.div`
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
`;
const StyledTitle2= styled.div`
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    margin-bottom: 10px;
`;
const StyledSubTitle= styled.div`
    font-weight: 300;
    font-size: 20px;
    margin: 50px 0px;
    width: 90%;
`;

const StyledLight = styled.div`
    width: 90%;
    text-align: right;
    border-radius: 5px;
    padding: 10px;
    font-size: 10px;
    margin-bottom: 0.8rem;

`;


const StyledSub= styled.div`
    font-weight: 100;
    font-size: 15px;
    margin-bottom: 20px;
`;


const Img= styled.img`
    width: 90%;
    border-radius: 15px;
`;

const PImg= styled.img`
    width: 80px;
    height: 80px;
    background: rgb(171, 184, 104);
    border-radius: 100%;
    object-fit: cover;
`;
const PImg2= styled.img`
    width: 60px;
    height: 60px;
    background: rgb(171, 184, 104);
    border-radius: 100%;
    object-fit: cover;
    margin: 5px;
    margin-left: 20px;
`;
const Container = styled.div`
   
    padding: 40px;
    width: 300px;
    margin: auto;
    margin-bottom: 50px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Container2 = styled.div`
    
    width: 380px;
    margin: auto;
    height: 70px;
    background: #eee;
    border-radius: 8px 8px 0px 0px;
    border: 2px solid #eee;
`;

const Container3 = styled.div`
    
    width: 380px;
    margin: auto;
    height: 70px;
    background: #fff;
    border: 1px solid #ccc;
    border-top: none;
`;

const Container4 = styled.div`
    height: auto;
    padding: 0.2rem 0.5rem;
    width: 90%;
    border-bottom: 1px solid #ccc;
`;

const StyledButton = styled.div`
    padding: 10px;
    width: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    height: 40px;
    background: rgb(171, 184, 104);

    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;


const Box1 = styled.div`
    line-height: 70px;  
    padding-left: 30px;
`;

const Angle= styled.button`
    width: 60px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    border: none; 
    margin: auto;
    margin-top: 20px;
`;

const StyledInput = styled.input`
  padding: 1.3rem 0.5rem;
  
  border: 1px solid #ccc;
  width: 90%;
  border-radius: 5px;

  ::placeholder {
    color: #ccc;
    padding: 3px;
  }
  
`;