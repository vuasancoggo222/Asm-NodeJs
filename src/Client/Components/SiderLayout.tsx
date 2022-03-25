import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, TagsOutlined, SortAscendingOutlined, ColumnHeightOutlined, SortDescendingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;
type Props = {}

const SiderLayout = (props: Props) => {
  return (
    <Sider width={220} className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<TagsOutlined />} title="Category">
        <Menu.Item key="1">Danh Mục 1</Menu.Item>
        <Menu.Item key="2">Danh Mục 2</Menu.Item>
        <Menu.Item key="3">Danh Mục 3</Menu.Item>
        <Menu.Item key="4">Danh Mục 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<ColumnHeightOutlined />}  title="Sort">
        <Menu.Item icon={<SortAscendingOutlined />}  key="5">Sort Ascending</Menu.Item>
        <Menu.Item icon={<SortDescendingOutlined />} key="6">Sort Descending</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
  )
}

export default SiderLayout