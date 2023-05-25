import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from 'react';

interface MapProps {
    routes:string;
    latitude: number;
    longitude: number;
   
  }

export default function CourseDetailMap({latitude, longitude ,routes}: MapProps){
    //const routes=courseData?.slice(1,2)[0].routes[0];
  let routesArr:number[][];
   try{
      routesArr=(JSON.parse(routes));

   }catch(error){
      routesArr=[[37,123]]
   }
   
    
    //
    useEffect(() => {
        const mapScript = document.createElement("script");
    
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=8922bdf2a7e7d0577e125355ef18a34f&autoload=false`;
    
        document.head.appendChild(mapScript);
    
        const onLoadKakaoMap = () => {
          window.kakao.maps.load(() => {
            //지도를 표시할 div
            const container = document.getElementById("map");
            //지도 중심좌표
            const options = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
            };
            //지도 생성
            const map = new window.kakao.maps.Map(container, options);
            // 경로 표시
            let linePath:any[]= [];
            
            routesArr.map((props:number[])=>linePath.push(new window.kakao.maps.LatLng(props[0],props[1])));

            // 지도에 표시할 선
    

            const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
            const polyline = new window.kakao.maps.Polyline({
              path: linePath, // 선을 구성하는 좌표배열 입니다
              strokeWeight: 5, // 선의 두께 입니다
              strokeColor: '#2CAF70', // 선의 색깔입니다
              strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
              strokeStyle: 'solid' // 선의 스타일입니다
          });

            polyline.setMap(map);
          });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
    
        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
      }, [latitude, longitude]);


    return(
    <>
        <CourseDetailTitle>위치를 확인해보세요!</CourseDetailTitle>
        <div className="mt-60"></div>
        <MapContainer id="map" />

    
    
     </>);


}

const CourseDetailTitle=styled.div`
    font-weight: 500;
    font-size: 30px;
    font-family: var(--font-secondary);
    
`;
const MapContainer = styled.div`
    width:90%;
    aspect-ratio: 320 / 220;
`;