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

  return (
    <div className='App'>
      <h1>Tu consejo personalizado</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h1>{consejo}</h1>
        </div>
      )}

    </div>
  )
}

export default App
