import React, { useState } from 'react';
import Main1 from './Main1';
//import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Nav from '../common/Nav/Nav';
import Footer from '../common/Footer/Footer';

// 임의로 Main2 삭제해놨습니다!

const App = () => {
  return (
    <>
      <Nav />
      <Main1 />
      
      <Main3 />
      <Main4 />
      <Footer />
    </>
  );
};

export default App;
