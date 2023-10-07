// import React, { useState } from 'react';
// import Noticias from './rssnews';

// function Estados() {
//   const [person, setPerson] = useState({
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'running']
//   });

//   // Función para actualizar el nombre de la persona
//   const updateName = () => {
//     setPerson(prevState => ({
//       ...prevState,
//       name: 'Jane'
//     }));
//   };

//   // Función para agregar un nuevo pasatiempo a la lista
//   const addHobby = () => {
//     setPerson(prevState => ({
//       ...prevState,
//       hobbies: [...prevState.hobbies, 'swimming']
//     }));
//   };

//   return (
//     <div>
//         <Noticias />
//       <h2>{person.name}</h2>
//       <p>{person.age}</p>
//       <ul>
//         {person.hobbies.map(hobby => (
//           <li key={hobby}>{hobby}</li>
//         ))}
//       </ul>
//       <button onClick={updateName}>Update name</button>
//       <button onClick={addHobby}>Add hobby</button>
//     </div>
//   );
// }

// export default Estados;
