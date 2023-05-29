import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Seasons from './Seasons';
import Stamps from './Stamps';
import Nav from '../common/Nav/Nav';
import Footer from '../common/Footer/Footer';
import { Breadcrumb } from '../common/Breadcrumb';

const index = () => {
  return (
    <>
      <Nav />
      <Breadcrumb title='오디서울' subTitle='팀 푸르던과 오디서울이 바라보는 서울' />
      <Logo />
      <Seasons />
      <Stamps />
      <Footer />
    </>
  );
};

export default index;
