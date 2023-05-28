import styled from "@emotion/styled";
import SearchService from "./SearchService";
import { ICaseProps } from ".";
import ServiceItem from "./ServiceItem";
import { Grid } from "@mui/material";

export default function DefaultCaseContainer({serviceData}:ICaseProps){
    return(
        <>
          <Container>
            <div className='mt-90'></div>
            <SearchContainer style={{margin:"auto"}}>
      
                <SearchService />
      
            </SearchContainer>
            <div className='mt-100'></div>
            <div className='row col-lg-12'>
             <div className="row" style={{display:'flex',flexWrap:'wrap'}}>
              {
                      serviceData?.map(service=>
                        <div className='col-lg-5 col-sm-12 mb-80' key={service.uuid}>
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
      width:30rem;
      height:35rem; 
      border-radius: 10px;
      box-sizing: border-box;
      //background-color: aliceblue;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
     
`;