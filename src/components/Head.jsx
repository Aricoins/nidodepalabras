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
    transform: translate(-1000px, 0) rotate(2deg) ;
  
  }

  10%{

transform: traslate ( 400px, 50px);


  }
  35% {
    transform: translate(20px, 0px) rotate(30deg);

  }
  
 40% {

    transform: translate(0, 0) scaleX(-1);
  }
  80% {
background-color: red;
transform: translate(0, 0)rotate(-30deg) scale(1.5);
}

  100% {
background-color: green;
transform: translate(500px, -500px);
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
