import { Layout } from 'antd'
import React from 'react'
import SiderLayout from '../../Components/SiderLayout'
import CarouselLayout from '../../Components/CarouselLayout'

type Props = {}

const Home = (props: Props) => {
  return (
   <div>
  <>
  <CarouselLayout/>
    <Layout>
    <SiderLayout/> 
    </Layout>
  </>
   </div>
  )
}

export default Home