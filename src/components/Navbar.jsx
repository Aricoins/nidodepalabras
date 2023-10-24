import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navigator= styled.div`
 position: fixed;
       z-index: 1000;
    bottom: 1%;
   width:100%;
   left: 0%;
   height: 11%;
background-color:  #00aaa0;

opacity: 1;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
 @media screen and (max-width : 700px) {
top: 100%;
  width: 90%;
}
`

const Botones = styled.button`
border: #d55b3e solid 4px ;
color:  #d55b3e;
background: #fcf4d9;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;  
align-content: center;
margin: 2px;
  border-radius: 0% 0% 0% 10%;
  transition-duration: 0.5s;
  z-index: 7;
  padding: 0px;
    transition-duration: 1s;
    width: 100%;
    &:active{ 
     
color: #00aaa0; }

 :hover{
  width: 100%;
} @media screen and (max-width : 700px) {

  font-size: 10px;
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
  &:hover{
    align-self: center;
    width: 100%;
  }
  `

export default function Nav (props){

    return(
        <>
      
        <Navigator>
       <StyledLink to="/inicio"> <Botones> Plan Cé </Botones> </StyledLink>
       <StyledLink to="/poetica"> <Botones> LVP </Botones> </StyledLink>
       <StyledLink to="/estética"> <Botones> Podcast </Botones> </StyledLink>
       <StyledLink to="/erótica"> <Botones> Ediciones </Botones> </StyledLink>
       <StyledLink to="/InterLibres"> <Botones> Interlibres </Botones> </StyledLink>
       </Navigator>
     </>
              )
}