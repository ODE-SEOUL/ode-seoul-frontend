import styled from "@emotion/styled";
import SearchService from "./SearchService";
import { ICaseProps } from ".";
import ServiceItem from "./ServiceItem";
import { Breadcrumb } from "../common/Breadcrumb";

export default function DefaultCaseContainer({serviceData}:ICaseProps){
    return(
        <>
          <Container>
          <Breadcrumb title="서울시 문화행사" subTitle="생태문화길을 걷다 즐길 수 있는 문화행사들을 추천드려요"/>
            <div className='mt-90'></div>
            <SearchContainer style={{margin:"auto"}}>
      
                <SearchService />
      
            </SearchContainer>
            <div className='mt-100'></div>
            <div className='row col-lg-12'>
             <div className="row" style={{display:'flex',flexWrap:'wrap'}}>
              {
                      serviceData?.map(service=>
                        <div className='col-lg-4 col-sm-12 mb-80' key={service.uuid}>
                            <ItemBtn key={service.uuid}>
                              <ServiceItem title={service.title} location={service.place}
                              startDate={service.startDate} endDate={service.endDate}
                              useFee={service.useFee} mainImage={service.mainImage}
                              more={service.orgLink}/>
            
                          </ItemBtn>

                        </div>)
                      
                    }

                </div>
              </div>
          

         
          </Container>
          
        
        </>
    
    
    
      );
}
const Container=styled.div`
    
   text-align: center;
`
const SearchContainer=styled.div`
  display: inline-block;
  
`;


const ItemBtn=styled.div`
      cursor:pointer;
      margin: auto;
      width:28rem;
      height:32rem; 
      border-radius: 10px;
      box-sizing: border-box;
      //background-color: aliceblue;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
     
`;