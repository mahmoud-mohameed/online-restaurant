import React, { useEffect, useState } from 'react'
import { fetchdata } from '../APi/Products-Api';
import Cart from './Cart';

const Manue = () => {
  const [manue,setManue]=useState([]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(()=>{
    const getmanue = async  () => {
      const response = await fetchdata();
      console.log(response);
      if(response &&response.manue){
        const shuffled = shuffleArray(response.manue);
        setManue(shuffled);
      }
    }
    getmanue();

  },[])
  return (
    <>
    <div className='Manue'>
      
       <div className="container flex justify-center items-center pt-12  mt-16 mx-8 px-3 ">
        <div className='manue-produc grid grid-cols-1 sm:grid-cols-1 sml:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {manue.map((item) => (
            <div  key={item.id} className='cart-manue  '  >
              <Cart product ={item}/>
            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  )
}

export default Manue
