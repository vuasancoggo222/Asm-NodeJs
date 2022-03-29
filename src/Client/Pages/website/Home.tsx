import { Layout } from 'antd'
import React from 'react'
import SiderLayout from '../../Components/SiderLayout'
import SliderLayout from '../../Components/SliderLayout'

type Props = {}

const Home = (props: Props) => {
  return (
   <div>
      <SliderLayout/>
    <Layout>
    <SiderLayout/> 
    </Layout>
   </div>
  )
}

export default Home