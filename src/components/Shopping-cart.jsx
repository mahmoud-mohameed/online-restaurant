import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {clearCart, decrement, deletefromcart, increment} from '../rtk/AppSlice'

const Shopping= () => {
    const {cart}=useSelector((state)=>state.item);
    const dispatch=useDispatch();
    const [removeMessage, setRemoveMessage] = useState("");
  return (
    <>
    <div className='shooping min-h-screen'>
        <div className='container py-10 sml:px-3 sm:px-3 xs:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 mx-auto xs:pt-[220px] sm:pt-[220px] sml:pt-[220px] md:pt-[170px] mdl:pt-[170px] lg:pt-[170px] xl:pt-[170px] lxl:pt-[170px] lgl:pt-[170px] pt-[170px]'>
           
            {cart.length > 0 ?<>
            {
                removeMessage&&( <div className='div-massage bg-red-300 text-red-700 w-[500px] fixed text-center m-4 p-2 top-10 left-1/2 -translate-x-1/2 z-50'>
                {removeMessage}
            </div>)
            }
           
            <div className='clear-button text-center mb-8 '>
                            <button onClick={()=>(dispatch(clearCart()))} className='w-[500px] sml:w-[300px]  xs:w-[180px] xs:text-base sml:text-xl sm:w-[200px] sm:text-xl text-3xl text-white bg-red-600 mb-1 rounded-lg py-1 px-11  shadow-lg shadow-red-400'>Remove all items</button>
                            </div>
            <div className='shopping-cart grid grid-cols-1 sm:grid-cols-1 sml:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {cart.map((item)=>(
                    <>
                    
                    <div className='div-shopping flex-col flex justify-center items-center flex-wrap bg-white w-[300px] h-[550px] mb-8 px-1 border rounded-xl border-amber-950 shadow-xl shadow-amber-700 sm-w[200px] sm:w-[300px] sml:w-[200px] mdl:w-[240px] lg:w-[240px] lgl:w-[240px] xl:w-[290px] lxl:w-[300px] ' key={item.id}>
                        

                        <div className='shooping-image  w-[100%] h-[300px] flex justify-center items-center mb-2'>
                            <img className='w-[270px] h-[270px] xs:w-[250px] sml:w-[180px] sm:w-[180px] mdl:w-[240px] lg:w-[220px] lgl:w=[230px] xl:w=[270px] lxl:w-[270px] ' src={item.image} alt={item.title}/>
                        </div>
                        <div className='div-title'>
                            <h1 className='text-amber-900 text-2xl mb-2'>{item.title}</h1>
                        </div>
                        <div className='div-price'>
                            <h1 className='text-amber-900 text-2xl mb-2'>EGP{item.price*item.quantity}</h1>
                        </div>
                        <div className='number flex justify-evenly items-center mb-2 '>
                            <button className='incremant text-amber-900 text-2xl mb-2' onClick={()=>dispatch( increment(item.id))}>+</button>
                            <span className='text-amber-900 text-2xl mb-2'>{item.quantity}</span>
                            <button className='decremant text-amber-900 text-2xl mb-2' onClick={()=>dispatch( decrement(item.id))}>-</button>

                        </div>
                        <div className='button'>
                            <button className='remove-cart  text-white bg-red-600 mb-1 rounded-lg py-1 px-11  shadow-lg shadow-red-400'  onClick={()=>{dispatch( deletefromcart(item));
                        setRemoveMessage('item removed from cart successfuly✅')
                        setTimeout(() => {
                            setRemoveMessage('')
                            }, 3000);
                            }}>Remove from cart</button>
                        </div>
                    </div>
                    </>
                    
                ))}

            </div>
            </>:<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-4xl mdl:text-3xl sml:text-2xl sm:text-xl xs:text-lg text-amber-900 font-extrabold '>Cart is empty 🛒</h1>
            </div>}
            
        </div> 
    </div>
    </>
  )
}

export default Shopping
