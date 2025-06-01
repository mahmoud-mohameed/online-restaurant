import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { FourSquare } from 'react-loading-indicators';
import axios from "axios";


const ProductDetails = () => {
    const {id} = useParams()
    const [productDetails,setProductDetails]= useState(null)
    const [loading, setLoading] = useState(true);

useEffect(()=>{
  const getdata=async()=>{
    try{
       const response =await axios.get(`http://localhost:3000/manue/${id}`);
       if(response&&response.data){
        
        setProductDetails(response.data)
       }
       else{
        console.log('No product found')
       }

    }
    catch(error){
      console.log('No product found',error);
    }
    setTimeout(() => {
    setLoading(false)
  }, 500);
  }
 
  
  getdata();

},[id])
if (!productDetails) {
    return <div>No product found</div>;
  }

  return (
   <>
   {loading &&(
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-90 z-[9999]">
            <FourSquare color="#FF0000" size="medium"/>
        </div>
        )}
        <div className="flex flex-col sm:flex-col xs:flex-col sml:flex-col md:flex-row justify-around items-center gap-4  mt-20">
            <div className="image w-[450px] xs:w-[250px] sml:w-[300px]  md:w-[300px] mdl:w-[350px] lg:w-[380px] lgl:w-[400px] xl:w-[420px] lxl:w-[450px]">
                <img  className="" src={productDetails.image} alt={productDetails.title}/>
            </div>
            <div className="productDetails">
                <h1 className="text-4xl xl:text-3xl lxl:text-4xl  md:text-2xl mdl:text-3xl sml:text-lg sm:text-base xs:text-sm text-amber-900"> type : {productDetails.type}</h1>
                 <h1 className="text-4xl xl:text-3xl lxl:text-4xl  md:text-2xl mdl:text-3xl sml:text-lg sm:text-base xs:text-sm text-amber-900"> price : Egp {productDetails.price}</h1>
                  <h1 className="text-4xl xl:text-3xl lxl:text-4xl  md:text-2xl mdl:text-3xl sml:text-lg sm:text-base xs:text-sm text-amber-900"> title : {productDetails.title}</h1>
                   <h1 className="text-4xl xl:text-3xl lxl:text-4xl  md:text-2xl mdl:text-3xl sml:text-lg sm:text-base xs:text-sm text-amber-900"> components : {productDetails.components}</h1>
                
            </div>
        </div>
        
   </>
  )
}

export default ProductDetails
