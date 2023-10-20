
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contenedor= styled.div`
 display: flex;
    flex-direction: row;
    background-color: #00aaa0;
    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s;
    
`
const Entrevistas = styled.div`
    width: 300px;
    height: 400px;
    margin:30px;
    padding:6px;
    background-color: #d55b3e;
    font-size: 14px;
margin-top : 2%;
text-align: justify;
line-height: 20px;
    font-family: Open Sans, sans-serif;
    color: #f8f9f8;
    border: 3px solid #f8f9f8;
    box-shadow: 5px 5px 3px 3px rgba(0,0,0,0.5);
    &:hover{ background-color: #f8f9f8;
border-color: #d55b3e;
color: #d55b3e;
transition: all 1ms linear; };
    @media (max-width:600px){
        font-size: 12px;
    }


`
const Poesia = styled.div`
width: 300px;
    height: 400px;
    margin:30px;
    padding:6px;
    background-color: #d55b3e;
    font-size: 14px;
margin-top : 2%;
text-align: justify;
line-height: 20px;
font-family: Open Sans, sans-serif;
    color: #f8f9f8;
    border: 3px solid #f8f9f8;
    box-shadow: 5px 5px 3px 3px rgba(0,0,0,0.5);
    &:hover{ background-color: #f8f9f8;
        border-color: #d55b3e;
color: #d55b3e;
transition: all .2ms ease-in-out; };


    @media (max-width:600px){
        font-size: 12px;
    }
`
const Resernias= styled.div`
width: 300px;
    height: 400px;
    margin:30px;
    padding:6px;
    background-color: #d55b3e;
    font-size: 14px;
margin-top : 2%;
text-align: justify;
line-height: 20px;
font-family: Open Sans, sans-serif;
    color: #f8f9f8;
      border: 3px solid #f8f9f8;
    box-shadow: 5px 5px 3px 3px rgba(0,0,0,0.5);
    
&:hover{ background-color: #f8f9f8;
    border-color: #d55b3e;
color: #d55b3e;
transition: all .2ms ease-in-out; };
    @media (max-width:600px){
        font-size: 12px;
    }   
`
const H2 = styled.h2`
    text-align: center;
   
`
const Columnas = ()=>{
    useEffect(() => { Aos.init({duration: 2000}); }, []);

return (

<Contenedor >
 
<Entrevistas data-aos="fade-in" >
<H2 data-aos="fade-down">Entrevistas</H2>
<p>Nos acercamos a escritores de obras que nos encuentran.</p>
<br/>
<iframe width="250" height="200" src="https://www.youtube.com/embed/g0nZSb3ekl8?si=_cVrqe7GEHHe2XsO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Entrevistas>
<Poesia data-aos="fade-in">
<H2 data-aos="fade-down">Poesía</H2>
<p>«Se cae el aire y se vuelve espejo celeste del todo-sol que no teme» 

Poesía.</p>
</Poesia>
<Resernias data-aos="fade-in">
<H2 data-aos="fade-down">Reseñas</H2>
<p>Compañeros, despertadores, cosquilleros, alumbradores, intrigantes, lacrimógenos, abrazadores... los libros son ventanas hacia ese lugar de misterio que es cada unx. Crítica y reseña de otras producciones.</p>
</Resernias>



</Contenedor>

)
}

export default Columnas