import React, { SetStateAction } from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import styled from '@emotion/styled';
import { Item } from 'react-bootstrap/lib/Breadcrumb';
import { getServiceList, getServiceSearchList } from '@/src/apis/service';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Dispatch } from 'react';
import { EventData } from '@/src/types/service';
import FilterCaseContainer from './FiltetCase';
import DefaultCaseContainer from './DefaultCase';
import SearchCaseContainer from './SearchCase';
import { filterAtom, searchAtom, searchParamAtom, searchValueAtom } from '@/src/states/ServiceAtom';
import { useRecoilValue } from 'recoil';
import { GetServiceSearchParams } from '@/src/apis/service';
import { useEffect } from 'react';
import { useServiceSearchQuery } from './serviceQuery';

enum EventCategory{
  SHOW="공연",
  EXHIBITION="전시",
  FESTIVAL="축제",
  EDUEXP="교육/체험",
  ETC="기타",


}

export interface ICaseProps{
  serviceData?:EventData[];
  searchServiceData?:EventData[];
  filterServiceData?:EventData[];
  value?:string;
  category?:string;
  gugun?:string;
}



export default function Service(){
  // 필터 설정한건지
  const filter=useRecoilValue(filterAtom);
  // 검색한건지
  const search=useRecoilValue(searchAtom);

  // 필터 설정시 구군, 카테고리
  const [gugun,setGugun]=useState<string>("1168000000");
  const [category,setCategory]=useState<string>(EventCategory.SHOW);

  // 검색 설정시 value
  const value=useRecoilValue(searchValueAtom);

  const {data:serviceData}=useQuery("serviceList",getServiceList,{
    select: (data)=>data.result.events
  })

  
  const {data:searchServiceData}=useQuery("searchServiceList",()=>getServiceSearchList(value),{
    select:(data)=>data.result.events
  });
  
  
  console.log(value);
 

  if(filter&&!search){
      
      return(<FilterCaseContainer 
      
        category={category} gugun={gugun}/>);
      
  }
  else if(!filter&&search){
    return (<SearchCaseContainer 
      
      
      searchServiceData={searchServiceData}
      value={value}/>);
  }else if(!filter&&!search){
    return(<DefaultCaseContainer  serviceData={serviceData}/>);
  }
         
     
}
  
  

