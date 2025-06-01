import React, { useEffect, useState } from 'react';
import { NavLink ,Link} from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes  } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Navbar() {
  const [scroll,setScroll]=useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector(state => state.item.cart)
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY>50){
        setScroll(true)
      }
      else{
        setScroll(false)
      }
    }
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[])

   const toggleMenu = () => setIsOpen(!isOpen);
  return (
    
      <div className={`header h-[80px] transition-colors duration-300  fixed top-0 left-0 w-full z-50 ${scroll ? 'bg-amber-600 shadow-lg  shadow-amber-700' : 'bg-transparent'}`}>
        <div className='container pt-4 mx-auto my-auto xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 justify-evenly flex items-center'>
        <div className='logo space-x-5 flex justify-between items-center'>
          <h1 className=' text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl text-amber-900'>Online restaurant</h1>
           <Link to="/cart" > < FaShoppingCart className="text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl text-amber-900"/> </Link>
           <h1 className=' text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl text-amber-900'>-{cart.length}</h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-amber-900 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div> 

        <div className='Nav hidden md:flex space-x-6 '>
          <NavLink to="/" className={({ isActive }) =>`link ${isActive ? 'underline decoration-red-500 text-red-500' : 'no-underline text-amber-900'} text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl  hover:text-green-500`}> Home</NavLink>
          <NavLink to="/manu" className={({ isActive }) =>`link ${isActive ? 'underline decoration-red-500 text-red-500' : 'no-underline text-amber-900'} text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl hover:text-green-500`}> Manu</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>`link ${isActive ? 'underline decoration-red-500 text-red-500' : 'no-underline text-amber-900'} text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl hover:text-green-500`}> Contact us</NavLink>
           <Link to="/admain" className='text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl text-amber-900'>Admin</Link>

    

        </div>
        
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4 px-6 flex flex-col items-center space-y-4">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) =>`link ${isActive ? 'underline decoration-red-500 text-red-500' : 'no-underline text-amber-900'} text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl  hover:text-green-500`}>Home</NavLink>
          <NavLink to="/manu" onClick={() => setIsOpen(false)} className={({ isActive }) =>`link ${isActive ? 'underline decoration-red-500 text-red-500' : 'no-underline text-amber-900'} text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl  hover:text-green-500`}>Manu</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) =>`link ${isActive ? 'underline decoration-red-500 text-red-500' : 'no-underline text-amber-900'} text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl  hover:text-green-500`}>Contact</NavLink>
          <Link to="/admain" onClick={() => setIsOpen(false)} className="text-amber-900 text-lg">Admain</Link>
        </div>
      )}
      
    </div>
  );
}

export default Navbar;