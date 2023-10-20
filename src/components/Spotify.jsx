import styled from 'styled-components';
import img from "../../src/assets/cisne.webp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../src/assets/logo.png.png";

/*.first-color { 
	background: #fcf4d9; 
}
	
.second-color { 
	background: #8ed2c9; 
}

.third-color { 
	background: #00aaa0; 
}

.fourth-color { 
	background: #d55b3e; */



const Logo = styled.img`
 width: 120px;
 height: 50px;
 left:0;
box-shadow: 5px 5px 3px 3px rgba(0,0,0,0.5);


   `
const Contenedor = styled.div`
font-family: Open Sand, sans-serif;
font-size: 5rem;
color:  #fcf4d9; 
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
 background-color: #d55b3e;
width: 100%;
padding: 0% 0% 20% 0%;
`
const Iframe = styled.iframe`
border: 4px solid #00aaa0;
         margin: 2%;
         border-radius:18px;
         z-index: 0;
         width: 400px;
         height: 80px;
         box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
               ` 

const Img = styled.img`
   width: 90%;
  background-color: #d55b3e;
  align-self: center;
  justify-items: center;
  justify-self: center;
`
const H2 = styled.h2`
top:0px;
color: #fcf4d9;
font-family: Open Sans, sans-serif;
font-size: 30px;

`
const Texto = styled.p`
    
font-size: 40px;
margin-top : 20px;
margin-left: 100px;
margin-right: 100px;
text-align: justify;
line-height: 40px;
font-family: Open Sans;
color: rgb(252, 244, 217 0.5);
font-weight: 400;

    @media (max-width:600px){
        font-size: 14px;
    }` 
const Spotify = () => {
 useEffect(() => {
   Aos.init({ duration: 2000 }); },[]);




//    https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy
  return (<>
  <Contenedor data-aos="fade-right"> 
 <Texto data-aos="flip-down"> Nido de Palabras Radio</Texto>
 
 <Logo data-aos="flip-left" src={logo} />
    <Iframe data-aos="fade-right" src="https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy?utm_source=generator"  frameBorder="0"  allow="autoplay; clipboardWrite; encryptedMedia; fullscreen; pictureInPicture" loading="default"/>
 <H2 data-aos="flip-down" >¡Pronto!</H2>
    <Img data-aos="fade-right" src={img} alt="Pronto, Al cisne salvaje"/>  

     
    </Contenedor>

   </>);
    
};

export default Spotify;
