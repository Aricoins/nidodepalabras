import React from "react";
import styled, { keyframes } from "styled-components";
import url from "../assets/img1.webp";
import Icon from "./Icon";
import styles from "./Head.css";

const Imagen = styled.img`
  width: 100%;
`;

const flyAnimation = keyframes`
  0% {
    transform: translate(-1000px, 200px) rotate(2deg) ;
  
  }

  2%{

transform: traslate ( 400px, 200px);


  }
  20% {
    transform: translate(20px, 220px) rotate(-10deg) scale(2) ;

  }
  
 40% {
  transform: translate(20px, -100px)scale(0.5);
  }
   50% {
  background:0;
  border-radius: 50%;
    transform: translate(-800px, -50px)rotate(30deg) scaleX(-1);
  }
 51% {
  background:0;
  border-radius: 50%;
    transform: translate(-500px, 0px)rotate(30deg) scaleX(-1);
  }
  80% {
transform: translate(-200, 200)rotate(-30deg) scale(2);
opacity: 1;
}

  81% {
background-color:""; }
100%{
transform: translate(500px, -200px);
opacity:1;
}
`;

const Bird = styled.div`
  position: absolute;
  top: 50px;
  right: 150px;
  animation: ${flyAnimation} 35s infinite;
`;

export default function Head() {
  return (
    <div>
      <Imagen src={url} />
      <Bird>
        <Icon className={styles.tamanio}></Icon>
      </Bird>
    </div>
  );
}
