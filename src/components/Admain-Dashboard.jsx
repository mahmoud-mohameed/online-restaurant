import React, { useEffect, useState } from 'react'

import { fetchdata } from '../APi/Products-Api';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'


const Dashboard = () => {
const navigate = useNavigate();
const[admainCart,setAdmainCart]=useState([]);

useEffect(()=>{

 getdata();
},[]);


  const getdata=async()=>{
    try{
       const response =await fetchdata();
       if(response&&response.manue){
        setAdmainCart(response.manue)
       }
       else{
        console.log('No product found')
       }

    }
    catch(error){
      console.log('No product found',error);
      
    }
   
  }

const Deleteproduct = async (product) =>{
 const result= await Swal.fire({
    title:`are you  sur to delete "${product.title}"? `,
     showCancelButton: true,
  })
  if (result.isConfirmed){
     try{
    const response= await axios.delete(`http://localhost:3000/manue/${product.id}`)
    getdata();

   console.log("Product deleted successfully.",response);
  
  } catch (error) {
    console.error("Error deleting product:", error);
  }
  }
 
}

  return (
   <>
   <div className='admain-cart'>
    
          <button  onClick={() => navigate('/Add')} className='mt-20 ml-4 mb-10 bg-green-600 w-[300px] p-3 rounded-xl shadow-green-300 shadow-lg text-white text-3xl font-bold'>Add New Product</button>

    <div className='container flex justify-center items-center pt-12  mt-7 mx-8 px-3 2xl:px-5'>
       <div className='grid grid-cols-1 sm:grid-cols-1 sml:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {admainCart&&admainCart.map((product)=>(

          <div  key={product.id} className=' admain-cart  flex-col flex justify-center items-center flex-wrap bg-white w-[300px] h-[500px]  lgl:w-[250px] md:w-[240px] mdl:w-[240px] sml:w-[300px] sm:w-[300px] mb-8 px-1 border rounded-xl border-amber-950 shadow-xl shadow-amber-700 '>
        <div className='image w-[100%] h-[270px] flex justify-center items-center mb-2'>
          <img className='w-[270px] h-[270px] sml:w-[270px] sm:w-[270px] mdl:w-[240px] lg:w-[220px] lgl:w-[230px] xl:w=[270px] lxl:w-[270px] ' src={product.image} alt={product.title}/>

        </div>
        <div className='car-title'>
                <h1 className='text-amber-900 text-2xl mb-2'>{product.title}</h1>
            </div>
            <div className='Cart-price'>
                <h5 className='text-amber-900 text-2xl mb-2'>EGP {product.price}</h5>
            </div>
            <div className='btn'>
              <button onClick={()=>Deleteproduct(product)} className='mr-1 bg-red-700  w-[80px] lgl:w-[70px] lg:w-[65px] mdl:w-[60px] p-3 rounded-xl shadow-red-300 shadow-lg text-white text-lg font-medium mdl:text-base sml:text-sm'>Delete</button>
              <Link to ={`/dashboard/${product.id}`} className='mr-1 bg-amber-700  w-[80px] lgl:w-[70px] lg:w-[65px] mdl:w-[60px] p-3 rounded-xl shadow-amber-300 shadow-lg text-white text-lg font-medium mdl:text-base sml:text-sm'>view</Link>
              <Link to ={`/update/${product.id}`}  className='mr-1 bg-blue-700  w-[80px] lgl:w-[70px] lg:w-[65px] mdl:w-[60px] p-3 rounded-xl shadow-blue-300 shadow-lg text-white text-lg font-medium sml:text-sm'>update</Link>
            </div>
      </div>

      ))}

</div>
    </div>
   </div>
   </>
  )
}

export default  Dashboard;
