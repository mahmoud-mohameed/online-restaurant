
import { FaMapMarkerAlt  ,FaEnvelope , FaPhone } from 'react-icons/fa'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact  = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_i8ugaq9',
      'template_ioialir',
      form.current,
      '6UTNd9fh1UdFqlyaL'
    ).then(
      (result) => {
        console.log('Success:', result.text);
        alert('Message sent!');
        form.current.reset(); // مسح البيانات بعد الإرسال
      },
      (error) => {
        console.log('Error:', error.text);
        alert('Failed to send message');
      }
    );
  };
  return (
    <div className='Contact'>
        <div className='container  pt-12  mt-7 mx-8 px-3 2xl:px-5'>
            <div className='grid grid-cols-2 gap-6 sml:grid-cols-1  sm:grid-cols-1 xs:grid-cols-1 mdl:grid-cols-2 '>
            <div className=' px-2 m-4'>
                <div className='contact-us flex flex-col justify-center items-center my-6'>
                    <div className=' address w-[350px]  xs:w-[300px] sm:w-[350px] my-4 border rounded-xl bg-white text-amber-900 shadow-md  shadow-amber-600 p-5 flex flex-col items-center  transition-transform duration-300 hover:-translate-y-2'>
                        <FaMapMarkerAlt className='text-3xl mdl:text-2xl md:text-2xl sml:text-xl sm:text-lg xs:text-base'/>
                        <h1 className='text-3xl  mdl:text-2xl md:text-2xl  sml:text-xl sm:text-lg xs:text-base'>Address</h1>
                        <p className='text-3xl  mdl:text-2xl md:text-2xl  sml:text-xl sm:text-lg xs:text-base'>Mohamed Yousef st.</p>
                        <p className='text-3xl  mdl:text-2xl md:text-2xl  sml:text-xl sm:text-lg xs:text-base'>Shobura,Cairo</p>
                        </div>
                        
                    <div className='phone w-[350px] xs:w-[300px] sm:w-[350px] my-4 border rounded-xl bg-white text-amber-900 shadow-md  shadow-amber-600 p-5 flex flex-col items-center  transition-transform duration-300 hover:-translate-y-2'>
                        <FaPhone className='text-3xl mdl:text-2xl md:text-2xl sml:text-xl sm:text-lg xs:text-base'/>
                        <h1 className='text-3xl mdl:text-2xl md:text-2xl sml:text-xl sm:text-lg xs:text-base'>Contacts</h1>
                        <p className='text-3xl mdl:text-2xl md:text-2xl sml:text-xl sm:text-lg xs:text-base'>01121775618(Whatsapp)</p>
                        <p className='text-3xl mdl:text-2xl md:text-2xl sml:text-xl sm:text-lg xs:text-base'>01080752276</p>
                    </div>

                    <div className='email w-[350px] xs:w-[300px] sm:w-[350px] my-4 border rounded-xl bg-white text-amber-900 shadow-md  shadow-amber-600 p-5 flex flex-col items-center  transition-transform duration-300 hover:-translate-y-2'>
                        <FaEnvelope className='text-3xl mdl:text-2xl md:text-2xl sml:text-xl sm:text-lg xs:text-base'/>
                        <h1 className='text-3xl mdl:text-2xl md:text-2xl sml:text-xl sm:text-lg xs:text-base'>Emails</h1>
                        <p className='text-3xl mdl:text-1xl md:text-1xl sml:text-xl sm:text-lg xs:text-base'>mahmoudmohamed2860@yahoo.com</p>
                        <p className='text-3xl mdl:text-1xl md:text-1xl sml:text-xl sm:text-lg xs:text-base'>mostafa143mahmoud@gmail.com</p>
                    </div>

                </div>

            </div>
           
            <div className='px-2 mt-8 mb-4 '> 
                <div className='form flex justify-center items-center  sticky top-20'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center w-[450px] px-3 my-4 border rounded-xl shadow-amber-600 shadow-md bg-white'>
                        <h1 className='text-3xl  mdl:text-2xl md:text-2xl  sml:text-xl sm:text-lg xs:text-base text-amber-900 font-bold p-1 my-3  '>Leave your message here</h1>
                        <input name='name' type="text" placeholder='Enter your name ' required className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] placeholder-amber-900'/>
                        <input name='phone' type="number" placeholder="Enter your phone" required className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] placeholder-amber-900 '/>
                        <textarea name="message" required placeholder='Enter your message'className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] h-[100px]  placeholder-amber-900' />
                        <button type="submit" className='p-1 mt-3 mb-5 text-3xl bg-amber-900 text-white border w-[300px] rounded-xl shadow-md shadow-amber-600 transition-transform duration-300 hover:bg-white hover:text-amber-900'>send message</button>
                    </form>

                </div>

            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Contact 
