import { useState } from 'react'
import logo from './logo.svg'
import { useEffect } from 'react'
import './App.css'
import type { ProductType } from './Client/Types/product'
import axios from 'axios'
const App = () => {
  
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  
  useEffect(() => { // 3
    const getProducts = async () => {
       const { data } = await axios.get('http://localhost:8000/api/products');
       console.log(data);
       setProducts(data);
    }
    getProducts();
 },[])

  return (
    <div className="App">
     
    </div>
  )
}

export default App
