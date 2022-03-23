import instance from "./instance";
import type { ProductType } from "../Types/product";
export const productList = () =>{
const url = `products`
return instance.get(url)
}
export const create = (product: ProductType) =>{
    const url = `products`
    return instance.get(url)
    }
