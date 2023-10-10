
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import SearchBar from "./Searchbar"
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
z-index:1;
 top: 0;
 width: 100%;
 background-color: #05061d

`
const Navigator= styled.div`
position: fixed;
left: 0%;
background-color: #05061d ;
padding: 1%;
opacity: 0.9;
align-items: center;
display: flex;
   justify-content: center;
   width: 100%;
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
height: 3em;
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
       <Botones> <StyledLink to="/create"> Create </StyledLink> </Botones>
       <Botones> <StyledLink to="/home">Home</StyledLink></Botones>
       <Botones> <StyledLink to="/favorites">Favorites</StyledLink></Botones>
       <SearchBar  searchUser={props.searchDriver} />
       </Navigator>
       </Fijo> </>
              )
}