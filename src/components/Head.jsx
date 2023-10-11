import React from "react";
import styled, { keyframes } from "styled-components";
import img0 from "../assets/7SYx.gif";
import arbol from "../assets/arbol.png";
import Icon from "./Icon";

  

const Imagen = styled.div`
  width: 800px; /* Ocupa el ancho completo de la pantalla */
  height: 600px; /* Ocupa la altura completa de la pantalla */
background-image: url(${arbol});
background-size: 80%;
background-repeat: no-repeat;
background-position: center;
margin-top: -100px;
position: absolute;
bottom: 0px;
top: 520px;

`;
const flyAnimation = keyframes`

  0% {
    transform: translate(200px, 300px) scale(0.3) scaleX(-1) ;
  opacity: 1
  }
  
  20%{
transform: translate(-95px, 400px) rotate(25deg) scale(0.8) scaleX(-1);
opacity:1;
background-color: rgba(255, 0, 0, 0);}


30%{
transform: translate(-400px, 450px)scaleX(1)scale(0.8)rotate(-20deg) ;
opacity:1;
background-color: rgba(255, 0, 0, 0);}


45%{
transform: translate(50px, 500px)scaleX(1)scale(1)rotate(0deg) ;
opacity:1;
background-color: rgba(255, 0, 0, 0);}



76%{
transform: translate(200px, 500px)scale(3);
opacity:1;
background-color: rgba(255, 0, 0, 0);

border-radius: 100%;

}

100%{
transform: translate(1900px, -800px)scale(4);
opacity:1;
}` 
const flyAnimationMobile = keyframes`
  0% {
    transform: translate(calc(-1 * var(--screen-width)), calc(-1 * var(--screen-height))) rotate(2deg) scale(0.1);
    opacity: 1;
  }

  50% {
    transform: translate(calc(0 * var(--screen-width)), 60px) rotate(-5deg) scale(3);
    opacity: 1;
  }

  75% {
    transform: translate(calc(0 * var(--screen-width)), 20px) rotate(-14deg) scale(4);
    opacity: 1;
  }

  100% {
    transform: translate(calc(5 * var(--screen-width)), 500px) rotate(-30deg) scale(2);
    opacity: 1;
  }
`;
const Bird = styled.div`
  --screen-width: 100vw;
  --screen-height: 100vh;
  top: 20px;
  right: 10%;
  animation: ${flyAnimation} 15s infinite;

  @media (max-width: 600px) {
     animation: ${flyAnimationMobile} 10s infinite;
  }
`;

const fadeIn= keyframes`
  0%{
transition: traslate (-500, -500);
  }
  100%{
transition: traslate (0, 0);
  }
`
const Titulo = styled.h1`
  position: absolute;
  top: 820px;
  left: 600px;
  bottom:0;
   width: 900px;
  color: #f8f9f8;
  box-shadow:inset black ; 
 font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 90px;
  animation: ${fadeIn} 2s normal;
`;
const Subtitulo= styled.div`
 position: absolute;
 top: 450px;
  left: 350px;
   width: 1000px;
  color: #1ef302;
  height: 200px;
  font-size: 50px;
opacity:0.7`

/* 
const bbAnimation = keyframes`
  0% {
    background-color: #f0d50973;  
  //  background: linear-gradient(0, #e7f4f4 0%, #c3e0ce 25%, #3ae6c1 50%, #05ccf9 75%, #030c75 100%);
  }
  25% {
    background-color: #38f40973; 
  //  background: linear-gradient(0, #80f3f3 0%, #65ee9a 25%, #9af3e0 50%, #73d3e8 75%, #0a19c6 100%);
  }

   50% {
    background-color: #f49e09e8; 
 //background: linear-gradient(0, #80f3f3 0%, #65ee9a 25%, #9af3e0 50%, #73d3e8 75%, #0a19c6 100%);
  }
   75% {
    background-color: #020a0073; 
  //  background: linear-gradient(0, #80f3f3 0%, #65ee9a 25%, #9af3e0 50%, #73d3e8 75%, #0a19c6 100%);
  }
   100% {
    background-color:  #f0d50973; }
`; */


const Container = styled.div`
background-image: url(${img0});
background-size: 100%;
height: 1000px;
width: 100%;
z-index: 0;
overflow: hidden;
background-repeat: no-repeat;
  

  @media (max-width: 600px) {
    ${Imagen} {
      width: 200%;
      height: 50%;
      margin-bottom: 400px;
      z-index: 0
    }

    ${Titulo} {
      font-size: 40px;
      top: 150px;
      left: 50px;
      width: auto;
    }

    ${Subtitulo} {
      font-size: 30px;
      top: 250px;
      left: 100px;
    }
    ${Bird} {
      font-size: 30px;
      top: 250px;
      left: 300px;
    }
  }
`;



export default function Head() {
  return (

     <Container>
     <Bird>
     <Icon ></Icon>
     </Bird>
      <Titulo>Nido de Palabras</Titulo>
     <Imagen  />
    
      
     </Container>

 
  );
}
