import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/home/homepage.component'
import ShopPage from '../../pages/shop/shop.component'



function Routers() {
  return (
    <Routes>
        <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='shop' element={<ShopPage />} />
        </Route>

         {/* <Route exact path='/' element={<HomePage />} />
         <Route path='/shop' element={<ShopPage />} />
    //   <Route path='/:id' element={<Hats />} />
    //   <Route path='/new' element={<Newbook />} />
    //   <Route path='*' element={<NotFound />} /> */}
    </Routes>


  )
}

export default Routers