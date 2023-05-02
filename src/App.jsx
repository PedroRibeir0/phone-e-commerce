import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
    .then(response => response.json())
    .then(json => setData(json.results))
  }, [])
  return (
    <>
      <header>
        <div className="fixed">
          <span className="logo">Ecommerce</span>
          <ul className="menu">
            <li className='menu-opt'>Home</li>
            <li className='menu-opt'>All products</li>
            <li className='menu-opt'>Acount</li>
            <li className='menu-opt'>Cart(0)</li>
          </ul>
        </div>
        <section className='main-product'>
          <div className="main-info">
            <h1>Iphone 14</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rem unde repellendus ut corporis illum ea, natus quam, nisi tempora perspiciatis repudiandae iste consequatur.</p>
            <button>Read more</button>
            <button>Add to card</button>
          </div>
          <img src="https://d2r9epyceweg5n.cloudfront.net/stores/002/810/555/products/6-removebg-preview-321-ce561aa2327002980616757166928261-640-0.webp" alt="" />
        </section>
      </header>
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
