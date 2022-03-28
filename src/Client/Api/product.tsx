import instance from "./instance";
import type { ProductType } from "../Types/product";
export const productList = () => {
  const url = `products`;
  return instance.get(url);
};
export const createProduct = (product: ProductType) => {
  const url = `products`;
  return instance.post(url,product);
};
export const updateProduct = (product: ProductType) => {
  const url = `product/${product._id}`;
  return instance.put(url,product);
};
export const read = ( id : number ) => {
    const url = `product/${id}`;
    return instance.get(url);
  };
  export const removeProduct = ( id : number ) => {
    const url = `product/${id}`;
    return instance.delete(url);
  };
