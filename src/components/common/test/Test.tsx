import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
}

const Test = ({ text }: Props) => <StyledTest className={text}>{text}</StyledTest>;

const StyledTest = styled.div`
  color: #fff;
  background-color: #000;
  padding: 6px;
  border-radius: 20px;
  width: 100px;
  text-align: center;
`;

export default Test;