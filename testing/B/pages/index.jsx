import { useState } from 'react';

function Header({ title }) {
   return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
   const [likes, setLikes] = useState(0);

   function handleClick() {
      setLikes(likes + 1);
   }

   const names = ['Plinio', 'José', 'Rodrigues', 'Mourão'];

   return (
      <div>
         <Header title="testing" />
         <ul>
            {
               names.map((name) => (
                  <li key={name}>{name}</li>
               ))
            }
         </ul>

         <button onClick={handleClick}>Like ({likes})</button>
      </div>
   );
}