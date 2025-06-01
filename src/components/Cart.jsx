import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, deletefromcart } from '../rtk/AppSlice';

const Cart = (props) => {
    const {product}=props;
    const {cart}=useSelector((state)=>state.item);
    const dispatch = useDispatch();
    const isInCart = cart.some((item) => item.id === product.id);
     const [removeMessage, setRemoveMessage] = useState("");
     const [addmessage, setAddmessage]=useState("");
  return (
    <>
    {removeMessage&&(
        <div className='remove-message  bg-red-300 text-red-700 w-[500px] fixed text-center m-4 p-2 top-10 left-1/2 -translate-x-1/2 z-50'>
                    {removeMessage}
        </div>
    )}
    {addmessage &&(<div className='add-message  bg-teal-300 text-green-700 w-[500px] fixed text-center m-4 p-2 top-10 left-1/2 -translate-x-1/2 z-50'>
    {addmessage}

    </div>)}
    <div className='Cart'>
        
        <div className='cart  flex-col flex justify-center items-center flex-wrap bg-white w-[300px] h-[450px]  lgl:w-[250px] md:w-[240px] mdl:w-[240px] sml:w-[300px] sm:w-[300px] mb-8 px-1 border rounded-xl border-amber-950 shadow-xl shadow-amber-700 '>
            <div className='cart-image image w-[100%] h-[270px] flex justify-center items-center mb-2'>
                <img className='w-[270px] h-[270px] sml:w-[270px] sm:w-[270px] mdl:w-[240px] lg:w-[220px] lgl:w-[230px] xl:w=[270px] lxl:w-[270px]' src={product.image} alt={product.title}/>
            </div>
            <div className='car-title'>
                <h1 className='text-amber-900 text-2xl mb-2'>{product.title}</h1>
            </div>
            <div className='Cart-price'>
                <h5 className='text-amber-900 text-2xl mb-2'>EGP {product.price}</h5>
            </div>
            <div className='cart-button'>
                {isInCart?<button onClick={() =>{ dispatch(deletefromcart(product)),
                    setRemoveMessage('item removed from cart successfuly✅')
                    setTimeout(() => {
                        setRemoveMessage('')
                        
                    }, 3000);
                }} className='remove-product text-white bg-red-600 mb-1 rounded-lg py-1 px-11  shadow-lg shadow-red-400'> Remove from Cart</button>
                :<button onClick={() =>{ dispatch(addtocart(product));
                    setAddmessage("item added to cart successfuly✅")
                    setTimeout(() => {
                        setAddmessage('')
                    }, 3000);
                }} className= 'add-product text-white bg-amber-900 mb-1 rounded-lg py-1 px-11  shadow-lg shadow-amber-600'> Add To Cart</button>}
                
            </div>

        </div>
    </div>
    </>
    
  )
}

export default Cart
