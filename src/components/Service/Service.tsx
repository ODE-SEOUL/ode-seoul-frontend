import styled from "@emotion/styled";
import SearchService from "./SearchService";
import { useQuery } from "react-query";
import { getServiceList } from "@/src/apis/service";
import ServiceItem from "./ServiceItem";
export interface ServiceListWrapperProps {
    limit: number;
  }
  

export default function ServiceForMain({limit=20}:ServiceListWrapperProps){

    const {isLoading:defaultLoading,data:serviceData}=useQuery("serviceList",getServiceList,{
        select: (data)=>data.result.events
      })

    const limitedServiceData =serviceData?.slice(0, limit); 
    return(
        <>
          <Container>
            <div className='mt-90'></div>
            <div className='row col-lg-12'>
             <div className="row" style={{display:'flex',flexWrap:'wrap'}}>
              {
                      limitedServiceData?.map(service=>
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
     
`