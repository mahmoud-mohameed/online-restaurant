import React from 'react'
import { Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className='Header p-6 my-4'>
        <div className='container pt-4 mx-auto my-auto xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 justify-between flex items-center'>
            <div className='title'>
                <h1 className='font-bold mb-4 text-amber-900 text-2xl  xs:text-sm sm:text-lg sml:text-xl md:text-2xl mdl:text-2xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl'>Welcome TO Food Lover Restaurant</h1>
                <p className='mb-4 text-amber-700  text-2xl sml:text-base sm:text-sm xs:text-xs '>We offer the best food and drinks. Our products have a wonderful taste and our restaurant is distinguished by its fast delivery service.</p>
                <div className='delavery-image my-4'>
                    <img className='w-[350px] h-[400px] sml:w-[270px]h[350px]  my-4' src="/contact-man.png" alt='delavery'/>
                </div>
                <div className='order-now p-3  my-5 '>
                    <Link to="/manu" className="bg-amber-950  p-4  my-5  item-center text-2xl text-white rounded-2xl cursor-pointer">Order now</Link>

                </div>
                
            </div>
            <div className='header-image my-4 py-4  xs:hidden sm:hidden sml:flex md:flex mdl:flex lg:flex lgl:flex xl:flex lxl:flex '>
                <div className='image  flex items-center justify-center '>
                
                    <div className='grid grid-cols-2 gap-20 mdl:gap-24 md:gap-16'>
                    <Link to="/burger"> <div className='burger   w-[250px] h-[250px] lgl:w-[200px] lgl:h-[200px] mdl:w-[120px] mdl:h-[120px] md:w-[110px] md:h-[110px] sml:w-[50px] sml:h-[50px]  '>
                        <img  className="w-full h-full object-cover " src='/image/Burger/popular-burger-big.png' alt='burger'/>
                        <h1 className='text-center text-amber-900 text-3xl mt-2 mdl:text-2xl md:text-2xl sml:text-base sm:text-base xs:text-sm'> Burger</h1>
                    </div></Link>
                    <Link to="/coffe"> <div className='coffe  w-[250px] h-[250px] lgl:w-[200px] lgl:h-[200px] mdl:w-[120px] mdl:h-[120px] md:w-[110px] md:h-[110px] sml:w-[50px] sml:h-[50px]  '>
                        <img  className="w-full h-full object-cover rounded-3xl" src='/image/coffe/coffee-time-accessories-black-table-against-grey-background_185193-3533.jpg'alt='coffe'/>
                         <h1 className='text-center text-amber-900 text-3xl mt-2 mdl:text-2xl md:text-2xl sml:text-base sm:text-base xs:text-sm'> Coffe</h1>
                    </div></Link>
                   <Link to="/pizza">  <div className='pizaa   w-[250px] h-[250px] lgl:w-[200px] lgl:h-[200px] mdl:w-[120px] mdl:h-[120px] md:w-[110px] md:h-[110px] sml:w-[50px] sml:h-[50px]'>
                        <img className="w-full h-full object-cover rounded-3xl" src='/image/pizza/pizaa3.avif' alt='pizza'/>
                         <h1 className='text-center text-amber-900 text-3xl mt-2 mdl:text-2xl md:text-2xl sml:text-base sm:text-base xs:text-sm'> Pizza</h1>
                    </div></Link>
                  <Link to="/juice">  <div className='juice  w-[250px] h-[250px]  lgl:w-[200px] lgl:h-[200px] mdl:w-[120px] mdl:h-[120px] md:w-[110px] md:h-[110px] sml:w-[50px] sml:h-[50px]  '>
                        <img  className="w-full h-full object-cover rounded-3xl" src='/image/juice/fjuice3.avif' alt='juice'/>
                         <h1 className='text-center text-amber-900 text-3xl mt-2 mdl:text-2xl md:text-2xl sml:text-base sm:text-base xs:text-sm'> Juice</h1>
                    </div></Link> 
                    
                </div>
                </div>

            </div>
        
        </div>
      
    </div>
  )
}

export default Header
