import banner from "../assets/lvp.png"
import styled from "styled-components"
import react, {useEffect, useState} from "react";
import audio from "../assets/rie.mp3";
import Aos from "aos";
import "aos/dist/aos.css";


//import ScrollAnimation from "./ScrollAnimation"
const Contenedor = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
        align-items: center

 

`
const Reproductor= styled.div`
    
align-self: center

`
const Img = styled.img`
width:100%;
bottom:0px;

`
const H6 = styled.p`

font-size: 20px;
margin-top : 2%;
margin-left: 5%;
margin-right: 5%;
text-align: justify;
line-height: 60px;
    font-family: Open Sans, sans-serif;
    color:  #fcf4d9; 
padding: 5%;
	background: #00aaa0; 

  
    @media (max-width:600px){
        font-size: 12px;
    }`
 const LaVoz = ()=>{


    useEffect(() => { Aos.init({ duration: 2000 }); },[]);
  
    return(
<>
<Contenedor data-aos="fade-in">

<Img data-aos="fade-in" src={banner} alt="asda" />

<Reproductor>
        <audio controls>
      
        <source src={audio} type="audio/mp3" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
     
    </Reproductor>
<H6>La Voz de les Poetas son encuentros de poesía nacidos en Aislamiento en abril de 2020 y organizado por Nido de Palabras; hoy, el espacio adquiere versatilidad de formatos (vivo, radio, podcast) y reune a escritores de distintas latitudes que declaman sus textos a viva voz.</H6>

</Contenedor> </>  )
}
export default LaVoz
