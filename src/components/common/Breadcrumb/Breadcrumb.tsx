import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type BreadcrumbProps = {
  title: string;
  subTitle: string;
};

const Breadcrumb = ({ title, subTitle }: BreadcrumbProps) => {
  return (
    <>
        <BreadcrumbTitle> {title} </ BreadcrumbTitle>
        <BreadcrumbSubTitle> {subTitle} </ BreadcrumbSubTitle>
    </>
  );
};

export default Breadcrumb;


const BreadcrumbTitle = styled.div`
    font-size: 40px;
    width: 500px;
    padding: 10px;
    font-family: var(--font-primary);
`
const BreadcrumbSubTitle = styled.div`
    font-size:20px;
    width: 500px;
    padding: 10px;
    font-weight: 100;
    font-family: var(--font-secondary);
`