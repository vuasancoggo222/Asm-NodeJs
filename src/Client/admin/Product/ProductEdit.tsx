import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {read} from "../../Api/product"
import { Form, Input, Button, InputNumber, Switch, notification, Upload, Select } from "antd";
import { ProductType } from "../../Types/product";
import ImgCrop from 'antd-img-crop';
import axios from 'axios';
import { Categorylist } from '../../Api/category';
type ProductEditProps = {
    onUpdate : (product: ProductType) => void
}

const ProductEdit = (props: ProductEditProps) => {
    const {id} = useParams()
    const [form] = Form.useForm();
    const [url,setUrl] = useState([])
    const [category, setCategory] = useState([])
  const [defaultFileList, setDefaultFileList] = useState([]);
  const uploadImage = async (options:any) => {
    const { onSuccess, onError, file } = options;
    const formData = new FormData();
    
    formData.append("file", file);
    formData.append("upload_preset", "ypnhyinn");
    try {
      const res = await axios({
        url: "https://api.cloudinary.com/v1_1/ecma/image/upload",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-formendcoded",
        },
        data: formData,
      }
      
      );
      onSuccess('Ok');
      notification.success({
       "message" : "Upload successfully !",
       "description": "Image uploaded successfully to Cloudinary !!"
      })
      console.log("server res: ", res);
      setUrl([...url,{imgname: res.data.original_filename,url : res.data.secure_url} ])
    } catch (err) {
      console.log("Error: ", err);
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }:any) => {
    setDefaultFileList(fileList);
    // console.log(file);
    
  };
    useEffect(() => {
    const getProducts =  async () =>{
        const {data} = await read(id)
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
    useEffect(() => {
      const getCategory = async () => {
        const { data } = await Categorylist();
        console.log(data);
        setCategory(data)
      };
      getCategory();
    },[])
    const onFinish = (values: ProductType) => {
        console.log("Success:", values);
        const newValues = {...values,_id:id,image: url}
        console.log(newValues);
        props.onUpdate(newValues);
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
    <Form.Item label="Image" name="image">
    <ImgCrop>
<Upload
        accept="image/*"
        customRequest={uploadImage}
        onChange={handleOnChange}
        listType="picture-card"
        defaultFileList={defaultFileList}
        className="image-upload-grid"
      >
        {defaultFileList.length < 5  && '+ Upload'}
      </Upload>
</ImgCrop>
</Form.Item>
<Form.Item label="Select" name="category" >
        <Select>
          {category && category.map((item : ProductType,index) => { 
            return <Select.Option key={index} value={item._id}>{item.name}</Select.Option>
          }
          )}
        </Select>
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