import { useState } from "react";
import "./index.css";
import logo from "./logo.svg";
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
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>

        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ProductManager data={products} />} />
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
