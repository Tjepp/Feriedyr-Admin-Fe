import styled from 'styled-components'
import React from 'react';

const Button = ({name}) => (
    <StyledButton>{`Hi ${name}`}</StyledButton>
);

export default Button;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
