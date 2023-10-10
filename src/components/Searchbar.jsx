import styled from "styled-components";
import React from "react";
import { useState } from "react";


const Barra = styled.nav`
display: flex;
flex-direction: row;


/* padding: 5%;
padding-bottom: 6%;
border-radius: 10px;
border-color: black;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: end; */
`

const Input= styled.input`

border-color: black;
height: 3rem; 
`

const Boton = styled.button`
    background-color: black;
    color: #F45757ff;
    width: 30%;
    height: 3em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8%;
    border: 0.08em solid black;
    transition-duration: 0.8s;
    cursor: pointer;
       :hover{
       background-color: white;
        border-color: #F45757ff;
        border-bottom: #09090e;
      color: #080000;
        cursor: pointer;
      }
`

export default function SearchBar({searchDriver}) {


  const [id, setId] = useState('');

  const ingreso = (event) => {
    setId(event.target.value);
  };
   const driverRandom = parseInt(Math.random() * (826 - 1) + 1);

  return (
    <Barra>
         <Input type='search' onChange={ingreso} />
         
        <Boton onClick={() => { searchDriver(id) }}>Agregar</Boton>
     //<Boton onClick={() => {searchDriver(driverRandom)}}> Al azar</Boton>
    </Barra>
  );
}