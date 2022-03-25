import instance from "./instance";
import type { ProductType } from "../Types/product";
export const productList = () => {
  const url = `products`;
  return instance.get(url);
};
export const create = (product: ProductType) => {
  const url = `products`;
  return instance.get(url);
};
export const update = (product: ProductType) => {
  const url = `products/${product._id}`;
  return instance.put(url);
};
export const read = ( id : number ) => {
    const url = `product/${id}`;
    return instance.get(url);
  };
