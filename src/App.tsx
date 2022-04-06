import { useState } from "react";
import "./index.css";
import "./App.css"
import 'antd/dist/antd.css';
import { useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import type { ProductType } from "./Client/Types/product";
import { createProduct, getLatest, productList,removeProduct, updateProduct} from "./Client/Api/product";
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
import { Modal,message, notification } from "antd";
import ProductAdd from "./Client/admin/Product/ProductAdd";
import SignIn from "./Client/Pages/auth/SignIn";
import SignUp from "./Client/Pages/auth/SignUp";
import Home from "./Client/Pages/website/Home";
import { signin, signup } from "./Client/Api/auth";
import { UserType } from "./Client/Types/user";
import {useNavigate} from "react-router-dom"
import { Categorylist } from "./Client/Api/category";
import { CategoryType } from "./Client/Types/category";
import { authenticate } from "./Client/utils/localStorage";
import Products from "./Client/Pages/website/Products";
import ProductDetail from "./Client/Pages/website/ProductDetail";
const App = () => {
  const navigate = useNavigate()
  //Products
  const [products, setProducts] = useState<ProductType[]>([]); 
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [latestProduct, setLatestProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await productList();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleRemove = async (id :number)=>{
  try {
    Modal.confirm({
      title: 'Are you sure to remove this product ?',
      onOk: async () => {
        console.log(id);
         await removeProduct(id)
          message.success('Delete product successfully',2);
        setProducts(products.filter(item => item._id !== id));
      }
    })
  } catch (error:any) {
    message.error(`${error.response.data.message}`,2);
  }
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
  try {  
    const {data} = await updateProduct(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
    message.success('Update product successfully',2);
    navigate("/admin/product")
    
  } catch (error:any) {
    message.error(`${error.response.data.message}`,2);
  }
  }
  //SignIn
  const handleSignIn = async (user : UserType) => {
   try {
     const {data} = await signin(user);
   
     notification.success({
       message: `Login successfully!!`,
       description: `Welcome to my website ${data.user.name}`
     })
     authenticate(data, () => {
      navigate('/')
  })
     
   } catch (error:any) {
    notification.error({
      message: `Login failed !!`,
      description: `${error.response.data.message}`,
    })
   } 
  }
//Sign up
const handleSignUp = async (user : UserType) => {
  try {
    const {data} = await signup(user)
    notification.success({
      message: `Register successfully!!`,
      description: `Please login your account`
    })
    navigate('/sign-in')
  } catch (error:any) {
    notification.error({
      message: `Login failed !!`,
      description: `${error.response.data.message}`,
    })
    
  }
}

useEffect(() => {
  const getCategory = async () => {
    const {data} = await Categorylist()
    setCategory(data)
  }
  getCategory()
},[])

// Get latest products
useEffect(() => {
  const getLatestProducts = async () => {
    const limit = 4
    const {data} = await getLatest(limit)
    setLatestProduct(data)  
  }
  getLatestProducts()
},[])

  return (
    <div className="App ">
      <Routes>
        <Route element={<WebsiteLayout/>}>
        <Route path="/" element={<Home products={products} category={category} latestProduct={latestProduct} />} />
        <Route path="products" element={<Products products={products} />} />
        <Route path="product-detail/:id" element={<ProductDetail/>} />
        <Route path="sign-in" element={<SignIn onSignin={handleSignIn} />} />
        <Route path="sign-up" element={<SignUp onSignup={handleSignUp} />} />
        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
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
