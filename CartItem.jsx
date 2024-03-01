import React,{useContext} from 'react'
import { ShopContext } from './Contex/ShopContext'


const CartItem = (props) => {
    const { id, ProductName, ProductImage, Price } = props.data;
    const { cartItems,addToCart,removeCart ,updateCart} = useContext(ShopContext);


  return (
    <div className='cartItems'>
              <img className="product-image" src={ProductImage} alt={ProductName} />
      <div className="product-name">{ProductName}</div>
      <div className="product-price">${Price}</div>
      <div className='CountHandler'>
        <button onClick={()=>removeCart(id)}>-</button>
        <input value={cartItems[id]} onChange={(e)=>updateCart(Number(e.target.value),id)}/>
        <button onClick={()=>addToCart(id)}>+</button>
      </div>
      

        </div>

      

  )
}

export default CartItem
