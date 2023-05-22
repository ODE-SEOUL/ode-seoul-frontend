import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from 'react';

interface MapProps {
    latitude: number;
    longitude: number;
  }

export default function CourseDetailMap({ latitude, longitude }: MapProps){

    useEffect(() => {
        const mapScript = document.createElement("script");
    
        mapScript.async = true;
        mapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=8922bdf2a7e7d0577e125355ef18a34f&autoload=false';
    
        document.head.appendChild(mapScript);
    
        const onLoadKakaoMap = () => {
          window.kakao.maps.load(() => {
            const container = document.getElementById("map");
            const options = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
            };
            const map = new window.kakao.maps.Map(container, options);
            const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
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