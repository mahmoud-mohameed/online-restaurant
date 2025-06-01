
import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
    const[type,setType]=useState("");
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState(0);
    const[components,setComponents]=useState("");
    const[image,setImage]=useState("")

    const  handleAddProduct=async(e)=>{
        e.preventDefault();
        try{
            const addproduct = await axios.post(`http://localhost:3000/manue/`,{
                type,
                title,
                price,
                components,
                image,
            })
            console.log(addproduct)
            setType("");
            setTitle("");
            setPrice(0);
            setComponents("");
            setImage("")

        }
        catch(error){
            console.log("No Product added",error)
        }
    }
  return (
    <>
    <div className='add'>
        <div className='pt-12  mt-7 mx-8 px-3 2xl:px-5'>
            <div className='form-add flex justify-center items-center  mt-28'>
                <form  onSubmit={ handleAddProduct} className='flex flex-col items-center w-[650px] sml:w-[400px] sm:w-[320px] xs:w-[280px] px-3 my-4 border rounded-xl shadow-amber-600 shadow-md bg-white'>
                    <div className='flex justify-center items-center  my-2'>
                        <label  htmlFor="type" className='text-amber-900 mx-1 text-xl font-bold'>type</label>
                        <input id="type" value={type} type='text' placeholder='enter the type ' required onChange={(e)=> setType(e.target.value)} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[240px] xs:w-[200px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-center items-center  my-2'>
                        <label htmlFor='title' className='text-amber-900 mx-1 text-xl font-bold'>title</label>
                        <input id='title'value={title} type='text' placeholder='enter the title ' required onChange={(e)=> setTitle(e.target.value)} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[240px] xs:w-[200px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-start items-center  my-2'>
                        <label htmlFor='price' className='text-amber-900 mx-1 text-xl font-bold'>price</label>
                        <input id='price' value={price} type='number' placeholder='enter the price ' required onChange={(e)=> setPrice(e.target.value)} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px]  sml:w-[270px] sm:w-[240px] xs:w-[200px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-center items-center  my-2'>
                        <label htmlFor='components' className='text-amber-900 mx-1 text-xl font-bold'>components</label>
                        <input id='components' value={components} type='text' placeholder='enter the components ' required onChange={(e)=> setComponents(e.target.value)} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[200px] xs:w-[150px] placeholder-amber-900'/>
                    </div>
                    <div className='flex justify-center items-center  my-2'>
                        <label htmlFor='image' className='text-amber-900 mx-1 text-xl font-bold'>Image</label>
                        <input id='image' value={image} type='text' placeholder='enter the url image ' required onChange={(e)=> setImage(e.target.value)} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] sml:w-[270px] sm:w-[200px] xs:w-[150px] placeholder-amber-900'/>
                    </div>
                    <button  type="submit" className='p-1 mt-3 mb-5 text-3xl bg-amber-900 text-white border w-[300px] xs:w-[270px] rounded-xl shadow-md shadow-amber-600 transition-transform duration-300 hover:bg-white hover:text-amber-900'> Add Product</button>
                </form>
            </div>

        </div>
    </div>
    </>
  )
}

export default AddProduct

