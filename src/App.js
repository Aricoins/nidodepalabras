import React, {useEffect, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from './components/Head.jsx';
import Nav from "./components/Navbar.jsx"
import {Routes, Route, useLocation, useNavigate, useParams} from 'react-router-dom';
import Texto from "./components/Texto.jsx";
import Spotify from "./components/Spotify.jsx"
import LaVoz from './components/LaVoz.jsx';
import Columnas from "./components/Columnas.jsx";




const GlobalStyle = createGlobalStyle`
  html {
    margin: 0px;
    padding: 0;
    width: 100%;
    background-color:#8ed2c9;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
  }
  ` ;
function App() {
  const { pathname } = useLocation()
  /* const [access, setAccess] = useState(false)
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
 */

  return (
    <>
       <Routes>
           <Route path='/' element={
          <>
           <Head location /> <Texto/> 
          <Spotify/>
          <LaVoz data-aos="fade-in"/>      
          <Columnas/>
          <Nav />
          </>} />
           
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
