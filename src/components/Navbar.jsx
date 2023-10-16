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
    height: 5%;
    z-index: 1000;
    bottom: 10%;
   background-color: #05061d;
   width:100%;
   left:0;
 
`
const Navigator= styled.div`
left: 0%;
background-color: #05061d ;
padding: 1%;
opacity: 1;
align-items: center;
display: flex;
   justify-content: center;

 @media screen and (max-width : 700px) {
  flex-direction: column;
  
}
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-decoration: none;
  font-size: 20px ;
  color: black;
  background-color: #F45757ff;
  font-size: 80%;
  width:15%;
  display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
  z-index: 7;
   &active{
    background-color: #000703;
    font-weight: bold;
    color: #e4d8d8;
    
  }
  :hover{
    width: 100%;
  }
  `
const Botones = styled.button`
border-style: solid;
color: F8AAAAff;
background: #f4a111;
width: 100%;
height: 2em;
font-size: medium;
text-align: center;
font-size: x-large;
display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;

   
      
            @media  only screen and (max-width : 900px){
 
padding: 20px;
width: 100% }
`


export default function Nav (props){

    return(
        <>
        <Fijo>
        <Navigator>
       <StyledLink to="/inicio"> <Botones> Inicio </Botones> </StyledLink>
       <StyledLink to="/poetica"> <Botones> Poética</Botones> </StyledLink>
       <StyledLink to="/estética"> <Botones> Estética </Botones> </StyledLink>
       <StyledLink to="/erótica"> <Botones> Erótica </Botones> </StyledLink>
       <StyledLink to="/InterLibres"> <Botones> Interlibres </Botones> </StyledLink>
       </Navigator>
       </Fijo> </>
              )
}