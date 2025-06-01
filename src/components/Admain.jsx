import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  fetchuser } from '../APi/Products-Api';

const Admain = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Handellogn = async (e) =>{
    e.preventDefault();
    try{
        const admain = await fetchuser ();
        const user=admain.find((x)=>
        x.username.toLowerCase() === username.toLowerCase() &&
        x.password.toLowerCase() === password.toLowerCase() 
    )
    if(user){
        navigate ('/dashboard')
    }
    else{
        alert('username or password are not valied')
    }
    }
    catch(error){
        console.log('username or password are not valied',error)
    }
   

};
  return (
    <>
    <div className='admain h-[100vh]' >
        <div className='container pt-12  mt-7 mx-8 px-3 2xl:px-5'>
            <div className='form flex justify-center items-center  mt-28'>
                <form onSubmit={Handellogn} className='flex flex-col items-center w-[450px] px-3 my-4 border rounded-xl shadow-amber-600 shadow-md bg-white'>
                    <input value={username} name='username' placeholder='enter your name' required   onChange={(e) => setUsername(e.target.value)} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] placeholder-amber-900'/>
                    <input type="password" value={password} name='password' placeholder='enter your password' required  onChange={(e) => setPassword(e.target.value)} className='p-1 my-3 text-amber-900 focus:outline-none focus:ring-0 focus:border-amber-900 rounded-xl border w-[300px] placeholder-amber-900'/>
                    <button type="submit" className='p-1 mt-3 mb-5 text-3xl bg-amber-900 text-white border w-[300px] rounded-xl shadow-md shadow-amber-600 transition-transform duration-300 hover:bg-white hover:text-amber-900'>Login</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Admain
