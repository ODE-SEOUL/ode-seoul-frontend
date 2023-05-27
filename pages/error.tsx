import React from 'react';
import Error from '../src/components/Error';
import Nav from '../src/components/common/Nav/Nav';
import Footer from '../src/components/common/Footer/Footer';

export default function index() {
  return (
    <>
    <Nav />
        <Error/>
        <Footer />
    </>
  );
}