import React, { useEffect, useState } from 'react'
import { fetchdata } from '../APi/Products-Api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import Cart from './Cart';

const Swipercart = () => {
    const [swiperitem,setSwiper]=useState([])
     const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
useEffect(() => {
  const getdata = async () => {
    try {
    const response = await fetchdata(); 
    if (response && response.manue) {
        const shuffled = shuffleArray(response.manue);
        const slicess = shuffled.slice(0,10);
        setSwiper(slicess);
    }
    } catch (error) {
    console.log("No Product found", error);
    }}
    getdata();
}, []);
  return (
   <div className='cat'>
    <h1 className='text-3xl text-amber-900 underline'>Best Seller</h1>
    <div className='w-full px-4 py-10 flex justify-center items-center'>

        <Swiper breakpoints={{
             425: { slidesPerView: 1},
             640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
             1024: { slidesPerView: 4 }
        }}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
         className='max-w-[1200px] w-full'
        >
            {swiperitem.map((cart)=>(
                <SwiperSlide key={cart.id} className='text-center'> 
                 <Cart product ={cart}/>

            </SwiperSlide>

            ))}
           

        </Swiper>
    </div>
   </div>
  )
}

export default Swipercart
