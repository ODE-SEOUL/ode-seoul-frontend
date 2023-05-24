import React, {useState, useEffect} from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from '../../common/Nav/Nav';
import styled from '@emotion/styled';
import Footer  from "../../common/Footer/Footer";
import Modal from "../../../modal/DefaultModal";
import useModal from '../../../hooks/useModal';
import Application from './Application';
import { getReceuitDetail } from '@/src/apis/recruitDetail';
import { userAtom } from '../../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';
import { postComments } from "@/src/apis/RecruitComment";

interface Application {
    id: number;
    member: {
      id: number;
      nickname: string;
      profileImage: string;
      locationCode: string | null;
      signupStatus: string;
    };
    createdAt: string;
  };

  interface Props {
    applications: Application[];
  };

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


       
export default function CourseListDetail(){

    const [Rcontent, setRContent] = useState('');

    const user = useRecoilValue(userAtom);

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log(value);
        setRContent(value);
      };

    const CommentHandler = () => {
        console.log(id, user.accessToken, Rcontent);
        postComments(id, user.accessToken, Rcontent);
        setRContent("");
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
    const {courseId,category,title,content,image,maxPeople,scheduledAt,
        currentPeople,progressStatus, createdAt, id  }=router.query;

       //detail
       const [result, setResult] = useState(null); // 결과를 저장할 상태

       useEffect(() => {
        // 데이터 가져오기
        getReceuitDetail(id)
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

        return(
        <>
            <Navbar/>
            <Wrapper >
                <div className="row">
                    <StyledCategory>{category}</StyledCategory> 
                    <StyledCategory>{progressStatus}</StyledCategory> 
                    <StyledTitle>{title}</StyledTitle> 
                    <div className="row" >
                        <StyledSub className="col-lg-1">{courseId}</StyledSub>
                        <StyledSub className="col-lg-2">{scheduledAt}</StyledSub>
                        <StyledSub className="col-lg-1">{currentPeople}/{maxPeople}</StyledSub>
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
                                            <div className="row" >
                                                <div className="col-lg-2" >
                                                    <PImg2 src={comment.user.profileImage} alt="Profile" />
                                                </div>
                                                <div className="col-lg-10">
                                                    <StyledTitle2>{comment.user.nickname} </StyledTitle2>
                                                    <StyledSub className="row">
                                                        <div className="col-lg-12">{comment.content}</div>
                                                    </StyledSub>
                                                    <div className="row">
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
                            <div className="row mb-150">
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
                                user={String(host.nickname)}
                                id={Number(id)}
                                />
                        </Modal>
                        )}
                        </Container>
                        <Container2 className="row">
                            <Box1 className="col-lg-8" >함께하는 사람</Box1>
                            <Angle onClick={handlerToggle} className="col-lg-4"
                              >{currentPeople}/{maxPeople}</Angle>
                            { applicationtoggle && 
                                <div>
                                        <div>
                                        {applications.map((application: Application) => (
                                        <Container3 key={application.id}>
                                            <div className="row" >
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
    border: 1px solid var(--color-darkgreen);
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
    background: var(--color-green);
    border-radius: 100%;
    object-fit: cover;
`;
const PImg2= styled.img`
    width: 60px;
    height: 60px;
    background: var(--color-green);
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
    background: var(--color-green);

    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;


const Box1 = styled.div`
    line-height: 70px;  
    padding-left: 30px;
`;

const Angle= styled.button`
    width: 30px;
    height: 30px;
    background: var(--color-green);
    border-radius: 100%;
    margin: 20px;
    border: none; 
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