import React, { useEffect, useState } from 'react'
import { fetchdata } from '../APi/Products-Api';
import Cart from './Cart';

const Coffe = () => {
    const [coffe,setCoffe] =useState([]);
    useEffect(()=>{
        const getburger= async () =>{
             try{
            const response = await fetchdata();
           
                if(response && response.manue){
                setCoffe( response.manue)
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
   <div className='Coffe'>
   <h1 className=' text-3xl text-amber-900 font-bold underline mt-40 px-7 mx-6'>Coffe section</h1>
     <div className="container flex justify-center items-center pt-12  mt-7 mx-8 px-3 2xl:px-5">

        <div className='grid grid-cols-1 sm:grid-cols-1 sml:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {coffe.map((item)=>(
                item.type === 'coffe' &&(
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

export default Coffe;