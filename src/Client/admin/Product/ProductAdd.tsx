import React, { useEffect, useState } from "react";
import { Form, Input, Button, InputNumber, Switch, Select, Progress, notification } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../Types/product";
import {Categorylist} from '../../Api/category'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from "axios";
type ProductAddProps = {
  onAdd: (product: ProductType) => void;
};

const ProductAdd = (props: ProductAddProps) => {
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
      const error = new Error("Some error");
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }:any) => {
    setDefaultFileList(fileList);
    console.log(file);
    
  };
    const navigate = useNavigate();
  const onFinish = (values: ProductType) => {
    const newValues = {...values, image : url}
    console.log("Success:", newValues);
    props.onAdd(newValues);
    navigate("/admin/product");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await Categorylist();
      console.log(data);
      setCategory(data)
    };
    getCategory();
  },[])
  
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 8 }}
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{ status : true, }}
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
        rules={[{ required: true, message: 'Please input product description!' },{min : 29,message:"Product name must be at least 30 characters"}]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="image" name = "image">
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
  );
};

export default ProductAdd;
