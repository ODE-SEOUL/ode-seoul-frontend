import styled from "@emotion/styled";
import { CourseCategory } from "./CourseCategory";
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { useMemo,useRef,useCallback } from "react";


interface sliderProps {
    /** 슬라이더 아이템 요소 */
    children: React.ReactNode;
    /** 커스텀 클래스 */
    className?: string;
    /** 자동재생 (속도 설정시 number 타입으로) */
    autoplay?: boolean | number;
    /** 슬라이더 속도 */
    speed?: number;
    /** 반복 여부 */
    loop?: boolean;
  };
export default function CourseCarousel(){
  

    const settings = useMemo<Settings>(
        () => ({
          arrows:true,
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
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
        <SlideWrapper>
            <Slider {...settings}>
                    {CourseCategory.map(category=>
                    <CategoryItemContainer key={category.id}>
                        <CategoryItem key={category.id}>
                            <CategoryText color={category.color}>{category.name}</CategoryText>
                        </CategoryItem>
                    </CategoryItemContainer>
                    )}
            </Slider>
        </SlideWrapper>
    </>

    
}
const SlideWrapper = styled(Slider)`
    //width:63.25rem;
    margin-left: 12rem;
    //margin-right: 5rem;
    height:3.5rem;
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
    .slick-list{
      width:1012px;
    }
    // arrow visible하게 하기
    /* .slick-next {
      right: 3% !important;
      z-index: 1;
    } */
    
`;
const NextTo = styled.div`
  margin-top: -2px;
  width: 45px;
  height: 45px;
  position: absolute;
  right: 12%;
  z-index: 3;
`;
const Prev = styled.div`
  margin-top: -2px;
  width: 45px;
  height: 45px;
  position: absolute;
  left: 2%;
  z-index: 3;
`;

const CategoryItemContainer=styled.div`
    width: 10rem;
    height: 3.5rem;
    box-sizing: border-box;
    
`;
const CategoryItem=styled.div`
    width:10rem;
    height: 3.5rem;
    box-sizing: border-box;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.01), 0 10px 10px rgba(0, 0, 0, 0.02);
    flex:none;
    border-radius: 10px;
    overflow: hidden;
    
` ;

const CategoryText=styled.div`
    padding-top:1.2rem;
    font-weight:200;
    font-family:  var(--font-secondary);
    font-size: 15px;
    text-align: center;
    color:${props=>props.color};
    justify-content: center;

`;


const NextArrow=styled.div`
    margin-top: -2px;
    width:60px;
    height: 60px;
    object-fit: cover;
    background: url('./assets/img/carousel_arrow_next.svg');
`;
  
const PrevArrow=styled.div`
    margin-top: -2px;
    width:60px;
    height: 60px;
    object-fit: cover;
    background: url('./assets/img/carousel_arrow_prev.svg');
`;
  
  