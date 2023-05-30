import React, { useState, useEffect } from 'react';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Nav from '../common/Nav/Nav';
import Footer from '../common/Footer/Footer';

const App = () => {
  // const accessToken = localStorage.getItem("token");

  return (
    <>
      <Nav />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Footer />
    </>
  );
};

export default App;
