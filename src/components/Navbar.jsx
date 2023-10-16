import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

/*
--off-red-rgb: #F10505ff;
--red-cmyk: #F32E2Eff;
--bittersweet: #F45757ff;
--light-coral: #F68181ff;
--melon: #F8AAAAff;
--tea-rose-red: #F9D3D3ff;
--white: #FBFCFCff;
*/


const Fijo = styled.nav`
    position: fixed;
    height: 10px;
    z-index:1;
    bottom:10%;
   background-color: #05061d;
   width:100%;
 
`
const Navigator= styled.div`
left: 0%;
background-color: #05061d ;
padding: 1%;
opacity: 0.9;
align-items: center;
display: flex;
   justify-content: center;
 @media screen and (max-width : 700px) {
  flex-direction: column;
  
}
`
const Botones = styled.button`
border-style: solid;
border-color: #FBFCFCff;
color: F8AAAAff;
background: #F45757ff;
width: 15%;
font-size: medium;
text-align: center;
font-size: x-large;
display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
       :hover{
      color:black;
      width: 100%;
        background-color: #F8AAAAff;
        border-color: black;
        border-bottom: black;
        border-style: inset;
        -webkit-text-stroke: 1px white;
      
     }
          @media  only screen and (max-width : 900px){
 
padding: 20px;
width: 100% }


`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-width: 1px;
  border-color: #F8AAAAff;
  font-size: 20px ;
  color: black;
  background-color: #F45757ff;
  font-size: 80%;
 &active{
    background-color: #000703;
    font-weight: bold;
    color: #e4d8d8;
    
  }



  `
export default function Nav (props){

    return(
        <>
        <Fijo>
        <Navigator>
       <Botones> <StyledLink to="/inicio"> Inicio </StyledLink> </Botones>
       <Botones> <StyledLink to="/poetica">Poética</StyledLink></Botones>
       <Botones> <StyledLink to="/estetica">Estética</StyledLink></Botones>
       <Botones> <StyledLink to="/erotica">Erótica</StyledLink></Botones>
       <Botones> <StyledLink to="/interlibres">InterLibres</StyledLink></Botones>
   { 
       //  <SearchBar  searchUser={props.searchDriver} />
    }
       </Navigator>
       </Fijo> </>
              )
}