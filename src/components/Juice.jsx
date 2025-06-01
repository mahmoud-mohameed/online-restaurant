import React, { useState,useEffect } from 'react'
import { fetchdata } from '../APi/Products-Api';
import Cart from './Cart';

const Juice = () => {
  const [juice,setJuice]=useState([]);
  useEffect(()=>{
    const getjuice = async () =>{
      try{
        const response = await fetchdata();
        if(response && response.manue){
          setJuice(response.manue)
        }
      }
      catch(error){
        console.log("No item founded",error)
      }

    }
    getjuice();

  },[])
    
  return (
    <>
     <div className='Juice'>
      
      <h1 className=' text-3xl text-amber-900 font-bold underline mt-40 px-7'>Juice section</h1>
     <div className="container flex justify-center items-center pt-12  mt-7 mx-8 px-3 2xl:px-5">
        <div className='manue-produc grid grid-cols-1 sm:grid-cols-1 sml:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {juice.map((item) => (
            item.type === 'juice'&&(
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

export default Juice;
