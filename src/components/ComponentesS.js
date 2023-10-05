import React from 'react'
import styled from 'styled-components'
const H3style = styled.div`
background-color: red;
 font-size: 90px;
 text-align: center;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 `
const H3styl = styled.div`
 background-color: blue;
 font-size: 40px;
 width: 200px;
 height: 200px;
 text-align: center;
 display: flex;
 flex-flow: row;
 text-align: center;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 padding: 1%;
`
const H3sty = styled.button`
 background-image: "../nidodepalabras/public/img/cisne.webp";
 font-size: 40px;
 width: 200px;
 height: 200px;
 text-align: center;
 display: flex;
 flex-flow: row;
 text-align: center;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 padding: 1%;
`
// let variable = document.querySelector(".boton")
// variable.addEventListener("click", function(){
//        console.log("algo")
// })

export default function ComponentesS(){

        return (
       <>
       <H3style> Plan Cé</H3style>
        <H3styl> La vanguardia del sentido</H3styl>
        <H3sty class="boton">Cisne</H3sty> 
        </>)
        }
