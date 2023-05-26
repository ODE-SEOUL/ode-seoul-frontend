import styled from "@emotion/styled";
import SearchService from "./SearchService";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { ICaseProps } from ".";
import ServiceItem from "./ServiceItem";


export default function FilterCaseContainer({serviceData,category,gugun}:ICaseProps){
    return(
        <>
          <Container>
            <div className='mt-90'></div>
            <SearchContainer>
        
                <SearchService/>
        
            </SearchContainer>
            <div className='mt-100'></div>
            <ItemContainer>
                {
                    <ItemContainer>
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

                }
            </ItemContainer>

        
          </Container>
        
        </>
    
    
    
      );
}
const Container=styled.div`
    
   width:30%;
   margin: 0 auto;
`

const SelectionContainer=styled.div`
  
`;
const SearchContainer=styled.div`
  justify-content: center;
  align-items: center;
  
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