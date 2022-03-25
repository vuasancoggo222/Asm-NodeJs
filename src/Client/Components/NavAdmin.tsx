import React from 'react'
import {NavLink} from "react-router-dom"
type Props = {}

const NavAdmin = (props: Props) => {
  return (
    <nav className="bg-white h-[45px] drop-shadow-md">
  <ul className="flex justify-center pt-[12px]">
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="dashboard">Dashboard</NavLink>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="product">Bảng Sản Phẩm</NavLink>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="news">Bảng Bài Viết</NavLink>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="user">Bảng Người Dùng</NavLink>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="contact">Bảng Phản Hồi</NavLink>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="order">Bảng Đơn Hàng</NavLink>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="category">Bảng Danh Mục</NavLink>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <NavLink to="/">Về Trang Chủ</NavLink>
    </li>
  </ul>
</nav>

  )
}

export default NavAdmin
