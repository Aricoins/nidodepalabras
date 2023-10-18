import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'




const Fijo = styled.nav`
    position: fixed;
       z-index: 1000;
    bottom: 10%;
   background-color: #d55b3e;
   width:100%;
   left: 0%;
 
`
const Navigator= styled.div`
background-color:  #00aaa0;

opacity: 1;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
 @media screen and (max-width : 700px) {
  flex-direction: column;
  
}
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-decoration: none;
    color: #e4d8d8;
  background-color:  #00aaa0;
  width:15%;
  display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
  z-index: 7;
   &active{
    background-color: #00aaa0;
    font-weight: bold;
    color: #e4d8d8;
    
  }
  :hover{
    width: 100%;
  }
  `
const Botones = styled.button`
border: #d55b3e solid 2px ;
color:  #d55b3e;
background: #fcf4d9;
width: 100%;
height: 2%;
font-size: small;
text-align: center;
display: inline-block;
margin: 2px;
  border-radius: 15% 0% 15% 0%;
  transition-duration: 0.5s;
  z-index: 7;
    &:active{ 
     
color: #00aaa0; }
  :hover{
    width: 100%;
    background: #8ed2c9; 
    color: #d55b3e;
  }
 
      
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