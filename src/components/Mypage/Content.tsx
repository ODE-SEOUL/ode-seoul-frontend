import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MyProfile from './MyProfile';
import MyReport from './MyReport';
import MyStamp from './MyStamp';
import MyApplication from './MyApplication';
// import MyComment from './MyComment';

interface ContentProps {
    selectedComponent: number;
  }
  
  const Content: React.FC<ContentProps> = ({ selectedComponent }) => {
    return (
      <>
        {selectedComponent === 1 && <MyProfile />}
        {selectedComponent === 2 && <MyReport />}
        {selectedComponent === 3 && <MyApplication />}
        {/* {selectedComponent === 4 && <MyComment />} */}
        {selectedComponent === 5 && <MyStamp />}
      </>
    );
  };
  
  export default Content;


