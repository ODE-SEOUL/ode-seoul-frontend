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
    width:78rem;
    height:3.5rem;
    position: relative;

    .slick-list {
    overflow: hidden;
    height: 15.5vw;
    text-align: center;
  }

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 1vw;
  }

  .slick-prev {
    left: -1.2vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }

  .slick-next {
    right: -1.1vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }
    
`;

const CategoryItemContainer=styled.div`
    width: 10rem;
    height: 3.5rem;
    box-sizing: border-box;
    margin: 1px;
    
`;
const CategoryItem=styled.div`
    width:10rem;
    height: 3.5rem;
    box-sizing: border-box;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.01), 0 10px 20px rgba(0, 0, 0, 0.06);
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
    width: 30px;
    height: 30px;
    position: absolute;
    left: 16px;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`
  
  