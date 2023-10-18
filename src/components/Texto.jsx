
import React from "react";
import styled from "styled-components";

/*
const Sti = styled.article`
    display: flex;
    flex-direction: row;
    font-size: 300%;
    font-family: Arial;
    text-align: center;
    background-color: #EFEFEF;
    padding: 2rem;
    max-width: 50rem;
    margin: auto;
    text-transform: none;
    align-items: left;
    align-content: right;
    justify-content: right;
     background-position: center;
    width: 100px;
`

const Sti3 = styled.nav`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 150%;
    background-color: #05d075;
    list-style-type: none;
   padding: 20px;

    `

const Sti2 = styled.div`
display: flex;
margin-bottom: 10px;
border-radius: 50px;
padding: 5px;
font-size: 200%;
background-color: #000503;
color: #86e989;
`
const Sti4 = styled.h3`
    font-size: 30px;
    text-align: center;
`*/
const Parrafo = styled.p`
    
font-size: 20px;
margin-top : 100px;
margin-left: 200px;
margin-right: 200px;
text-align: justify;
line-height: 60px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fafaf8;

    @media (max-width:600px){
        font-size: 12px;
    }
`
function Texto(props) {

return(
    <>

<Parrafo className="wow"> Bienvenid@s a <b>Nido de Palabras</b>, espacio para lo dicho, lo por decir y hogar de indecibles. 
<br/> Acá hay cosas originales, variadas y tal vez divertidas alrededor de la Literatura.

Desde entrevistas inéditas hasta poesía libre; nuestro objetivo es 
<b> inspirar y conectar a través de palabras</b>. 
<br/>También podrás escuchar entrevistas con escritores, música y poesía <b>dicha por autores</b>.
Creemos que las palabras pueden inspirar y construir mejores tiempos. Queremos que también puedan ser nido.

</Parrafo>




</>
)
}

export default Texto
