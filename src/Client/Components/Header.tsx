import React from 'react'
import {Link} from "react-router-dom"
type Props = {}
const Header = (props: Props) => {
  return (
   <header className="max-w-full bg-[#1A94FF]">
  <div className="flex justify-between py-[33px] m-auto max-w-screen-xl">
    <img className="logo w-[60px] h-[40px] ml-[15px] pb-2" src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"/>
    <Link to="" className="text-white text-xs font-semibold mt-3 mr-5 font-serif">Fake</Link>
    <form className="ml-[35px]" id="form-search">
      <input type="text" id="search" className="w-[650px] h-[40px] mr-[5px]" />
      <button className="w-[120px] h-[41px] bg-[#0E64BC] text-white shadow-blue-500/50">
        <Link to="/search">Search</Link>
      </button>
    </form>
    <form className="ml-[30px]">
      <div id="auth">
        <Link to="" className="text-2xl text-white ml-3 mr-3 "><i className="fas fa-user" /></Link>
        <Link to="/sign-in-page" id="signin" className="text-white text-sm">Đăng nhập/</Link>
        <Link to="/sign-up-page" id="sinup" className="text-white text-sm">Đăng ký</Link>
      </div>
      <div id="welcome_user" style={{display: 'none'}}>
        <Link to="" className="text-2xl text-white ml-3 mr-3"><i className="fas fa-user" /></Link>
        <Link to="" id="username" className="text-white text-sm" />
        <Link to="" id="logout" className="text-white text-sm">/ Đăng xuất</Link>
      </div>
    </form>
    <div className="mr-[25px]">
      <Link to="/cart" className="text-2xl text-white ml-3 mr-3"><i className="fas fa-shopping-cart" /></Link>
      <Link to="/cart" className="text-white text-sm">Giỏ hàng</Link>
    </div>
  </div>
</header>

  )
}

export default Header