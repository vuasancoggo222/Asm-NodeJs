import React from "react";
import { ProductType } from "../../../Types/product";

type ProductManagerProps = {
  data: ProductType[]
};
const ProductManager = (props: ProductManagerProps) => {
  
  return (
    <div>
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Product Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Product Price
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Product Image
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Product Description
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Category
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
</button>

              </th>
            </tr>
          </thead>
          <tbody>
          {props.data &&
          props.data.map((product,index) => {
          return (
            <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
               <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {index+1}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {product.price}
            </td>
           
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             This is a image
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             This is a description
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             A random category
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150
             bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
              Update</button>
              <button className="h-10 px-5 m-2 text-red-100 transition-colors duration-150
               bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Delete</button>
            </td>
          </tr>
          );
        })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ProductManager;
