import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../../../Types/product";
import { useNavigate, useParams } from 'react-router-dom';
import {read} from "../../../Api/product"
type ProductEditProps = {}
type FormInput = {
    name: string,
    price: number,
}
const ProductEdit = (props: ProductEditProps) => {
    const {id} = useParams()
    console.log(id);
    const { register , handleSubmit,formState:{errors},reset} = useForm<FormInput>()
    const navigate = useNavigate()
    useEffect(() => {
    const getProducts =  async () =>{
        const {data} = await read(id)
        reset(data)
        
    }
    getProducts()
    },[])
    const onSubmit : SubmitHandler<FormInput> = data => {
        console.log(data);
        navigate('/admin/product');
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên sản phẩm' {...register('name')}/>
        <input type="number" placeholder='Giá sản phẩm' {...register('price')}/>
        <button>Update</button>
    </form>
  )
}

export default ProductEdit