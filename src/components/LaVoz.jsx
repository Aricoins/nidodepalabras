import banner from "../assets/lvp.png"
import styled from "styled-components"
import react, {useState} from "react";
import audio from "../assets/rie.mp3";


//import ScrollAnimation from "./ScrollAnimation"
const Contenedor = styled.div`
position: absolute;
  top:450vh;
    display:flex;
    flex-direction: column;
    padding: 10%;
    height: 500%;;

`
const Reproductor= styled.div`
    
align-self: center

`
const Img = styled.img`
width:70%;
bottom:0px;
padding: 10%;
`
const H6 = styled.p`

font-size: 20px;
margin-top : 2%;
margin-left: 200px;
margin-right: 200px;
text-align: justify;
line-height: 60px;
    font-family: Arial, Helvetica, sans-serif;
    color:  #fcf4d9; 

	background: #8ed2c9; 

  
    @media (max-width:600px){
        font-size: 12px;
    }`
 const LaVoz = ()=>{

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };
  
    return(
<>
<Contenedor>

<Img src={banner} alt="asda" />

<Reproductor>
        <audio controls>
      
        <source src={audio} type="audio/mp3" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
     
    </Reproductor>
<H6>La Voz de les Poetas ha sido una serie de encuentros de poesía nacidos en Aislamiento en abril de 2020 y organizado por Nido de Palabras; hoy, el espacio adquiere versatilidad de formatos (vivo, radio, podcast) y reune a escritores de distintas latitudes que declaman sus textos a viva voz.</H6>

</Contenedor> </>  )
}
export default LaVoz
