import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const {id}=useParams();
    const [update,setUpdate]=useState({
        type:"",
        title:"",
        price:"",
        components:"",
        image:""
    })

    const navigate = useNavigate();
    useEffect(()=>{
        const getdata=async()=>{
            try{
                const response = await axios.get(`http://localhost:3000/manue/${id}`)
                if(response&& response.data){
                    setUpdate(response.data)
                }

            }
            catch(error){
                console.log("No product found",error)
            }
           
        }
        getdata()

    },[id])

    const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
     const handleUpdate=async(e)=>{
         e.preventDefault();
         try{
            const updatedata = await axios.put(`http://localhost:3000/manue/${id}`,update);
            if(updatedata){
                Swal.fire({
                    title:"Updated successfully",
                    icon: 'success',
                    confirmButtonText: "ok"
                })
                navigate('/dashboard');
            }
        }
        catch(error){
            console.log('product not found',error)
        }
     }
  return (
    <>
    <div className='update'>
        <div className='container pt-12  mt-7 mx-8 px-3 2xl:px-5'>
            <div className='form flex justify-center items-center  mt-28'>
                <form  onSubmit={handleUpdate} className='flex flex-col items-center w-[650px] sml:w-[400px] sm:w-[320px] xs:w-[280px] px-3 my-4 border rounded-xl shadow-amber-600 shadow-md bg-white'>
                    <div className='flex justify-center items-center  my-2'>
                        <label  htmlFor="type" className='text-amber-900 mx-1 text-xl font-bold'>type</label>
                        <input name='type' id="type" value={update.type} type='text' placeholder='enter the type ' required onChange={ handleChange} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[240px] xs:w-[200px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-center items-center  my-2'>
                        <label htmlFor='title' className='text-amber-900 mx-1 text-xl font-bold'>title</label>
                        <input name='title' id='title'value={update.title} type='text' placeholder='enter the title ' required onChange={ handleChange} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[240px] xs:w-[200px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-start items-center  my-2'>
                        <label htmlFor='price' className='text-amber-900 mx-1 text-xl font-bold'>price</label>
                        <input name='price' id='price' value={update.price} type='number' placeholder='enter the price ' required onChange={ handleChange} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px]  sml:w-[270px] sm:w-[240px] xs:w-[200px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-center items-center  my-2'>
                        <label htmlFor='components' className='text-amber-900 mx-1 text-xl font-bold'>components</label>
                        <input name='components' id='components' value={update.components} type='text' placeholder='enter the components ' required onChange={ handleChange} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[200px] xs:w-[150px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-center items-center  my-2'>
                        <label htmlFor='image' className='text-amber-900 mx-1 text-xl font-bold'>Image</label>
                        <input  name='image' id='image' value={update.image} type='text' placeholder='enter the url image ' required onChange={ handleChange} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[200px] xs:w-[150px] placeholder-amber-900'/>
                    </div>
                    <button  type="submit" className='p-1 mt-3 mb-5 text-3xl bg-amber-900 text-white border w-[300px] xs:w-[270px] rounded-xl shadow-md shadow-amber-600 transition-transform duration-300 hover:bg-white hover:text-amber-900'> update Product</button>

                </form>

            </div>

        </div>
    </div>
    </>

  )
}

export default UpdateProduct
