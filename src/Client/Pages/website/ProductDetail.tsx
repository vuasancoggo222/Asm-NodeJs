import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../../Api/product'
import { ProductType } from '../../Types/product'

type Props = {

}

const ProductDetail = (props: Props) => {
    const {id} = useParams()
   const [products,setProducts] = useState<ProductType[]>([])
    useEffect(() => {
       const getDetailProduct = async (id : any) => {
        const {data} = await read(id)
        setProducts(data)
       }
       getDetailProduct(id)
    },[])
    console.log(products);
    
  return (
    <Content>
        <img src="https://i.picsum.photos/id/583/250/350.jpg?hmac=IZQerD9T4bBOY9Qmmyck66riJslIHPDN5RYgz7jmF1o" alt="" style={{marginLeft:"50px",marginTop:"25px",width:"350px",height:"450px"}} />
       
        <div>
         <h2>{products.name}</h2>
         <span>{products.price}</span>
         <div>{products.description}</div>
        </div>
    </Content>
  )
}

export default ProductDetail