import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ColorInfo = () => {

    return(
        <div className='mr-100'>
            <h1>ColorInfo</h1>
            <h2>--color-beige</h2> <BeigeColor> #FDF0CD</BeigeColor>
            <h2>--color-yellow</h2> <YellowColor> #FFBF41</YellowColor>
            <h2>--color-green</h2> <GreenColor> #ABB868</GreenColor>
            <h2>--color-darkgreen</h2> <DarkGreenColor> #6C804B</DarkGreenColor>
            <h2>--color-brown</h2> < BrownColor> #463C33</ BrownColor>  
        </div>
    )
};

export default ColorInfo;

const BeigeColor = styled.div`
  background-color: var(--color-beige);
  font-size: 30px;
  width: 500px;
  padding: 10px;
`;

const YellowColor = styled.div`
  background-color: var( --color-yellow);
  font-size: 30px;
  width: 500px;
  padding: 10px;
`;

const GreenColor = styled.div`
  background-color: rgb(171, 184, 104);
  font-size: 30px;
  width: 500px;
  padding: 10px;
`;

const DarkGreenColor = styled.div`
  background-color: rgb(108, 128, 75);
  font-size: 30px;
  width: 500px;
  padding: 10px;
`;

const BrownColor = styled.div`
  background-color: var(--color-brown);
  font-size: 30px;
  width: 500px;
  padding: 10px;
`;