import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="max-w-full bg-white mt-[25px] h-[330px]">
      <div className="grid grid-cols-5 gap-[20px] max-w-[1250px] mx-auto pt-[15px] font-semibold">
        <div>
          <h1 className="text-left mb-4">Hỗ trợ khách hàng</h1>
          <ul className="text-[#808089] text-[12px] font-normal">
            <li className="mb-[10px]">
              <Link to="">
                Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)
              </Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Các câu hỏi thường gặp</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Gửi yêu cầu hỗ trợ</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Hướng dẫn đặt hàng</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Phương thức vận chuyển</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Chính sách đổi trả</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Hướng dẫn trả góp</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Chính sách hàng nhập khẩu</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Hỗ trợ khách hàng: hotro@tiki.vn</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Báo lỗi bảo mật: security@tiki.vn</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-left mb-4">Về chúng tôi</h1>
          <ul className="text-[#808089] text-[12px] font-normal text-left">
            <li className="mb-[10px]">
              <Link to=""> Giới thiệu Tiki</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="" className="mb-[10px]">
                Tuyển dụng
              </Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Chính sách bảo mật thanh toán</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Chính sách bảo mật thông tin cá nhân</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Chính sách giải quyết khiếu nại</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Điều khoản sử dụng</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Giới thiệu Tiki Xu</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Tiếp thị liên kết cùng Tiki</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Bán hàng doanh nghiệp</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-left mb-4">Hợp tác liên kết</h1>
          <ul className="text-[#808089] text-[12px] font-normal text-left">
            <li className="mb-[10px]">
            <Link to="">Quy chế hoạt động Sàn GDTMĐT</Link>
            </li>
            <li className="mb-[10px]">
              <Link to="">Bán hàng cùng Tiki</Link>
            </li>
          </ul>
          <h1 className="text-left mb-4">Chứng nhận bởi</h1>
          <div className="grid grid-cols-[40px_80px]">
            <img
              className="w-[30px]"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
            />
            <img
              className="w-[80px]"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
            />
          </div>
        </div>
        <div>
          <h1 className="text-left mb-4">Phương thức thanh toán</h1>
          <div className="grid grid-cols-5">
            <img
              className="w-[35px] mb-2"
              src="https://static.mservice.io/img/logo-momo.png"
            />
            <img
              className="w-[35px] mb-2"
              src="https://gomoney.vn/wp-content/uploads/2021/01/grab-pay-logo-A0CA65B6C4-seeklogo.com_.png"
            />
            <img
              className="w-[35px] mb-2"
              src="https://thuthuatmaytinh.vn/wp-content/uploads/2019/02/ZaloPay-logo.png"
            />
            <img
              className="w-[35px]"
              src="https://icons-for-free.com/iconfiles/png/512/payment+online+transaction+payment+method+visa+icon-1320186278106432321.png"
            />
            <img
              className="w-[35px]"
              src="https://icon-library.com/images/master-card-icon/master-card-icon-28.jpg"
            />
            <img
              className="w-[35px]"
              src="https://cdn-icons-png.flaticon.com/512/196/196559.png"
            />
            <img
              className="w-[35px]"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/atm-card-2020027-1703538.png"
            />
          </div>
          <h1 className="text-left mb-3 mt-[10px]">Dịch vụ giao hàng</h1>
          <img
            className="w-[100px]"
            src="https://static.topcv.vn/company_logos/cong-ty-tnhh-tikinow-smart-logistics-603b82be436b1.jpg"
          />
        </div>
        <div>
          <h1 className="text-right mb-4">Kết nối với chúng tôi</h1>
          <div className="flex ml-[65px] mb-2">
            <img
              className="w-[60px]"
              src="data:image/png;base64,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"
            />
            <img
              className="w-[60px]"
              src="https://brandlogos.net/wp-content/uploads/2021/11/zalo-logo.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
