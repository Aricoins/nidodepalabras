import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedDiv = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  &.visible {
    opacity: 1;
  }
`;

const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Para que la animación solo ocurra una vez
    threshold: 0.5, // ajustar este valor según necesidades
  });

  return (
    <AnimatedDiv ref={ref} className={inView ? 'visible' : ''}>
      {children}
    </AnimatedDiv>
  );
};

export default ScrollAnimation;
