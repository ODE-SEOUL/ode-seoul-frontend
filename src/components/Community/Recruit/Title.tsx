import React from 'react';
import styled from '@emotion/styled';

interface Props {
    text?: string;
  }

const Title = ({ text }: Props) => {
  return (
    <>
        <StyledTitle>{text}</StyledTitle>
    </>
  );
};

export default Title;

const StyledTitle = styled.div`
    font-size: 23px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    padding: 20px 0px;
    color: var(--color-darkgreen);
    margin: 100px 0px 20px 0px;
    font-weight: 500;

`;