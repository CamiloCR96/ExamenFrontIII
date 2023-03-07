import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [user, setUser] = useState({
    nombre: '',
    cancionFav: '',
    cantanteFav: ''
})
const [show, setShow] = useState(false)
const [err, setErr] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
    
    if(user.nombre.length >= 3 && user.nombre.charAt(0) !== " " &&  user.cancionFav.length >=6) {
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
        
    }

}

  return (
    <>
    <div className="App">
     
     <form onSubmit={handleSubmit}>
            <label>Nombre completo </label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/><br />
            <label>Cancion favorita </label>
            <input type="text" value={user.cancionFav} onChange={(e) => setUser({...user, cancionFav: e.target.value})}/><br />
            <label>Cantante de tu cancion favorita </label>
            <input type="text" value={user.cantanteFav} onChange={(e) => setUser({...user, cantanteFav: e.target.value})}/><br />
            <button>Enviar</button><br /><br />
            {err && 'Por favor chequea que la informacion sea correcta'}
        </form>
        
        {show  && <Card nombre={user.nombre} cancionFav={user.cancionFav} cantanteFav={user.cantanteFav} />}  
    </div>
    </>
  )
}

    

export default App
