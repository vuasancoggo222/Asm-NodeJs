import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../Types/product";
import { Table, Tag, Space, Button, Modal } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

type ProductManagerProps = {
  data: ProductType[];
  onRemove: (id: number) => void;
};
type DataType = {
  key: React.Key;
  name: string;
  price: number;
  status: boolean;
  description: string;
  thumbnail?: any;
  category: string;
};
const ProductManager = (props: ProductManagerProps) => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "#",
    },
    {
      title: "Product name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
    },
    {
      title: "Thumbnail",
      key: "thumbnail",
      // dataIndex: "thumbnail",
      render :() => <img src="https://i.picsum.photos/id/574/100/100.jpg?hmac=m3h5bdn1HntN4XBt3g-QOp_RbY6ImWEtlNCcCDVdFIc" alt="" />
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
      render: (record: any) => (
        <Button onClick={() => setVisible(true)}>Xem chi tiết</Button>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <Button type="primary"><Link to={`/admin/product/${record._id}/edit`}>Update</Link></Button>
          <Button
            type="primary"
            danger
            onClick={() => props.onRemove(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
    {
      title : <Button><Link to="/admin/product/add">Add</Link></Button>
    },
  ];
  const Productdata: DataType[] = props.data.map((item, index) => {
    return {
      _id: item._id,
      key: index + 1,
      name: item.name,
      price: item.price,
      status: item.status,
      description: item.description,
      thumbnail: item.image,
      category: item.category,
    };
  });
  return (
    <div>
      <Table
        style={{ marginLeft:"100px",width: "1200px"}}
        columns={columns}
        dataSource={Productdata}
        rowKey="key"
      >
      </Table>

      <Modal
        title="Product description"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      ></Modal>
    </div>
  );
};

export default ProductManager;
