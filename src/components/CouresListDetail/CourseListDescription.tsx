import React from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from '../common/Nav/Nav';
import styled from "@emotion/styled";
import DistanceIcon from '../../../public/assets/img/courseDetailDistance.svg';
import TimeIcon from '../../../public/assets/img/courseDetailTime.svg';
import SubwayIcon from '../../../public/assets/img/courseDetailSubway.svg';
import AccessIcon from '../../../public/assets/img/courseDetailAccess.svg';
import { useState } from "react";

interface ICourseDetailProps{
    name:string;
    distance:string;
    time:string;
    description:string;
    subway:string;
    accessway:string;
    image:string;
    setReviewClick:React.Dispatch<React.SetStateAction<boolean>>;
    setCommunityClick:React.Dispatch<React.SetStateAction<boolean>>;

}

export default function CourseListDescription({name,distance,time,description,subway,accessway,image,setReviewClick,setCommunityClick}:ICourseDetailProps){
    
    const router=useRouter();
    
    const onReviewClick=()=>{
        console.log("click");
        setReviewClick(true);
        

    }
    
    const onRecruitClick=()=>{
        setCommunityClick(true);
        router.push({
            pathname:"/community/recruit"
        });
        setReviewClick(false);
    }

    return(
        <>      
                <div className="mt-70" ></div>
                <CoureMainImg imageUrl={image}/>
           
                <DescriptionTextContainer>
                    
                    <div className="mt-60" ></div>
                    <CourseDetailTitle>{name}</CourseDetailTitle>
                    <div className="mt-30" ></div>
                    <CourseDetailSubContainer>
                        <DistanceIcon/>
                        <Spacing10/>
                        <CourseDetailText>{distance}</CourseDetailText>
                        <Spacing20/>
                        <TimeIcon/>
                        <Spacing10/>
                        <CourseDetailText>{time}</CourseDetailText>
                        <Spacing20/>
                        <SubwayIcon/>
                        <Spacing10/>
                        <CourseDetailText>{subway}</CourseDetailText>
                        
                    </CourseDetailSubContainer>
                    <div className="mt-15" ></div>
                    <CourseDetailSubContainer>
                        <AccessIcon/>
                        <Spacing10/>
                        <CourseDetailText>{accessway}</CourseDetailText>
                    </CourseDetailSubContainer>
                    <div className="mt-30" ></div>
                    <CourseDetailDescriptionContainer>
                        <CourseDetailDescriptionText>{description}</CourseDetailDescriptionText>
                    </CourseDetailDescriptionContainer>
                    <div className="mt-35" ></div>
                </DescriptionTextContainer>
                <DescriptionButtonContainer>
                    <ButtonBox onClick={onRecruitClick}>
                        <ButtonText>
                            같이 갈 사람 모집하기
                        </ButtonText>
                    </ButtonBox>
                    <ButtonBox onClick={onReviewClick}>
                        <ButtonText>
                            나도 후기 작성하기
                        </ButtonText>
                    </ButtonBox>
                </DescriptionButtonContainer>
                <div className="mt-60"></div>

                <BorderLine/>
                <div className="mt-150"></div>
                
            
                
            

        </>

    );
}
type CourseMainImageProps={
    imageUrl:string;
};

const DescriptionTextContainer=styled.div`
    width:85%;
`;

const DescriptionButtonContainer=styled.div`
    display: flex;
    
`;


const CoureMainImg=styled.div`
    width: 85%;
    height:28rem;
    background-size: cover;
    background-image:url(${(props:CourseMainImageProps)=>props.imageUrl});
    border-radius: 10px;

`;

const CourseDetailTitle=styled.div`
    font-weight: 500;
    font-size: 30px;
    font-family: var(--font-secondary);
    
`;

const CourseDetailSubContainer=styled.div`
    display: flex;
    white-space: pre-wrap;
`;

const CourseDetailText=styled.div`
    font-weight: 400;
    color:#595555;
    font-size: 18px;
    font-family: var(--font-secondary);
`;
const Spacing8=styled.div`
    margin-left: 8px;
`;
const Spacing20=styled.div`
    margin-left: 20px;
`;

const Spacing10=styled.div`
    margin-left: 10px;
`;

const CourseDetailDescriptionText=styled.div`
    font-weight: 200;
    font-size: 20px;
    font-family: var(--font-secondary);
    
    
`;

const CourseDetailDescriptionContainer=styled.div`
    width:70%;
    
`;

const BorderLine=styled.hr`
    width:85%;
    float:left;
    color:#D9D9D9;
`
const ButtonBox=styled.button`
    border:0;
    outline: 0;
    background-color: transparent;
    margin-right: 7%;
    width: 300px;
    height: 60px;
    border-color: #ABB868;
    border-style:solid;
    border-radius: 10px;
    box-sizing: border-box;
    border-width: 2.2px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
`;

const ButtonText=styled.div`
    text-align: center;
    font-weight: 100;
    font-size: 15px;
    font-family: var(--font-secondary);
    
`;