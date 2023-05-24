import React from 'react';
import MyCalander from './MyCalander';
import Profile from './Profile';
import MyPost from './MyPost';

const MyPage = () => {
  return (
    <>
      <Profile />
      <MyPost />
      <MyCalander />
    </>
  );
};

export default MyPage;
