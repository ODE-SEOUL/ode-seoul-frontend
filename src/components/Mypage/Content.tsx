import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MyProfile from './MyProfile';
import MyReport from './MyReport';
import MyStamp from './MyStamp';


interface ContentProps {
    selectedComponent: number;
  }
  
  const Content: React.FC<ContentProps> = ({ selectedComponent }) => {
    return (
      <>
        {selectedComponent === 1 && <MyProfile />}
        {selectedComponent === 2 && <MyReport />}
        {selectedComponent === 3 && <MyStamp />}
      </>
    );
  };
  
  export default Content;


