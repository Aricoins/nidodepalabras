import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactSVG } from "react-svg";

import BackgroundImg from "../../src/assets/img1.webp";

const Imagen = styled.img`
  position: relative;
  width: 100%;
  border-radius: 1px;
`;

const flyAnimation = keyframes`
  0% {
    transform: translate(${window.innerWidth}px, -100px) rotate(0);
  }
  10% {
    transform: translate(0, ${window.innerHeight - 50}px) rotate(45deg);
  }
  40% {
    transform: translate(20%, 20%) rotate(0);
  }
  60% {
    transform: translate(-50px, 0) rotate(-45deg);
  }
  100% {
    transform: translate(-${window.innerWidth}px, -100px) rotate(0);
  }
`;

const returnAnimation = keyframes`
  0% {
    transform: translate(-${window.innerWidth}px, -100px) rotate(0);
  }
  25% {
    transform: translate(-50px, 0) rotate(-45deg);
  }
  50% {
    transform: translate(20%, 20%) rotate(0);
  }
  75% {
    transform: translate(0, ${window.innerHeight - 50}px) rotate(45deg);
  }
  100% {
    transform: translate(20px, 20px) rotate(0);
  }
`;

const flapWingsAnimation = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-20deg);
  }
`;

const Bird = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${flyAnimation} 6s forwards, ${returnAnimation} 6s 8s forwards;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 30px solid #ffdb58;
    position: absolute;
    z-index: 1;
  }

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 12px solid #d2691e;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-5px);
    z-index: 2;
  }

  .eye {
    width: 6px;
    height: 6px;
    background-color: #000;
    position: absolute;
    top: 5px;
    left: 30%;
    transform: translateX(-3px);
    border-radius: 50%;
    z-index: 2;
  }

  .wing {
    width: 20px;
    height: 60px;
    background-color: #ffdb58;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-10px);
    transform-origin: top;
    animation: ${flapWingsAnimation} 0.5s infinite alternate;
    z-index: 1;
  }

  .outline {
    width: 50px;
    height: 70px;
    border: 2px solid #000;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-25px);
    z-index: 0;
  }

  .trail {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: #00ff00;
    animation: trailAnimation 6s forwards, fadeOut 0.5s forwards;
    opacity: 0;
  }

  @keyframes trailAnimation {
    0% {
      transform: translate(${window.innerWidth}px, -100px);
    }
    10% {
      transform: translate(0, ${window.innerHeight - 50}px);
    }
    40% {
      transform: translate(20%, 20%);
    }
    60% {
      transform: translate(-50px, 0);
    }
    100% {
      transform: translate(-${window.innerWidth}px, -100px);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function Head() {
  return (
    <div>
      <Imagen src={BackgroundImg} />
      <Bird>
        <div className="eye"></div>
        <div className="eye" style={{ left: "70%" }}></div>
        <div className="wing"></div>
        <div className="outline"></div>
        <div className="trail"></div>
      </Bird>
    </div>
  );
}
