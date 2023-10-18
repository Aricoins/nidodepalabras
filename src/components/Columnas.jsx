
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contenedor= styled.div`
margin-top:2400px;
 display: flex;
    flex-direction: row;
    background-color: red;
    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s;
    
`
const Entrevistas = styled.div`
    width: 300px;
    height: 400px;
    margin:30px;
    padding:6px;
    background-color: #f6b207;
    font-size: 14px;
margin-top : 2%;
text-align: justify;
line-height: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;

    @media (max-width:600px){
        font-size: 12px;
    }


`
const Poesia = styled.div`
width: 300px;
    height: 400px;
    margin:30px;
    padding:6px;
    background-color: #f6b207;
    font-size: 14px;
margin-top : 2%;
text-align: justify;
line-height: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;

    @media (max-width:600px){
        font-size: 12px;
    }
`
const Resernias= styled.div`
width: 300px;
    height: 400px;
    margin:30px;
    padding:6px;
    background-color: #f6b207;
    font-size: 14px;
margin-top : 2%;
text-align: justify;
line-height: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;

    @media (max-width:600px){
        font-size: 12px;
    }   
`

const Columnas = ()=>{
    useEffect(() => { Aos.init({duration: 2000}); }, []);

return (

<Contenedor >
 
<Entrevistas data-aos="fade-in" >
<h2>Entrevistas</h2>
<p>Nos acercamos a escritores de obras que nos encuentran.</p>
<br/>
<iframe width="250" height="200" src="https://www.youtube.com/embed/g0nZSb3ekl8?si=_cVrqe7GEHHe2XsO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Entrevistas>
<Poesia data-aos="fade-in">
<h2>Poesía</h2>
<p>«Se cae el aire y se vuelve espejo celeste del todo-sol que no teme» 

Poesía.</p>
</Poesia>
<Resernias data-aos="fade-in">
<h2>Reseñas</h2>
<p>Compañeros, despertadores, cosquilleros, alumbradores, intrigantes, lacrimógenos, abrazadores... los libros son ventanas hacia ese lugar de misterio que es cada unx. Crítica y reseña de otras producciones.</p>
</Resernias>



</Contenedor>

)
}

export default Columnas