import React from "react";
import styled, { keyframes } from "styled-components";
import img0 from "../assets/img0.webp";
import img1 from "../assets/img2.webp";
import Icon from "./Icon";
import styles from "./Head.css";

const bAnimation = keyframes`
0% {
  background-image: url("${img1}");
}
94% {
  background-image: url("${img1}");
}
95% {
  background-image: url("${img0}");
}
100% {
  background-image: url("${img0}");
}
`;

const Imagen = styled.img`
  width: 100%; /* Ocupa el ancho completo de la pantalla */
  height: 90vh; /* Ocupa la altura completa de la pantalla */
  object-fit: cover; /* Ajusta el tamaño manteniendo la relación de aspecto */
 left: 0;
z-index: 2;
animation: ${bAnimation} 15s 5s forwards;
background-size: 100%;
 
`;

const flyAnimation = keyframes`

  0% {
    transform: translate(60px, -80px) scale(0.3) scaleX(-1) ;
  opacity: 1
  }
  
  10%{
transform: translate(-650px, 0px) rotate(25deg) scale(0.8) scaleX(-1);
opacity:1;
background-color: rgba(255, 0, 0, 0);}

13%{
transform: translate(-700px, -50px)rotate(20deg)  scale(0.8) scaleX(-1) ;
opacity:1;
background-color: rgba(255, 0, 0, 0);}
  15%{
transform: translate(-1050px,-80px)scaleX(1)scale(0.8)rotate(-20deg) ;
opacity:1;
background-color: rgba(255, 0, 0, 0);}
20%{
transform: translate(-1100px, -90px)scaleX(1)scale(0.8)rotate(-20deg) ;
opacity:1;
background-color: rgba(255, 0, 0, 0);}


94%{
transform: translate(-300px, 50px)scale(4);
opacity:1;
background-color: rgba(255, 0, 0, 0); 
border-radius: 50%
}

95%{
transform: translate(-300px, 50px)scale(4);
opacity:1;
background-color: #f7fbf673;  
border-radius: 50%
}

96%{
transform: translate(-300px, 50px)scale(4);
opacity:1;
background-color: rgba(255, 0, 0, 0);

border-radius: 100%;

}

100%{
transform: translate(1900px, -200px)scale(9);
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
  position:absolute;
  top: 20px;
  right: 10%;
  animation: ${flyAnimation} 15s 5s forwards;
z-index: 1;
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
  top: 300px;
  left: 200px;
   width: 900px;
  color: #f8f9f8;
  box-shadow:inset black ; 
 font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 80px;
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
`;


const Container = styled.div`
animation: ${bbAnimation} 40s infinite;
z-index:1 ;
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
    <Imagen />
      <Bird>
     <Icon className={styles.tamanio}></Icon>
     </Bird>
     
     </Container>
  );
}
