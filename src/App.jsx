import './App.css'
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/ItemListContainer'
import './css/main.css'

function App() {

  const saludo = "Hola, mundo!";
 
  return (
    <>
      <Header />
      <ItemListContainer saludo={saludo} prueba="prueba" />
    </>
  )
}

export default App
