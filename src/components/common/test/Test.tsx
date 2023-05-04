import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
}

const Test = ({ text }: Props) => <StyledTest className={text}>{text}</StyledTest>;

export default Test;

const StyledTest = styled.div`
  color: #fff;
  background-color: #000;
  padding: 10px;
  border-radius: 20px;
  width: 100px;
  text-align: center;
`;
