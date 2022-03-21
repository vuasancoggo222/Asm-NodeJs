import React from 'react'
import {Link} from "react-router-dom"
type Props = {}

const Navigation = (props: Props) => {
  return (
  <nav className="bg-white h-[45px] drop-shadow-md">
  <ul className="flex justify-center pt-[12px]">
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <Link to="/">Trang Chủ</Link>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <Link to="/products-page">Sản Phẩm</Link>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <Link to="/news-page">Tin Tức</Link>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <Link to="/contact-page">Liên Hệ</Link>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <Link to="/about-page">Về Chúng Tôi</Link>
    </li>
    <li className="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
      <Link to="/admin">Trang Quản Trị</Link>
    </li>
  </ul>
</nav>

  )
}

export default Navigation