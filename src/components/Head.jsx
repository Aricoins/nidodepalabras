import React from "react";
import styled, { keyframes } from "styled-components";
import url from "../assets/giphy.gif";
import Icon from "./Icon";
import styles from "./Head.css";


const Imagen = styled.img`
  width: 90vw; /* Ocupa el ancho completo de la pantalla */
  height: 100vh; /* Ocupa la altura completa de la pantalla */
  object-fit: cover; /* Ajusta el tamaño manteniendo la relación de aspecto */
  background-color: #fe9a17;
  margin-left: 50px;
  
`;

const flyAnimation = keyframes`
  0% {
    transform: translate(-1000px, -100px) rotate(2deg) scale(0.1) ;
  opacity: 1
  }
 
  40% {
    transform: translate(-500px, 100px) rotate(-10deg) scale(3) ;
    opacity: 1;
    background-color: rgba(255, 0, 0, 0); /* Establece el fondo inicialmente transparente */
  }

65%{
transform: translate(-500px, 100px)scale(3);
opacity:1;
background-color: rgba(255, 0, 0, 0);  

}
76%{
transform: translate(-500px, 50px)scale(2);
opacity:1;
background-color: #1ef302;  
}

79%{
transform: translate(-500px, 50px)scale(2);
opacity:1;
background-color: #1ef302; 

border-radius: 100%;

}
81%{
transform: translate(-500px, 50px)scale(2);
opacity:1;
background-color: rgba(255, 0, 0, 0);

border-radius: 100%;

}

100%{
transform: translate(500px, -400px)scale(3);
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
  position: absolute;
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
      <Bird>
     <Icon className={styles.tamanio}></Icon>
     </Bird>
 <Imagen src={url} /> 
       <Titulo>Nido de Palabras</Titulo>
       <Subtitulo>nidodepalabras.online</Subtitulo>
           
    
    </Container>
  );
}
