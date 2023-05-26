import React from 'react';
import Nav from '../common/Nav/Nav';
import CommunityItem from './CommunityItem';
import { userAtom } from '../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';

const Communuty = () => {

  const user = useRecoilValue(userAtom);
    console.log(user);

  return (
    <>
      <Nav />
      <CommunityItem />
    </>
  );
};

export default Communuty;
