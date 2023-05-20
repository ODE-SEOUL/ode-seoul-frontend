import React from "react";
import styled from "@emotion/styled";
import { ICourseData } from "../../../types/courseList";
import { text } from "stream/consumers";


interface ICouresItemProps {
    color:string,
    name:string,
    code:string,
    select:string,
}

type ITextProps={
    font_color:string;
    font_weight:number;

}
export default function CourseCategoryItem({color,name,code,select}:ICouresItemProps){
    const textStyle:ITextProps={
        font_color:color,
        font_weight:(select===code)?600:200,
    
    }
    return(
        <>
            <CategoryItem>
                <CategoryText textStyle={textStyle}>{name}</CategoryText>
            </CategoryItem>
        </>
    );
    
};

const CategoryItem=styled.div`
    display: flex;
    width:10rem;
    height: 3.2rem;
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.02);
    flex:none;
    border-radius: 10px;
    overflow: hidden;
    
`;
const CategoryText=styled.div<{textStyle:ITextProps}>`
    margin:auto;
    font-weight:${props=>props.textStyle.font_weight};
    font-family:  var(--font-secondary);
    font-size: 12px;
    text-align: center;
    color:${props=>props.textStyle.font_color};
    justify-content: center;

`;