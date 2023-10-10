import React from 'react';
// import ComponentesS from './ComponentesS.js';
// import Sti from './Texto.jsx';
import Texto from './components/Texto.jsx';
import Head from "./components/Head.jsx"
import Spotify from './components/Spotify.jsx';
import ComponentesS from './components/ComponentesS.js';
import styled from "styled-components"

const  Nav = styled.div`
width: 1200p;
height: 80px;
background-color: #05061d;
display: flex;
flex-direction: row;
align-content: row;
justify-content: space-around;
color: white;` 

const Ul = styled.ul`
display:flex;
font-family: Verdana, Geneva, Tahoma, sans-serif;
flex-direction: row;
font-size: 22px;
align-content: row;
margin: 5px;
` 

const Li = styled.li`
display:flex;
flex-direction: row;
align-content: row;
padding: 20px `

function App() {

  const dev = "<Dev/>"
  return (
    <>
    <div className='App'>
      <Head/>
      <Nav>
<Ul>
<Li> ! Inicio    </Li>
<Li>  ! Poética   </Li>
<Li>   ! Narrativa   </Li>
<Li>   ! Esotérica    </Li>
<Li>   !  InterLibres   </Li>
<Li>   ! dev</Li>
</Ul>

      </Nav>
      <Texto/>
      <Spotify/>
      <ComponentesS/>
  
   
      
     </div>

     
     </> 
      );
}

export default App;
