import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../../Components/Header'
import { Layout } from "antd";
import FooterLayout from '../../Components/Footer';
import { ProductType } from '../../Types/product';
import { CategoryType } from '../../Types/category';
type WebsiteLayoutProps = {
 
}

const WebsiteLayout = (props: WebsiteLayoutProps) => {
  return (
    <Layout className="layout" style={{margin:"0 15px"}}>
      <HeaderLayout/>
      <Outlet/>
      <FooterLayout/>
    </Layout>
  )
}

export default WebsiteLayout