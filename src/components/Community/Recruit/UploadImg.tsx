import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {
    text?: string;
  }

const UploadImg = ({ text }: Props) => {
  return (
    <>
        <StyledDefaultImg><AiOutlineSearch /></StyledDefaultImg>
    </>
  );
};

export default UploadImg;

const StyledDefaultImg = styled.div`
   width: 70%;
   height: 300px;
   margin: auto;
   background: #eee;
   border-radius: 5px;
   text-align: center;
   line-height: 300px;
   font-size: 30px;
`;