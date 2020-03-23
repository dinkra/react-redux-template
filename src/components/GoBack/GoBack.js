import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: flex;
  margin: 24px 4px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  color: ${(p) => p.theme.primary};
  font-weight: bold;
`;

const StyledIcon = styled.i`
  border: solid lightgrey;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const GoBack = () => {
  return (
    <StyledLink to="/">
      <StyledIcon />
      Go Back
    </StyledLink>
  );
};

export default GoBack;
