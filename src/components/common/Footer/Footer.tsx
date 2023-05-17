import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Footer = () => {
    return(
        <FooterStyle>© {new Date().getFullYear()} ODE?SEOUL , All Right Received.</FooterStyle>
    )

}

const FooterStyle = styled.div`
    text-align: center;
    font-family: var(--font-secondary);
    font-weight: 100;
    padding: 30px;
    border-top: 1px solid #eee;
`

export default Footer;