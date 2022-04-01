import { Layout } from 'antd'
import React from 'react'
import SiderLayout from '../../Components/SiderLayout'
import CarouselLayout from '../../Components/CarouselLayout'
import ContentLayout from '../../Components/ContentLayout'
import { ProductType } from '../../Types/product'

type Props = {
  products : ProductType[]
}

const Home = (props: Props) => {
  console.log(props);
  
  return (
  <>
  <CarouselLayout/>
    <Layout>
    <SiderLayout/>
    <ContentLayout products={props.products}/> 
    </Layout>
  </>
  )
}

export default Home