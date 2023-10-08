import React from 'react';
import styled, { keyframes } from 'styled-components';
import imagen from './bird.svg';

const volar = keyframes`
  0% {
    background-position: 0px;
    transform: scale(0.5);
    
  
  }
  100% {
    background-position: -3671px;
    transform: scale(0.5);
     
  }
`;

const Container = styled.div`
  width: 367px;
  height: 510px;
   background-image: url(${imagen});
  background-size: cover;
  margin-right: 0; /* Ajusta según sea necesario */
  margin: 0 auto;
  animation: ${volar} 0.9s steps(10) infinite;
  color: green;
`;
const Icon = () => {
  return <Container />;
};

export default Icon;
