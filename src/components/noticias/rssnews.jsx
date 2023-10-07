// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./estilos.css"


// function Noticias() {
//   const [noticias, setNoticias] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await getNoticias();
//       setNoticias(result);
//     }
//     fetchData();
//   }, []);
// console.log(noticias.articles)
//   return (
//     <div className='noticiascontainer'>
//       <h1 className='noticiastitle'>Últimas noticias de libros</h1>
//       <ul className='noticiaslist'>
    
//         {noticias.map(noticia => (
//           <li className= "noticiasitem" key={noticia.title} noticias-item>
//             <h2>{noticia.title}</h2>
//             <p>{noticia.description}</p>
//             <a href={noticia.url}>Leer más</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// async function getNoticias() {
//   try {
//     const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=books&apiKey=520f72c49a08468d9b9fd008b3763e24");
//     const data = response.data.articles;
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default Noticias;

