import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import imagen from './blue.png';

const volar = keyframes`
  0% {
    background-position: 0px;
    transform: scale(0.5);
  }
  100% {
    background-position: -1800px;
    transform: scale(0.5);
  }
`;

const Container = styled.div`
  width: 190px;
  height: 220px;
  background-image: url(${imagen});
  background-size: cover;
  margin-right: 0;
  margin: 0 auto;
  animation: ${volar} 1s steps(9) infinite;
`;

const Button = styled.button`
  font-size: 16px;
  margin: 0 10px;
`;

const Icon = () => {
  const [animationDuration, setAnimationDuration] = useState(1);

  const handleIncrement = () => {
    setAnimationDuration(animationDuration + 1);
  };

  const handleDecrement = () => {
    if (animationDuration > 1) {
      setAnimationDuration(animationDuration - 1);
    }
  };

  return (
    <div>
      <Container style={{ animation: `${volar} ${animationDuration}s steps(9) infinite` }} />
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement}>-</Button>
    </div>
  );
};

export default Icon;
