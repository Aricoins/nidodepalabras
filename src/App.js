import React, {useEffect, useState} from 'react';
import styled, { createGlobalStyle, keyframes} from 'styled-components';
import Head from './components/Head.jsx';
import Nav from "./components/Navbar.jsx"
import {Routes, Route, useLocation, useNavigate, useParams} from 'react-router-dom';
import Texto from "./components/Texto.jsx";
import Spotify from "./components/Spotify.jsx"
import LaVoz from './components/LaVoz.jsx';
import Columnas from "./components/Columnas.jsx";
import bird from "./assets/arbol.png"


const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateBackAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Spinner = styled.div`
  
padding: 50px;
  width: 90px;
  height: 90px;
  left : 40%;
   border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #8ed2c9  rgb(0, 170, 160)  transparent;
  box-sizing: border-box;
  animation: ${rotateAnimation} 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent  #d55b3e #d55b3e;
    width: 60px;
    height: 60px;
    background-image: ${bird};
    background-size: 20px 20px;
    border-radius: 50%;
    animation: ${rotateBackAnimation} 0.5s linear infinite;
    transform-origin: center center;
  }
`;




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
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  // Simula una carga de datos 

 const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpia el timeout en el desmontaje del componente
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>{loading ? (
      <Spinner />
    ) : (
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
          </Routes>)}
         

    </>
  );
}

export default App;
