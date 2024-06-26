import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import TawkTo from '../customer/components/ChatBot/TawkTo'
import SearchResults from '../customer/components/SearchResults/SearchResults'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
import NotFound from '../customer/pages/HomePage/Notfound'
import Contact from '../customer/pages/Contact'


const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <div>
          <TawkTo/>
        </div >
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
            <Route path="/account/rate/:productId" element={<NotFound />}></Route>
            <Route path='/search' element={<SearchResults />}></Route>
            <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
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