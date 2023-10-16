import React, {useEffect, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from './components/Head.jsx';
import Nav from "./components/Navbar.jsx"
import {Routes, Route, useLocation, useNavigate, useParams} from 'react-router-dom';
import Texto from "./components/Texto.jsx";
import Spotify from "./components/Spotify.jsx"
import ScrollAnimation from './components/ScrollAnimation.jsx';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0px;
    padding: 0;
    width: 100%;
    background-color:black;
  }
`;
const Button = styled.a`
  --accent-color: white;

  /* This renders the buttons above... Edit me! */
  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  &:hover {
    filter: brightness(0.85);
  }
` 

function App() {
  const [access, setAccess] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const {id} = useParams()
  const EMAIL = 'usuario@henrick.app';
  const PASSWORD = 'pass1234'

  function login({email, password}){
     if(email === EMAIL && password === PASSWORD){
        setAccess(true)
        navigate('/home')
     }
     else alert('Usuario o contraseña inválida')
  }
  useEffect(()=>{
    !access && navigate('/')
 },[access, navigate])

  return (
    <>
     
      <GlobalStyle />
      <ScrollAnimation>
          <Routes>
 
          <Route path='/' element={<><ScrollAnimation></ScrollAnimation><ScrollAnimation><Head/></ScrollAnimation><ScrollAnimation><Nav /></ScrollAnimation><ScrollAnimation><Texto/></ScrollAnimation> <ScrollAnimation><Spotify/></ScrollAnimation></>} />
          
          <Route path='/inicio' element={<Head/>} />
          {/* <Route path='/poetica' element={<Poetica/>}/>
          <Route path="/favorites" element={<Estetica/>}/>
          <Route path='/Interlibres' element={ 
          <Interlibres
                  />
          } /> */}
          </Routes>
          </ScrollAnimation>
   

    </>
  );
}

export default App;
