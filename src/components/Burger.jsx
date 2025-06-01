import React, { useEffect, useState } from 'react'
import { fetchdata } from '../APi/Products-Api';
import Cart from './Cart';

const Burger = () => {
    const [burger,setBurger] =useState([]);
    useEffect(()=>{
        const getburger= async () =>{
             try{
            const response = await fetchdata();
           
                if(response && response.manue){
                setBurger( response.manue)
            }
        
            }
            catch(error){
                console.log("No items founded",error);
            }
        
        }
        getburger();

    },[])
  return (
   <>
   <div className='burger'>
     <h1 className=' text-3xl text-amber-900 font-bold underline mt-40 px-7'>Burger section</h1>
     <div className="container flex justify-center items-center pt-12  mt-7 mx-8 px-3 2xl:px-5">

        <div className='grid grid-cols-1 sm:grid-cols-1 sml:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {burger.map((item)=>(
                item.type === 'burger' &&(
                <div  key={item.id} className='cart-manue  '  >
                <Cart product ={item}/>
                </div>
                )
            ))}
        </div>

    </div>
   </div>
   </>
  )
}

export default Burger
