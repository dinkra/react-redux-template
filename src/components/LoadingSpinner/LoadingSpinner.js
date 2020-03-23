import React from 'react';
import styled, { keyframes } from 'styled-components';

const fullCircleRotate = () => keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 16px 0;
`;

const StyledSpinner = styled.span`
  display: flex;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border: 4px solid ${(p) => p.theme.primary};
  border-left-color: ${(p) => p.theme.white};
  border-radius: 100%;
  animation: ${fullCircleRotate()} 1s linear infinite;
`;

const LoadingSpinner = () => (
  <StyledWrapper>
    <StyledSpinner />
  </StyledWrapper>
);

export default LoadingSpinner;
