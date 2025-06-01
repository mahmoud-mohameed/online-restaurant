import React from 'react'
import { FaGithub, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='foooter bg-amber-800'>
        <div className='container flex items-center justify-between mt-6 pt-2'>
            <div className='div-footer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 '>
                <div className='Social pl-3 mt-3 mr-5'>
                    
                    <h3 className='lgl:text-2xl lg:text-xl md:text-lg sm:text-base  text-white font-bold mb-14 underline'>to follow us or communicate</h3>
                    <ul className='flex items-center justify-center gap-5 mb-4'>
                    <li className='text-center text-2xl bg-white p-2 text-amber-800 rounded-xl shadow-md shadow-white'><a href="https://www.facebook.com/profile.php?id=100041785385858" target='_blank' rel='noopener noreferrer'> <FaFacebookF className='icon'/></a></li>
                                <li  className='text-center text-2xl bg-white p-2 text-amber-800 rounded-xl shadow-md shadow-white'><a href="https://www.facebook.com/profile.php?id=100041785385858" target='_blank' rel='noopener noreferrer'> <FaXTwitter  className='icon'/></a></li>
                                <li  className='text-center text-2xl bg-white p-2 text-amber-800 rounded-xl shadow-md shadow-white'><a href="https://github.com/mahmoud-mohameed" target='_blank' rel='noopener noreferrer'> <FaGithub  className='icon'/></a></li>
                                <li  className='text-center text-2xl bg-white p-2 text-amber-800 rounded-xl shadow-md shadow-white'><a href="https://wa.me/201121775618" target='_blank' rel='noopener noreferrer'> <FaPhone  className='icon'/></a></li>
                                <li  className='text-center text-2xl bg-white p-2 text-amber-800 rounded-xl shadow-md shadow-white'><a href="https://www.linkedin.com/in/mahmoud-mostafa-180826362/" target='_blank' rel='noopener noreferrer'> <MdEmail  className='icon'/></a></li>
                                </ul>
                </div>
                <div className='section  pl-3 mt-3 mr-5 list-none mb-3'>
                    <h3 className='text-2xl text-white font-bold mb-6 underline'>Section</h3>
                    <li className=''><Link className='text-2xl text-white ' to="/pizza"> Pizza</Link></li>
                    <li><Link className='text-2xl text-white' to="/coffe">Coffe</Link></li>
                    <li><Link className='text-2xl text-white' to="/burger">Burger</Link></li>
                    <li><Link className='text-2xl text-white' to="/juice"> Juice</Link></li>
                </div>
                <div className='about-us pl-3 mt-3 mr-5 list-none mb-3' >
                    <h1 className='text-2xl text-white font-bold mb-6 underline'>WEBSITE</h1>
                    <li><Link className='text-2xl text-white' to="/contact">Contact US</Link></li>
                    <li><Link className='text-2xl text-white' to="/">About Us</Link></li>
                </div>

            </div>
           

        </div>
         <div className='end text-center text-white bg-amber-950 flex justify-center items-center font-semibold h-[60px]'>
                    <span>Created and designed by <span className='endname'>Mahmoud Mohamed</span></span>
                    <br />
                    <span className='pl-1'>2025</span>
                </div>
    </div>
  )
}

export default Footer
