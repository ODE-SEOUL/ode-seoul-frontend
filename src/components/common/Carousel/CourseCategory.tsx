import styled from "@emotion/styled";
import CourseCategoryItem from "./CourseCategoryItem";
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { useMemo,useRef,useCallback,useState } from "react";
import React from "react";
import { CourseCategoryArray } from "./CourseCategoryArray";
import { useSetRecoilState } from "recoil";
import { selectCategoryAtom } from "../../../states/CourseAtom";



export default function CourseCarousel(){
  
    const [select,setSelect]=useState(CourseCategoryArray[0].code);
    const setterCategoryFn=useSetRecoilState(selectCategoryAtom);
    const onClick=(params:string,event:React.MouseEvent<HTMLButtonElement>)=>{
          //event.preventDefault();
          setSelect(params);
          setterCategoryFn(params);  

    };
   
  

    const settings = useMemo<Settings>(
        () => ({
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows:true,
          nextArrow:(
            <NextTo>
                <NextArrow/>
            </NextTo>
            
          ),
          prevArrow:(
            <Prev>
                <PrevArrow/>
            </Prev>

          )
          
        }),
        [],
      );

    return<>
        <Container>
          <SlideWrapper>
              <Slider {...settings}>
                      {CourseCategoryArray.map(category=>
                    
                        <CategoryItemContainer  onClick={(e)=>onClick(category.code as string,e)} key={category.id}>
                          
                          <CourseCategoryItem color={category.color} name={category.name} code={category.code!} select={select!}/>
                          
                        </CategoryItemContainer>
                      )}
              </Slider>
          </SlideWrapper>
        </Container>
    </>

    
}

const Container=styled.div`
  display: flex;
  justify-content: center;
  
`;

const SlideWrapper = styled(Slider)`
    width: 80rem;
    height:4rem;
    position: relative;
   
    // 원래 있던 arrow 감추기
    .slick-prev::before,
    .slick-next::before {
      opacity: 0;
      display: none;
    }
    .slick-slide div {
      cursor: pointer;
    }
    .slick-slider{
      display: inline-block;
    }
    
    // arrow visible하게 하기
    /* .slick-next {
      right: 3% !important;
      z-index: 1;
    } */
    
`;
const NextTo = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  position: absolute;
  right:2%;
  z-index:3;
`;

const Prev = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  left:1%;
  z-index: 3;
`;

const CategoryItemContainer=styled.button`
    border:0;
    background-color: transparent;
    width: 10rem;
    height: 4rem;
    box-sizing: border-box;
    
`;

const NextArrow=styled.div`
    position: relative;
    // 가운데 정렬
    top:50%;
    transform: translateY(-50%);
    width:60px;
    height: 60px;
    object-fit: cover;
    background: url('./assets/img/carousel_arrow_next.svg');
`;
  
const PrevArrow=styled.div`
    position: relative;
    top:50%;
    transform: translateY(-50%);
    width:60px;
    height: 60px;
    object-fit: cover;
    background: url('./assets/img/carousel_arrow_prev.svg');
`;


