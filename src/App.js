import React from 'react';
// import ComponentesS from './ComponentesS.js';
// import Sti from './Texto.jsx';
import Texto from './components/Texto.jsx';
import Noticias from './components/noticias/rssnews.jsx'
import Head from "./components/Head.jsx"
import Estados from './components/noticias/estados.jsx';


function App() {
  return (
    <>
    <div className='App'>
      <Head/>
     <Texto palabra="acá puede ir un dato "/>
    <Noticias />
    <Estados/>
  
     </div>
     </> 
      );
}

export default App;
