import React from 'react';
import styled from '@emotion/styled';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const CheckboxInput = styled.input`
  margin-left: 1rem;
  width: 20px;
  height: 20px;
`;

const CheckboxLabel = styled.span`
font-size: 23px;
width: 100%;
font-family: var(--font-secondary);
font-weight: 300;
padding: 20px 0px;
color: rgb(108, 128, 75);
margin: 100px 0px 20px 0px;
font-weight: 500;

`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <CheckboxContainer>
      <CheckboxLabel>{label}</CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
    </CheckboxContainer>
  );
};

export default Checkbox;
