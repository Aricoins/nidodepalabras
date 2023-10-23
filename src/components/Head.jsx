import React, {useState, useEffect} from "react";
import styled, { keyframes } from "styled-components";
import img0 from "../assets/giggl3s4.gif";
import arbol from "../assets/arbol.webp";
import Icon from "./Icon";
//import Nav from "./Navbar";
//Video by Taryn Elliott: https://www.pexels.com/video/a-video-footage-of-forest-trees-9682891/


const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateBackAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  left : 50%;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #8ed2c9  rgb(0, 170, 160)  transparent;
  box-sizing: border-box;
  animation: ${rotateAnimation} 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent  #d55b3e #d55b3e;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: ${rotateBackAnimation} 0.5s linear infinite;
    transform-origin: center center;
  }
`;

const fadeIn = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity:1 ;
  }
`;
const flyAnimationMobile = keyframes`
  0% {
    transform: translate(-1000px, -40%) scale(0.08) ;
    opacity: 1;
  }
  70% {
    transform: translate(-20%, -20%) scale(1) ;
    opacity: 1;
  }
  85% {
    transform: translate(-0%, -5%) scale(1.5) ;
    opacity: 1;
  }
  90% {
    transform: translate(-0%, -5%) scale(2) ;
    opacity: 1;
  }
  100% {
    transform: translate(1000px, -300px) scale(4) ;
    opacity: 1;
  }
`;
const flyAnimation = keyframes`
  0% {
    transform: translate(-1000px, 0px) scale(0.3) scaleX(-1);
    opacity: 1;
  }


  76% {
    transform: translate(10px, -20px) scale(3);
    opacity: 1;
    background-color: rgba(255, 0, 0, 0);
    border-radius: 100%;
  }

  85% {
    transform: translate(100px, -80px) scale(3);
    opacity: 1;
    background-color: rgba(255, 0, 0, 0);
    border-radius: 100%;
  }

  100% {
    transform: translate(2000px, -808px) scale(4);
    opacity: 1;
  }
`;
const Bird = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 30%;
  background-repeat: no-repeat;
  bottom: 10%;
  animation: ${flyAnimation} 15s infinite;
  z-index: 2;
  @media (max-width:800px){ 
    animation:${flyAnimationMobile} 15s infinite;
  }
  

`;
const Titulo = styled.h1`
  position: absolute;
  top: 30%;
left: 0%;
  width: 40px;
  color: #f8f9f8;
   opacity: 1;
  box-shadow: inset black;
  font-family: Open Sans, sans-serif;
  font-size: large;
  font-weight: 800px;
  animation: ${fadeIn} 1s forwards;
  z-index: 2; 
  text-shadow: 0 0 3px #d55b3e 0 0 5px #f8f9f8; 

  
`;
const Subtitulo = styled.div`
 position: absolute;
  top: 60%;
   width: 40%;
  color: #00aaa0;
  opacity: 0.9;
  box-shadow: inset black;
  font-family: Open Sans, sans-serif;
  font-size: 0px;
  animation: ${fadeIn} 1.2s forwards;
  animation-delay: 3s;
  z-index: 1;
  left: 5px;
  opacity:0;

  `
const Arbol = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(50px);
  transform: translateY(-80px);
  background-image: url(${arbol});
  background-size: 100% 100%;
  background-repeat: no-repeat;
   right: 5%;
margin-bottom: 0%;
padding-top: 0%;
right: 0px;
z-index:8;
 
`;
const Container = styled.div`
  position: relative;
  background-image: url(${img0});
  overflow: hidden;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-size: 100% 100%;
  padding-bottom: 2%;
  background-color: black;

    @media (max-width:1300px) {
      height: 100%;
       ${Titulo}{
      font-size: 400%;
      left:10%;
      top:50%;
      width:800px;
    }
    ${Subtitulo}{
      font-size: 190%;
      left:42%;
      top:80%;
      width:500px;
    }
    ${Bird}{
      background-size: 10%;
    }
  ${Arbol}{
width: 30%;
top: 30%

  }
  }
     @media (max-width: 992px) {
       ${Titulo}{
      font-size: 60px;
      left:2%;
      top:40%;
      width:100%;
    }
    ${Subtitulo}{
      font-size: 20px;
      left:2%;
      top:80%;
      width:300px;
    }
    ${Arbol}{
      top: 30%;
    }}
    @media (max-width: 768px) {
     ${Titulo}{
      font-size: 200%;
      left:10%;
      top:70%;
      width:400px;
    }
    ${Subtitulo}{
      font-size: 150%;
      left:30%;
      top:85%;
      width:300px;
        }
    ${Arbol}{
      top: 30%;
        }
     }
     @media screen and (max-width: 475px)

      {
        background-image: url(${img0});
        baackground-size: 50% 50%;
        height: 30vh;
     ${Titulo}{
      font-size: 150%;
      top:60%;
      left:15%;
         }
    ${Subtitulo}{
      font-size: 100%;
      left:40%;
      top:80%;
      width:300px;
    }
    ${Arbol}{
      top: 50%;
      height: 60%;
      width: 60%;
      right:20%

        }
       }
  `;

const Direccion = styled.p`
  top:90%;
`

export default function Head() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos 
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpia el timeout en el desmontaje del componente
    return () => clearTimeout(timeout);
  }, []);

  

 
  return (
    <> {loading ? (
      <Spinner />
    ) : (
      <Container>
     <Titulo>Nido de Palabras</Titulo>
      <Arbol />
        <Bird>
          <Icon />
        </Bird>
        
        <Subtitulo> contenidos  </Subtitulo>
        <Direccion> contenidos  </Direccion>
      </Container>)
}
    </>
  );
}
