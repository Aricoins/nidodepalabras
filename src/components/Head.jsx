import React from "react";
import styled, { keyframes } from "styled-components";
import url from "../assets/bosque.gif";
import Icon from "./Icon";
import styles from "./Head.css";

const Imagen = styled.img`
  width: 100%;
  height: 600px;
  background-color: #fe9a17;
`;

const flyAnimation = keyframes`
  0% {
    transform: translate(-1000px, -100px) rotate(2deg) scale(0.3) ;
  opacity: 1
  }

   15% {
    transform: translate(-950px, 30px) rotate(2deg) scale(0.7) ;
  opacity:1

  }

 
  50% {
    transform: translate(-180px, 150px) rotate(-10deg) scale(2) ;
    opacity: 1;
    background-color: rgba(255, 0, 0, 0); /* Establece el fondo inicialmente transparente */
  }

   60% {
transform: translate(-200, 0px)rotate(-30deg) scaleX();
opacity: 1;
background-color: #e4c01c;
border-radius: 100%;
}
  65% {
transform: translate(-200, 0px)rotate(-30deg) scaleX();
opacity: 1;
background-color: #e4c01c;
border-radius: 100%;
  }
    66% {
transform: translate(-400, 0px)rotate(-30deg) scaleX();
opacity: 1;
border-radius: 100%;
  }
   70% {
transform: translate(-800, 0px)rotate(-30deg) scaleX();
opacity: 1;
background-color: rgba(255, 0, 0, 0); /* Establece el fondo inicialmente transparente */
}

75%{
transform: translate(-800px, 0px)scale(2);
opacity:1;
}
100%{
transform: translate(800px, -150px)scale(4);
opacity:1;
}
`;

const Bird = styled.div`
  position: absolute;
  top: 50px;
  right: 150px;
  animation: ${flyAnimation} 25s infinite;
`;

const fadeIn= keyframes`
  0%{

transition: traslate (-500, -500);

  }

  100%{

transition: traslate (0, 0);

  }

`
const Bird2 = styled.h1`
  position: absolute;
  top: 40px;
  right: -200px;
  width: 900px;
  color: #fafafe;
  box-shadow:inset blak ; 
 font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: oblique;
  animation: ${fadeIn} 2s normal;
`;

export default function Head() {
  return (
    <div>
      <Imagen src={url} />
   
      <Bird>
        <Icon className={styles.tamanio}></Icon>
            </Bird>
            <Bird2>
            <h1>Nido de palabras</h1>
            </Bird2>
    </div>
  );
}
