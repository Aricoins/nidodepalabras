import React from 'react';
import styled, { keyframes } from 'styled-components';
import imagen from './blue.png';

const volar = keyframes`
  0% {
    background-position: 0px;
    transform: scale(0.5);}
/*     
  }
  11% {
    background-position:-286px;
    transform: scale(0.5);}
 22% {
    background-position:-573px;
        transform: scale(0.5);}
  33% {
    background-position:-859px;
    transform: scale(0.5);
    
  }
  44%{
    background-position:-1145px;
    transform: scale(0.5);}

    55%{

    background-position:-1290px;
        transform: scale(0.5);}
  
  66% {
    background-position:-1431px;
        transform: scale(0.5);}
    77% {background-position:-1717px;
        transform: scale(0.5);}
    
  88% {
    background-position:-1717px;
    transform: scale(0.5);
    
  } */
  100% {
    background-position:-1800px;
    transform: scale(0.5);
    
  }

`;

const Container = styled.div`
  width: 190px;
  height: 200px;
   background-image: url(${imagen});
  background-size: cover;
  margin-right: 0; /* Ajusta según sea necesario */
  margin: 0 auto;
  animation: ${volar} 1s  steps(9) infinite;

`;
const Icon = () => {
  return <Container />;
};

export default Icon;
