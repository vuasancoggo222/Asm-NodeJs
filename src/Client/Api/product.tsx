import instance from "./instance";
import type { ProductType } from "../Types/product";
import { isAuthenticate } from "../utils/localStorage";
const {user} = isAuthenticate()
 const header = {
    headers: {
        "Authorization": `Bearer ${user.token}`
    }
  }
export const productList = () => {
  const url = `products/${user._id}`;
  return instance.get(url,header);
};
export const createProduct = (product: ProductType) => {
  const url = `products/${user._id}`;
  return instance.post(url,product,header);
};
export const updateProduct = (product: ProductType) => {
  const url = `product/${product._id}/${user._id}`;
  return instance.put(url,product,header);
};
export const read = ( id : number ) => {
    const url = `product/${id}`;
    return instance.get(url);
  };
  export const removeProduct = ( id : number ) => {
    const url = `product/${id}/${user._id}`;
    return instance.delete(url,header);
  };
