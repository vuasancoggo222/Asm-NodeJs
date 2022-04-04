import { Layout } from 'antd'
import React from 'react'
import SiderLayout from '../../Components/SiderLayout'
import CarouselLayout from '../../Components/CarouselLayout'
import ContentLayout from '../../Components/ContentLayout'
import { ProductType } from '../../Types/product'
import { CategoryType } from '../../Types/category'

type Props = {
  products : ProductType[]
  category : CategoryType[]
}

const Home = (props: Props) => {
  console.log(props);
  
  return (
  <>
  <CarouselLayout/>
    <Layout>
    <SiderLayout category={props.category}/>
    <ContentLayout products={props.products}/> 
    </Layout>
  </>
  )
}

export default Home