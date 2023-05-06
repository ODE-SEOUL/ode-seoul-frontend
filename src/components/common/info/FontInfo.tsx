import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const FontInfo = () => {

    return(
        <div>
            <h1>FontInfo</h1>
            <div className='row mr-100'>
                <div>
                    <h2>--font-primary</h2>
                    <PrimaryFont >느림보 고딕</PrimaryFont>
                </div>
                <div>
                    <h2>--font-secondary</h2>
                    <SecondFont100>프리탠다드 100</SecondFont100>
                    <SecondFont200>프리탠다드 200</SecondFont200>
                    <SecondFont300>프리탠다드 300</SecondFont300>
                    <SecondFont400>프리탠다드 400</SecondFont400>
                    <SecondFont500>프리탠다드 500</SecondFont500>
                    <SecondFont600>프리탠다드 600</SecondFont600>
                    <SecondFont700>프리탠다드 700</SecondFont700>
                    <SecondFont800>프리탠다드 800</SecondFont800>
                    <SecondFont900>프리탠다드 900</SecondFont900>
                </div>
            </div>
            
        </div>
    )
};

export default FontInfo;

const PrimaryFont = styled.div`
  font-size: 40px;
  width: 500px;
  padding: 10px;
  font-family: var(--font-primary);
`;

const SecondFont100 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 100;
  font-family: var(--font-secondary);
`;
const SecondFont200 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 200;
  font-family: var(--font-secondary);
`;
const SecondFont300 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 300;
  font-family: var(--font-secondary);
`;
const SecondFont400 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 400;
  font-family: var(--font-secondary);
`;
const SecondFont500 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 500;
  font-family: var(--font-secondary);
`;
const SecondFont600 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 600;
  font-family: var(--font-secondary);
`;

const SecondFont700 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 700;
  font-family: var(--font-secondary);
`;
const SecondFont800 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 800;
  font-family: var(--font-secondary);
`;
const SecondFont900 = styled.div`
  font-size: 30px;
  width: 500px;
  padding: 10px;
  font-weight: 900;
  font-family: var(--font-secondary);
`;