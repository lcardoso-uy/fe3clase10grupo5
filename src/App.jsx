import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [consejo, setConsejo] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setConsejo(data.slip.advice);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error al obtener una respuesta - ", error);
      });

  }, [])

  function handlerConsejo(){
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setConsejo(data.slip.advice);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error al obtener una respuesta - ", error);
      });
  }

  return (
    <div className='App'>
      <h1>Tu consejo personalizado</h1>
      <p>   </p>      
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h1>{consejo}</h1>
          <p>   </p>
          <button onClick={handlerConsejo}>Nuevo consejo</button>
        </div>
      )}
    </div>
  )
}

export default App
