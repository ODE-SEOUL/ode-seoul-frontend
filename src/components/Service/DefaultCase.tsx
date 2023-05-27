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
            <SearchContainer>
      
                <SearchService />
      
            </SearchContainer>
            <div className='mt-100'></div>
            <Grid container >
              {
                      serviceData?.map(service=>
                        <Grid item  xs={12} sm={8} md={6} lg={4} key={service.uuid}>
                            <ItemBtn key={service.uuid}>
                              <ServiceItem title={service.title} location={service.place}
                              startDate={service.startDate} endDate={service.endDate}
                              useFee={service.useFee} mainImage={service.mainImage}
                              more={service.orgLink}/>
            
                          </ItemBtn>

                        </Grid>)
                      
                    }

              </Grid>
          

         
          </Container>
          
        
        </>
    
    
    
      );
}
const Container=styled.div`
    
   /* width:30%;
   margin: 0 auto; */
`

const SelectionContainer=styled.div`
  
`;
const SearchContainer=styled.div`
  justify-content: center;
  align-items: center;
  
`;

const ItemContainer=styled.div`
  width:90%;
  margin:0 auto;

  
`;

const ItemBtn=styled.button`
    border:0;
    outline: 0;
    background-color: transparent;
`;