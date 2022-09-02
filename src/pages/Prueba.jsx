import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';

function Prueba(){

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://blooming-hamlet-58529.herokuapp.com/prueba')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  
  return (
    <div className="App">
      <p>La informacion obtenida es: {data}</p>
      <Footer/>
    </div>
  );
}

export default Prueba;