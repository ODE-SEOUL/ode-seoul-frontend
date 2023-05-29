import React, { useState, useEffect } from 'react';
import Previndex from './previndex';
import Nav from '../common/Nav/Nav';
import Footer from '../common/Footer/Footer';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';

const index = () => {
  return (
    <>
      <Nav />
      <Breadcrumb title='서울시 생태문화길' subTitle='서울특별시와 오디서울이 다양한 카테고리로 생태문화길을 추천합니다.' />
      <Previndex />
      < Footer />
    </>
  );
};

export default index;