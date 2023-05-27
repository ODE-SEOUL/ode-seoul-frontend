import styled from "@emotion/styled";
import { useRouter } from "next/router";
interface IServiceItemProps{
    title:string;
    location:string;
    startDate:string;
    endDate:string;
    useFee:string;
    mainImage:string;
    more:string;
}

export default function ServiceItem({title,location,startDate,endDate,useFee,mainImage,more}:IServiceItemProps){
    const router=useRouter();

    const onClick=()=>{
        router.push(more);

    }

    return(
        <>
            <ItemContainer>
                <Image url={mainImage}/>
                <div className="mt-20"></div>
                <Text weight={600} size={18} color="black">{title}</Text>
                <div className="mt-20"></div>
                <FlexBox>
                    
                    <Icon url="./assets/img/serviceLocation.svg" width="19.31px" height="28.6px"/>
                    <div className="mr-10"></div>
                    <Text weight={600} size={15} color="black">장소</Text>
                    <div className="mr-20"></div>
                    <Text weight={200} size={15} color="black">{location}</Text>
                    
                </FlexBox>
                <div className="mt-25"></div>
                <FlexBox>
                    
                    <Icon url="./assets/img/serviceDate.svg" width="24.14px" height="23.83px"/>
                    <div className="mr-10"></div>
                    <Text weight={600} size={15} color="black">행사 날짜</Text>
                    <div className="mr-20"></div>
                    <Text weight={200} size={15} color="black">{startDate.concat(" ~ ").concat(endDate)}</Text>
                    
                    
                </FlexBox>
                <div className="mt-25"></div>
                <FlexBox>
                    
                    <Icon url="./assets/img/servicePrice.svg" width="29.17px" height="18px"/>
                    <div className="mr-10"></div>
                    <Text weight={600} size={15} color="black">가격</Text>
                    <div className="mr-20"></div>
                    <Text weight={200} size={15} color="black">{useFee===""?"무료":useFee}</Text>
                    
                    
                </FlexBox>
                <div className="mt-25"></div>
                <Button onClick={onClick}>
                    <Text weight={300} size={15} color="white">더보기</Text>
                </Button>

            </ItemContainer>
        </>

    );
}

const ItemContainer=styled.div`
    width:30rem;
    height:35rem; 
    border-radius: 10px;
    box-sizing: border-box;
    //background-color: aliceblue;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 10rem;
`;

const Image=styled.div<{url:string}>`
    background-image: url(${props=>props.url});
    border-top-right-radius:10px;
    border-top-left-radius: 10px;
    
    width:100%;
    height:15rem;

    
`

const Icon=styled.div<{url:string,width:string,height:string}>`
    background-image: url(${props=>props.url});  
    width:${(props)=>props.width};
    height:${(props)=>props.height};
    margin-top: -3px;
`
const Text=styled.div<{weight:number,size:number,color:string}>`
    font-weight: ${props=>props.weight};
    font-size: ${props=>props.size}px;
    font-family: var(--font-secondary);
    color:${props=>props.color};
    text-align: center;
`;

const Button=styled.button`
    border:0;
    outline:0;
    width:10rem;
    height:2.323rem;
    border-radius: 20px;
    background-color: var(--color-green);
    position: static;
    box-shadow:10px 10px 20px rgba(0, 0, 0, 0.1);
`;

const FlexBox=styled.div`
    display: flex;
    margin-left: 20px;
    word-wrap: break-word;
`