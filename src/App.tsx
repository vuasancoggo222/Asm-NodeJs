import { useState } from "react";
import "./index.css";
import 'antd/dist/antd.css';
import { useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import type { ProductType } from "./Client/Types/product";
import { productList } from "./Client/Api/product";
import AdminLayout from "./Client/Pages/layouts/AdminLayout";
import Dashboard from "./Client/Pages/admin/DashBoard";
import ProductManager from "./Client/Pages/admin/Product/Product";
import CategoryManager from "./Client/Pages/admin/Category/CategoryManager";
import NewsManager from "./Client/Pages/admin/News/NewsManager";
import OrderManager from "./Client/Pages/admin/Order/OrderManager";
import ContactManager from "./Client/Pages/admin/Contact/ContactManager";
import UserManager from "./Client/Pages/admin/User/UserManager";
import WebsiteLayout from "./Client/Pages/layouts/WebsiteLayout";
import ProductEdit from "./Client/Pages/admin/Product/ProductEdit";
import PrivateRouter from "./Client/Components/PrivateRouter";

const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await productList();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleSignin = ()=>{
    console.log(1);
    
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
        {/* <Route path="login" element={<Login onFinish={handleSignin} />} /> */}
        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product">
           <Route index element={<ProductManager data={products} />}/>
           <Route path=":id/edit" element={<ProductEdit/>}/>
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
