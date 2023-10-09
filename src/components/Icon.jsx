
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
  animation: ${volar} 0.8s steps(9) infinite;
`;


const Icon = () => {
 

  return (
    <div>
      <Container />
    
    </div>
  );
};

export default Icon;
