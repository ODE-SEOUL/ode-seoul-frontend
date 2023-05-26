import styled from "@emotion/styled";
import SearchService from "./SearchService";
import ServiceItem from "./ServiceItem";
import { ICaseProps } from ".";
import { Grid } from "@mui/material";
import { spacing } from '@mui/system';

export default function SearchCaseContainer({searchServiceData,value}:ICaseProps){
  
  return(
        <>
          <Container>
            <div className='mt-90'></div>
            <SearchContainer>
      
                <SearchService />
      
            </SearchContainer>
            <div className='mt-100'></div>
            <Grid container>
            {
                  searchServiceData?.
                  map(service=>
                    <Grid xs={12} sm={8} md={4} lg={2}  key={service.uuid}>
                      <ServiceItem title={service.title} location={service.place}
                      startDate={service.startDate} endDate={service.endDate}
                      useFee={service.useFee} mainImage={service.mainImage}
                      more={service.orgLink}/>
      
                    </Grid>)
                  
                }
            </Grid>
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