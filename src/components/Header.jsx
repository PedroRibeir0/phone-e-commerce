import {BsFillCartFill} from 'react-icons/bs'

export function Header(){
    return(
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
            <div className="main-buttons">
              <button className='read-more-button'>Read more</button>
              <button className='main-card-button'><BsFillCartFill/> Add to card</button>
            </div>
          </div>
          <picture className='main-image-container'><img className='main-product-image' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/810/555/products/6-removebg-preview-321-ce561aa2327002980616757166928261-640-0.webp" alt="" /></picture>
        </section>
      </header>
    )
}