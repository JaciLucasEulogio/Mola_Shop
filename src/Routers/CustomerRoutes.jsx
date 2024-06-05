import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'

const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>

        {/* <Product/> */}
        {/* <ProductDetails/> */}

        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes

// https://www.youtube.com/watch?v=gzGzTza3IuQ&list=PL7Oro2kvkIzK9X9ctS7bK3VVq0zsEYQsR&index=3
//56:48