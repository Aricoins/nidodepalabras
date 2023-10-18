import React from "react";
import styled, { keyframes } from "styled-components";
import img0 from "../assets/giphy.gif";
import arbol from "../assets/arbol.png";
import Icon from "./Icon";
import Nav from "./Navbar";
//Video by Taryn Elliott: https://www.pexels.com/video/a-video-footage-of-forest-trees-9682891/

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
  left: 50%;
  width: 80%;
  color: #f8f9f8;
  opacity: 0.9;
  box-shadow: inset black;
  font-family: Open Sans, sans-serif;
  animation: ${fadeIn} 1s forwards;
  z-index: 1; 
  text-shadow: 0 0 3px #f0c803, 0 0 5px #032803; 
  opacity: 0;
  
`;
const Subtitulo = styled.div`
 position: absolute;
  top: 60%;
  left: 80%;
  width: 60%;
  color: #00aaa0;
  opacity: 0.9;
  box-shadow: inset black;
  font-family: Open Sans, sans-serif;
  font-size: 400%;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 3s;
  z-index: 1;
  text-shadow: 0 0 3px #f0c803, 0 0 5px #032803; 
  opacity: 0;
  `
const Arbol = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(50px);
  transform: translateY(-50px);
  background-image: url(${arbol});
  background-size: 100% 100%;
  background-repeat: no-repeat;
   left: 5%;
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
  border-bottom-left-radius: 25%;
   @media (max-width:1300px) {
      height: 100%;
       ${Titulo}{
      font-size: 350%;
      left:40%;
      top:40%;
      width:800px;
    }
    ${Subtitulo}{
      font-size: 190%;
      left:50%;
      top:70%;
      width:500px;
    }
    ${Bird}{
      background-size: 10%;
    }
  ${Arbol}{
width: 30%

  }
  }
     @media (max-width: 992px) {
       ${Titulo}{
      font-size: 250%;
      left:40%;
      top:50%;
      width:400px;
    }
    ${Subtitulo}{
      font-size: 20px;
      left:40%;
      top:80%;
      width:300px;
    }
    ${Arbol}{
      top: 30%;
    }}
    @media (max-width: 768px) {
     ${Titulo}{
      font-size: 200%;
      left:40%;
      top:50%;
      width:400px;
    }
    ${Subtitulo}{
      font-size: 150%;
      left:50%;
      top:80%;
      width:300px;
    }
    ${Arbol}{
      top: 30%;
      background-size: 80% 80%;
    }
     }
     @media screen and (max-width: 475px) {
     ${Titulo}{
      font-size: 120%;
      top: 40%;
     
    }
    ${Subtitulo}{
      font-size: 100%;
      left:40%;
      top:60%;
      width:300px;
    }
    ${Arbol}{
      top: 30%;
      background-size: 80% 80%;
    }
  

     }
  `;

export default function Head() {
  return (
    <><Nav/>
      <Container>
      <Arbol />
        <Bird>
          <Icon />
        </Bird>
        <Titulo>Nido de Palabras</Titulo>
        <Subtitulo> contenidos </Subtitulo>
    
      </Container>
    </>
  );
}
