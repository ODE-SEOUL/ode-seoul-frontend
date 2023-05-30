import styled from "@emotion/styled";
import { useState,useEffect } from "react";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { UserInfo, userAtom } from "@/src/states/UserAtom";
import { uploadImage } from "@/src/apis/uploadImg";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ICourseReview } from "@/src/types/courseList";
import { postCourseReview } from "@/src/apis/courseList";
import { useRouter } from "next/router";

interface ICourseWritingProps{
    courseId:number;
    coursename:string;
}

export default function CourseReviewWriting({courseId,coursename}:ICourseWritingProps){
    const userInfo=useRecoilValue<UserInfo>(userAtom);
    const [imgFile, setImgFile] = useState<string>("");
    const [text,setText]=useState("");
    const imgRef = useRef(null);
    const router=useRouter();
    
    function SaveImgFile() {
        const file = imgRef.current.files[0];
        const res=uploadImage(file,userInfo.accessToken);
        res.then(result => {
            console.log(typeof(result));
            setImgFile(result); 
        }).catch(error => {
            console.error(error);
        });
        
        
    };
    const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const request:ICourseReview={
                courseId:courseId,
                score:0,
                content:text,
                image:imgFile
        };
        postCourseReview(userInfo.accessToken,request);
        router.push(`/course`);
        
    }
    const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{

        setText(event.target.value);
        console.log(text);

    }

    if(!userInfo){
        alert("로그인이 필요한 서비스입니다.");
        router.push('/');
    }
    return(<>
        <ReviewText size={30} weight={500} color="black">후기를 작성해보세요!</ReviewText>
        <div className="mt-30"></div>
        <PhotoUploadContainer>
            <PhotoUpload ref={imgRef} type="file" accept="image/*" onChange={SaveImgFile}></PhotoUpload>
        </PhotoUploadContainer>
        <div className="mt-40"></div>
        <form onSubmit={onSubmit}>
            <TextBox type="text" onChange={onChange} value={text} placeholder="후기를 작성해주세요!"/>
            <div className="mt-100"></div>
            
            <Center>
                <RegisterButton type="submit">등록하기</RegisterButton>
            </Center>
        </form>
        
    </>);
}

const ReviewText=styled.div<{size:number,weight:number,color:string}>`
    font-weight: ${props=>props.weight};
    font-size: ${props=>props.size}px;
    font-family: var(--font-secondary);
    color:${props=>props.color};
    
`;

const TextBox=styled.input`
    padding:10px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border:transparent;
    width:31.25rem;
    height:25rem;
`;

const PhotoUploadContainer=styled.div`
    border:1px solid gray;
    border-radius: 10px;
    width:31.25rem;
    height:400px;
`

const PhotoUpload=styled.input`
    
    /* border-style: none;
    width:100px;
    height: 200px; */
    background-repeat : no-repeat;
    //background-image: url('./assets/img/courseDetailPhoto.svg');
    
`;

const RegisterButton=styled.button`
    font-family: var(--font-secondary);
    font-size: 20;
    font-weight: 200;
    width: 250px;
    height: 60px;
    border:0;
    outline:0;
    background-color: var(--color-green);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: auto;
   
`

const Center=styled.div`

    width:31.25rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;

`