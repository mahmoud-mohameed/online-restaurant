import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Pizza from '../components/Pizza'
import Burger from '../components/Burger'
import Coffe from '../components/Coffe'
import Juice from '../components/Juice'
import Manue from '../components/Manue'
import Shopping from '../components/Shopping-cart'
import Footer from './Footer'
import Contact from '../components/Contact '
import Admain from '../components/Admain'
import Dashboard from '../components/Admain-Dashboard'
import ProductDetails from '../components/productDetails'
import AddProduct from '../components/AddProduct'
import UpdateProduct from '../components/UpdateProduct'



const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
            
        </>
    )
}

const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Layout />}>
                <Route index element={<Home/>}/>
                <Route path="/manu" element={<Manue/>}/>
                <Route path="/pizza" element={<Pizza/>}/>
                <Route path="/burger" element={<Burger/>}/>
                <Route path="/juice" element={<Juice/>}/>
                <Route path="/coffe" element={<Coffe/>}/>
                <Route path="/cart" element={<Shopping/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/admain" element={<Admain/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/dashboard/:id" element={<ProductDetails/>} />
                <Route path="/Add" element={<AddProduct/>} />
                <Route path="/update/:id" element={<UpdateProduct/>} />
                
                </Route>
            </>
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default Routes;
