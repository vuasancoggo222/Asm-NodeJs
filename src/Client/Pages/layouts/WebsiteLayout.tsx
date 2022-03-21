import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Navigation from '../../Components/Navigation'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
    
  )
}

export default WebsiteLayout