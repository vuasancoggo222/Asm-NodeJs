import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {read} from "../../Api/product"
import { Form, Input, Button, InputNumber, Switch } from "antd";
import { ProductType } from "../../Types/product";
type ProductEditProps = {
    onUpdate : (product: ProductType) => void
}

const ProductEdit = (props: ProductEditProps) => {
    const {id} = useParams()
    const [form] = Form.useForm();
    const navigate = useNavigate()
    useEffect(() => {
    const getProducts =  async () =>{
        const {data} = await read(id)
        console.log(data);
        form.setFieldsValue({
            name: data.name,
            price : data.price,
            description : data.description,
            image : data.image,
            category : data.category
          });
    }
    getProducts()
    },[])
    const onFinish = (values: ProductType) => {
        console.log("Success:", values);
        const newValues = {...values,_id:id}
        console.log(newValues);
        
        props.onUpdate(newValues);
        // navigate("/admin/product");
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
      };
  return (
    <Form
    form={form}
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 8 }}
    autoComplete="off"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    initialValues={{ status : true }}
   
  >
    <Form.Item label="Product Name" name="name" rules={[{ required: true, message:"Please input product name"},{min: 5 , message : "Product name must be at least 5 characters"}]}>
      <Input />
    </Form.Item>
    <Form.Item
      label="Product Price"
      name="price"
      rules={[{ required: true, message: 'Please input product price!' }]}
    >
      <InputNumber/>
    </Form.Item>
    <Form.Item
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please input product description!' },{min : 30,message:"Product name must be at least 30 characters"}]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item label="URL" name="image" rules={[{ required: true, message:"Please input image" }]}>
      <Input placeholder="input placeholder" />
    </Form.Item>
    <Form.Item label="Category" name="category" rules={[{ required: true, message:"Please sellect category" }]}>
      <Input />
    </Form.Item>
    <Form.Item
      label="Stocking"
      name="status"
      valuePropName="checked"
      
    >
      <Switch defaultChecked />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 6, span: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default ProductEdit