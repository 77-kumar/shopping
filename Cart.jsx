/* eslint-disable array-callback-return */
import React,{useContext} from 'react'
import { PRODUCTS } from './Products'
import { ShopContext } from './Contex/ShopContext'
import CartItem from './CartItem'
import './Cart.css'
import {useNavigate} from 'react-router-dom'


const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const TotalCart=getTotalCartAmount();
  const navigate=useNavigate();


  const handler = (response) => {
    alert("your payment id : "+ response.razorpay_payment_id +" payment successfull ");
  };
  const makePayment = () => {
    

    if (TotalCart === 0) {
      alert('Please select at least one product');
    } else {
      const options = {
        key: 'rzp_test_JgmOlHK3wYJTJz',
        secret: 'VNha9i6i92eWeyuRBrx7igLN',
        amount: TotalCart * 100,
        currency: 'INR',
        description: 'Payment for shopping',
        handler: handler,
        prefill: {
          name: 'saikumar',
          email: 'saikumar677@gmail.com',
          contact: '6301646269',
        },
        notes: {
          address: 'Razorpay corporate address',
        },
        theme: {
          color: 'red',
        },
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className='cart'>
      <h1>
        {TotalCart>0?"Your cart":"Your cart is Empty"}
      </h1>
      <div className='cardItem'>
       
        {PRODUCTS.map(product=>{
          if(cartItems[product.id] !==0){
            return <CartItem key={product.id} data={product}/>

          }
             
          
        })}

      </div>
      
      {TotalCart >0 ? ( <div className='checkOut'>
        <p>sub total : $ {TotalCart} .</p>
        <button onClick={makePayment}>buy now</button>
        <button onClick={()=>navigate("/")}>continue shopping</button>
       
      </div>
      
      ):(
         
          
          <div className='checkOut'>
            
          <p>sub total : $ {TotalCart} .</p>
          
          <button onClick={()=>navigate("/")}>continue shopping</button>
         
        </div>
      )
        
         
         
         }
      
    </div>
  )
}

export default Cart
