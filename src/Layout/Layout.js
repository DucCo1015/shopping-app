import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routers/Routers.js'

const Layout = () => {
  return (
    <>
     <Header/>
     <div>
      <Routers/>                    
     </div>
     <Footer/>
    </>
  )
}

export default Layout