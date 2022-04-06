
import { Breadcrumb,Layout} from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import CarouselLayout from '../../Components/CarouselLayout'
import ProductContent from '../../Components/ProductContent'
import ProductSider from '../../Components/ProductSider'
import { ProductType } from '../../Types/product'

type ProductsProps = {
  products: ProductType[]
}

const Products = (props: ProductsProps) => {  
  return (
    <>
  <Breadcrumb style={{ marginLeft: "230px",marginTop: "15px"}}>
    <Breadcrumb.Item><NavLink to="/">Home</NavLink></Breadcrumb.Item>
    <Breadcrumb.Item>Product</Breadcrumb.Item>
  </Breadcrumb>
  <Layout style={{ flexDirection:"row"}}>
    <ProductSider/> 
    <ProductContent products={props.products}/>
  </Layout>
    </>    
  )
}

export default Products