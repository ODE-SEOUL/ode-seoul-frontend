import styled from "@emotion/styled";
import { useState } from "react";
import { Dispatch,SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { searchAtom, searchValueAtom } from "@/src/states/ServiceAtom";

import { useEffect } from "react";

export default function SearchService(){
    
    // 현재 Input의 상황
    const [value,setValue]=useState("");
    // 전역적으로 관리하는 검색상태 
    const [search,setSearch]=useRecoilState(searchAtom);
    // 전역적으로 관리하는 검색어
    const [searchValue,setSearchValue]=useRecoilState(searchValueAtom);

    
    const onClick=()=>{
        console.log("input".concat(searchValue))
        
        setSearchValue(value);
        setSearch(true);
        
        
        
    }
    const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault();
        setValue(event.currentTarget.value);
        setSearch(true);
    }
    return(<>
        <FlexBox>
            <SearchBox type="text" onChange={onChange }value={value} placeholder="     체험하고 싶은 것을 검색해보세요!"/>
            <SearchButton onClick={onClick}/>
        </FlexBox>
    </>);
}

const SearchBox=styled.input`
    width:41rem;
    height:4.875rem;
    border-radius: 10px;
    border: 1px solid gray;
    
`;

const SearchButton=styled.button`
    float:right;
    border:0;
    outline: 0;
    background-color: transparent;
    width:29px;
    height: 33px;
    margin-top:25px;
    margin-left: -85px;
    background-image: url('./assets/img/serviceSearch.svg');
`

const FlexBox=styled.div`
    display: flex;
`