
import styled, { keyframes } from 'styled-components';
import imagen from './blues.png';

const volar = keyframes`
  0% {
    background-position: 0px;
    transform: scale(0.4);
  }
  100% {
    background-position: -8250px;
    transform: scale(0.4);
  }
`;

const Container = styled.div`
  width: 520px;
  height: 820px;
  background-image: url(${imagen});
  background-size: cover;
  margin-right: 0;
  margin: 0 auto;
  animation: ${volar} 1s steps(16) infinite;
  
 `;

const Icon = () => {
 

  return (
    <div>
      <Container />
    
    </div>
  );
};

export default Icon;
