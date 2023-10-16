import React, {useEffect, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from './components/Head.jsx';
import Nav from "./components/Navbar.jsx"
import {Routes, Route, useLocation, useNavigate, useParams} from 'react-router-dom';
import Texto from "./components/Texto.jsx";
import Spotify from "./components/Spotify.jsx"

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0px;
    padding: 0;
    width: 100%;
    background-color: black;
  }
`;


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
          <Routes>
 
          <Route path='/' element={<><Head/><Nav /><Texto/><Spotify/></>} />
          <Route path='/inicio' element={<Head/>} />
          {/* <Route path='/poetica' element={<Poetica/>}/>
          <Route path="/favorites" element={<Estetica/>}/>
          <Route path='/Interlibres' element={ 
          <Interlibres
                  />
          } /> */}
          </Routes>
   

    </>
  );
}

export default App;
