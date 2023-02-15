import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/home/homepage.component'
import ShopPage from '../../pages/shop/shop.component'
import SignInAndSignUpPage from '../../pages/signIn-and-signUp/signIn-and-signUp'


function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='signin' element={<SignInAndSignUpPage />} />
        </Route>
        {/* <Route exact path='/' element={<HomePage />} />
           <Route path='/shop' element={<ShopPage />} />
      //   <Route path='/:id' element={<Hats />} />
      //   <Route path='/new' element={<Newbook />} />
      //   <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>


  )
}

export default Routers