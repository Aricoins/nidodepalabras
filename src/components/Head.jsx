import React from "react";
import styled, { keyframes } from "styled-components";
import url from "../assets/img2.png";
import Icon from "./Icon";
import styles from "./Head.css";

const Imagen = styled.img`
  width: 100%; /* Ocupa el ancho completo de la pantalla */
  height: 90vh; /* Ocupa la altura completa de la pantalla */
  object-fit: cover; /* Ajusta el tamaño manteniendo la relación de aspecto */
  background: rgb(34,193,195);
background: linear-gradient(40deg, #e9eeee 40%, #f8c703 100%);
left: 0;
 
`;

const flyAnimation = keyframes`
  0% {
    transform: translate(-1000px, -80px) rotate(2deg) scale(0.1) ;
  opacity: 1
  }
  65%{
transform: translate(-300px, 0px)scale(3);
opacity:1;
background-color: rgba(255, 0, 0, 0);}

  75%{
transform: translate(-300px,50px)scale(4);
opacity:1;
background-color: rgba(255, 0, 0, 0);}

84%{
transform: translate(-300px, 50px)scale(4);
opacity:1;
background-color: rgba(255, 0, 0, 0);}

86%{
transform: translate(-300px, 50px)scale(4);
opacity:1;
background-color: #f7fbf673;  
border-radius: 50%
}

90%{
transform: translate(-300px, 50px)scale(4);
opacity:1;
background-color: rgba(255, 0, 0, 0);

border-radius: 100%;

}

100%{
transform: translate(900px, -200px)scale(9);
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

const Container = styled.div`
  @media (max-width: 600px) {
    ${Imagen} {
      width: 200%;
      height: 50%;
      margin-bottom: 400px;
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
    <Imagen src={url} />
      <Bird>
     <Icon className={styles.tamanio}></Icon>
     </Bird>
     
     </Container>
  );
}
