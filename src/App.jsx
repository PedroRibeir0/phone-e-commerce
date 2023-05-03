import { useState, useEffect } from 'react'
import './css/App.css'
import { Header } from './components/Header'

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
      <ul className='products'>
        {data.map(item=>{
          return (
            <li key={item.id} className='product-container'>
              <h4>{item.title}</h4>
              <img className='phone-image' src={item.thumbnail} alt="" />
              <h3>R$ {(item.price).toFixed(2)}</h3>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
