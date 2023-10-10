
import styled, { keyframes } from 'styled-components';
import imagen from './blues.png';

const volar = keyframes`
  0% {
    background-position: 0px;
    transform: scale(0.3);
  }
  100% {
    background-position: -2700px;
    transform: scale(0.3);
  }
`;

const Container = styled.div`
  width: 300px;
  height: 290px;
  background-image: url(${imagen});
  background-size: cover;
  margin-right: 0;
  margin: 0 auto;
  animation: ${volar} .6s 5s steps(9) forwards;
`;


const Icon = () => {
 

  return (
    <div>
      <Container />
    
    </div>
  );
};

export default Icon;
