import { Col, Row, Slider } from 'antd'
import React from 'react'
import { ProductType } from '../Types/product'
type Props = {
 products: ProductType[]
}

const ContentLayout = (props: Props) => {
  console.log(props.products);
  
  const style = {padding: '8px 0' };
  return (
   <div style={{marginLeft:"45px"}}>
    {props.products && props.products.map((item) => {
      
      
    })}
   </div>
  )
}

export default ContentLayout