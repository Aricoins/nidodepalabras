
import React from "react";
import styled from "styled-components";

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
`

function Texto(props) {

return(
<>

<Sti><h1>La voz de lxs poetas</h1></Sti>
<Sti4> www.nidodepalabras.online </Sti4>
<div className="lista">
    <Sti3>
    <Sti2>Voces</Sti2> 
    <Sti2>Bios</Sti2>
    <Sti2>Eventos</Sti2>
    <Sti2>Antología</Sti2></Sti3>
{props.palabra} 
</div>
</>
)
}

export default Texto
