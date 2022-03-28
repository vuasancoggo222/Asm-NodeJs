import { useState } from "react";
import "./index.css";
import 'antd/dist/antd.css';
import { useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import type { ProductType } from "./Client/Types/product";
import { createProduct, productList,removeProduct, updateProduct} from "./Client/Api/product";
import AdminLayout from "./Client/Pages/layouts/AdminLayout";
import Dashboard from "./Client/admin/DashBoard";
import ProductManager from "./Client/admin/Product/Product";
import CategoryManager from "./Client/admin/Category/CategoryManager";
import NewsManager from "./Client/admin/News/NewsManager";
import OrderManager from "./Client/admin/Order/OrderManager";
import ContactManager from "./Client/admin/Contact/ContactManager";
import UserManager from "./Client/admin/User/UserManager";
import WebsiteLayout from "./Client/Pages/layouts/WebsiteLayout";
import ProductEdit from "./Client/admin/Product/ProductEdit";
import PrivateRouter from "./Client/Components/PrivateRouter";
import { Modal } from "antd";
import ProductAdd from "./Client/admin/Product/ProductAdd";

const App = () => {
  //Products
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await productList();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleRemove = async (id :number)=>{
    Modal.confirm({
      title: 'Are you sure to remove this product ?',
      onOk: async () => {
        console.log(id);
         await removeProduct(id)
        setProducts(products.filter(item => item._id !== id));
      }
    })
  }
  const handleAdd = async (product: ProductType) =>{
try {
  const {data} = await createProduct(product);
  setProducts([...products,data])
} catch (error) {
  console.log("Khong thanh cong");
}
  }
  const handleUpdate = async (product: ProductType) =>{
    console.log(product);
    
  try {  
    const {data} = await updateProduct(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
    console.log("ok");
  } catch (error) {
    console.log("Khong thanh cong");
  }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
        {/* <Route path="login" element={<Login onFinish={handleSignin} />} /> */}
        </Route>
        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product">
           <Route index element={<ProductManager onRemove={handleRemove} data={products}/>}/>
           <Route path="add" element={<ProductAdd onAdd={handleAdd}/>}/>
           <Route path=":id/edit" element={<ProductEdit onUpdate={handleUpdate}/>}/>
          </Route>
          <Route path="category" element={<CategoryManager />} />
          <Route path="news" element={<NewsManager />} />
          <Route path="orders" element={<OrderManager />} />
          <Route path="contact" element={<ContactManager />} />
          <Route path="user" element={<UserManager />} />
          <Route path="order" element={<OrderManager />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
