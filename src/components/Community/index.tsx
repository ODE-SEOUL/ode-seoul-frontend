import React from 'react';
import Footer from '../common/Footer/Footer';
import Nav from '../common/Nav/Nav';
import CommunityItem from './CommunityItem';
import { Breadcrumb } from '../common/Breadcrumb';

const Communuty = () => {
  return (
    <>
      <Nav />
      <Breadcrumb title="생태문화길 커뮤니티" subTitle="오디서울의 워커라면 누구든지 참여할 수 있어요." />
      <CommunityItem />
      <Footer/>
    </>
  );
};

export default Communuty;
