import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../../Components/Header'
import { Layout } from "antd";
import FooterLayout from '../../Components/Footer';
import SiderLayout from '../../Components/SiderLayout';
import ContentLayout from '../../Components/ContentLayout';
import SliderLayout from '../../Components/SliderLayout';

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <Layout className="layout" style={{margin:"0 15px"}}>
      <HeaderLayout/>
      <SliderLayout/>
      <Layout>
      <SiderLayout/> 
      </Layout>
      <Outlet/>
      <FooterLayout/>
    </Layout>
  )
}

export default WebsiteLayout