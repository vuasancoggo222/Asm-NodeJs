import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../../Components/Header'
import { Layout } from "antd";
import FooterLayout from '../../Components/Footer';
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <Layout className="layout" style={{margin:"0 15px"}}>
      <HeaderLayout/>
      <Outlet/>
      <FooterLayout/>
    </Layout>
  )
}

export default WebsiteLayout