import {BsFillCartPlusFill} from 'react-icons/bs'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

export default function Products(props){
    const data = props.data
    return (
        <ul className='products'>
        {data.map(item=>{
          return (
            <li key={item.id} className='product-container'>
              <h4>{item.title}</h4>
              <img className='phone-image' src={item.thumbnail} alt="" />
              <h3>R$ {(item.price).toFixed(2)}</h3>
              <div className="product-buttons">
                <BsFillCartPlusFill className='cart-button button'/>
                <AiOutlineHeart className='favorite-button button'/>
              </div>
              {/* <h1>{item.attributes[0].value_name}</h1> */}
            </li>
          )})}
      </ul>
    )
}
