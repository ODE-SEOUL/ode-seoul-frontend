import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import styled from '@emotion/styled';
import { Item } from 'react-bootstrap/lib/Breadcrumb';
import { getServiceList } from '@/src/apis/service';
import { useQuery } from 'react-query';
import { useState } from 'react';
import ServiceItem from './ServiceItem';

enum EventCategory{
  SHOW="공연",
  EXHIBITION="전시",
  FESTIVAL="축제",
  EDUEXP="교육/체험",
  ETC="기타",


}

export default function Service(){
  const[filter,setFilter]=useState(false);
  const [gugun,setGugun]=useState<string>("1168000000");
  const [category,setCategory]=useState<string>(EventCategory.SHOW);
  const {isLoading,data:serviceData}=useQuery("serviceList",getServiceList,{
    select: (data)=>data.result.events
  })
  serviceData?.map(data=>console.log(data.title));
  return (
    <>
      <Container>
          <div className='mt-90'></div>
          <SearchContainer>
            
          </SearchContainer>
          {
            filter?<ItemContainer>
            {
              serviceData?.filter(service=>service.category==category&&service.guname==gugun).map(service=>
                <ItemBtn key={service.uuid}>
                  <ServiceItem title={service.title} location={service.place}
                  startDate={service.startDate} endDate={service.endDate}
                  useFee={service.useFee} mainImage={service.mainImage}
                  more={service.orgLink}/>

                </ItemBtn>)
              
            }

          </ItemContainer>
          :
            <ItemContainer>
            {
              serviceData?.map(service=>
                <ItemBtn key={service.uuid}>
                  <ServiceItem title={service.title} location={service.place}
                  startDate={service.startDate} endDate={service.endDate}
                  useFee={service.useFee} mainImage={service.mainImage}
                  more={service.orgLink}/>

                </ItemBtn>)
              
            }

          </ItemContainer>
          }
      </Container>
    </>
  );
};

const Container=styled.div`
    
   width:10%;
   margin: 0 auto;

`

const SelectionContainer=styled.div`
  
`;
const SearchContainer=styled.div`
  
`;

const ItemContainer=styled.div`
  justify-content: center;
  align-items: center;
  width:1000px;
  height:500px;
  width:100%;
  height:800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  
`;

const ItemBtn=styled.button`
    border:0;
    outline: 0;
    background-color: transparent;
`;