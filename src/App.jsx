import { useState, useEffect } from 'react'
import './css/App.css'
import { Header } from './components/Header'
import Products from './components/Products'
import Filter from './components/Filter'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
    .then(response => response.json())
    .then(json => setData(json.results))
  }, [])
  return (
    <>
      <Header/>
      <Filter></Filter>
      {/* <Products data={data}/> */}
    </>
  )
}

export default App
