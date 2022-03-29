import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const SignIn = (props: Props) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div style={{ margin:"30px auto"}}>
      <Form
      name="normal_login"
      className="login-form"
      style={{  width:"300px"}}
      
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%"}} className="login-form-button">
          Log in
        </Button><span style={{marginTop:"10px"}}>You don't have an account ? </span>
        <br /><Link to="/sign-up" className=""> register now!</Link>
      </Form.Item>
    </Form>
    </div>
  )
}

export default SignIn
