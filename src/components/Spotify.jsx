import styled from 'styled-components';
import img from "../../src/assets/cisne.webp"

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
const Contenedor = styled.div`
position: absolute;
left: 0;
right:0;
margin-top: 20%;
display: flex;
flex-direction:column;
  justify-content: center;
  align-items: center;
 background-color: #d55b3e;
width: 80%;
height: 100%;
padding: 10%;
`
const Iframe = styled.iframe`

   margin: 2%;
     border-radius:18px;
        z-index: 0;
        width:60%;
               ` 

const Img = styled.img`
   margin: auto;
   width: 50%;
  background-color: #d55b3e;
  align-self: center;
  justify-items: center;
  justify-self: center;
`
const H2 = styled.h2`
top:0px;
color: #d55b3e;
font-family: Verdana, Geneva, Tahoma, sans-serif

`

const Spotify = () => {
 

//    https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy
  return (<>
  <Contenedor> 
    <Iframe src="https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy?utm_source=generator"  frameBorder="0"  allow="autoplay; clipboardWrite; encryptedMedia; fullscreen; pictureInPicture" loading="eager"/>
 <H2>¡Pronto!</H2>
    <Img src={img} alt="Pronto, Al cisne salvaje"/>  

   
    
    </Contenedor>

   </>);
    
};

export default Spotify;
