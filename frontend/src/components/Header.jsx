import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait, IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { FaFacebookF, FaList, FaLock, FaUser, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaTwitter, FaHeart, FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const Header = ({categoris}) => {
  const { pathname } = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");

  const user = true;
  const wishlist_count = 4;
  const cart_count = 4;

  const categorys = [
    "Mobiles", "Laptops", "Speakers", "Top wear",
    "Footwear", "Watches", "Home Decor", "Smart Watches",
  ];

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/shops", label: "SHOP" },
    { to: "/blog", label: "BLOG" },
    { to: "/about", label: "ABOUT US" },
    { to: "/contact", label: "CONTACT US" },
    { to: "/cart", label: "CART" },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  const activeClass = (path) =>
    pathname === path
      ? "text-[#059473]"
      : "text-[#2b3445] hover:text-[#059473] transition-colors";

  return (
    <div className="w-full bg-white font-sans shadow-sm pb-4">
      <div className="hidden md:block bg-[#caddff] w-full">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="flex w-full justify-between items-center h-[45px] text-slate-600">
            <ul className="flex justify-start items-center gap-8 font-semibold text-slate-800">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:top-1/2 after:-translate-y-1/2">
                <MdEmail />
                <span>support@gmail.com</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-sm">
                <IoMdPhonePortrait />
                <span>+(123) 3243 343</span>
              </li>
            </ul>

            <div className="flex justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-4 text-slate-800">
                <a href="#" aria-label="Facebook" className="hover:text-[#059473] transition"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter" className="hover:text-[#059473] transition"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#059473] transition"><FaLinkedin /></a>
                <a href="#" aria-label="GitHub" className="hover:text-[#059473] transition"><FaGithub /></a>
              </div>

              <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative before:absolute before:h-[18px] before:w-[1px] before:bg-[#afafaf] before:-left-[20px] before:top-1/2 before:-translate-y-1/2 after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[20px] after:top-1/2 after:-translate-y-1/2">
                <img src="/images/language.png" alt="language" className="w-5 h-5" />
                <IoMdArrowDropdown />
                <ul className="absolute invisible opacity-0 transition-all top-10 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:opacity-100 group-hover:top-6 group-hover:bg-black z-50 shadow-lg">
                  <li className="hover:text-[#059473] transition">Hindi</li>
                  <li className="hover:text-[#059473] transition">English</li>
                </ul>
              </div>

              {user ? (
                <Link className="flex cursor-pointer justify-center items-center gap-2 text-sm font-semibold text-slate-800 hover:text-[#059473] transition" to="/dashboard">
                  <FaUser />
                  <span>mobin mohammadi</span>
                </Link>
              ) : (
                <Link className="flex cursor-pointer justify-center items-center gap-2 text-sm font-semibold text-slate-800 hover:text-[#059473] transition" to="/login">
                  <FaLock />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center h-[80px] lg:h-[90px]">
          
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Easy Shop" className="h-[35px] object-contain" />
            </Link>
            <button className="lg:hidden text-2xl text-slate-800" onClick={() => setSidebarOpen(true)}>
              <FaList />
            </button>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link className={`${activeClass(to)}`} to={to}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/wishlist" className="relative flex justify-center items-center w-[45px] h-[45px] rounded-full bg-[#f5f5f5] hover:bg-[#e2e2e2] transition-all">
              <FaHeart className="text-[#059473] text-xl" />
              <span className="absolute -top-1 -right-1 bg-[#ef4444] text-white text-[11px] font-bold w-5 h-5 flex justify-center items-center rounded-full border-2 border-white">
                {wishlist_count}
              </span>
            </Link>

            <Link to="/cart" className="relative flex justify-center items-center w-[45px] h-[45px] rounded-full bg-[#f5f5f5] hover:bg-[#e2e2e2] transition-all">
              <FaCartShopping className="text-[#059473] text-xl" />
              <span className="absolute -top-1 -right-1 bg-[#ef4444] text-white text-[11px] font-bold w-5 h-5 flex justify-center items-center rounded-full border-2 border-white">
                {cart_count}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1400px] mx-auto mt-2 lg:mt-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
          
          <div className="hidden lg:block relative w-[260px] shrink-0">
            <button
              onClick={() => setCategoryOpen((v) => !v)}
              className="w-full h-[52px] bg-[#059473] text-white flex justify-between px-6 items-center font-bold text-[15px] rounded-sm transition-colors hover:bg-[#047d62]"
            >
              <div className="flex items-center gap-3">
                <FaList className="text-lg" />
                <span>All Category</span>
              </div>
              <IoIosArrowDown className={`transition-transform duration-300 ${categoryOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`absolute top-[55px] left-0 w-full bg-white border border-t-0 shadow-lg z-50 overflow-hidden transition-all duration-300 ${categoryOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="py-2 text-slate-600 font-medium">
                {categoris?.map((c) => (
                  <li key={c._id} className="px-6 py-2.5 hover:bg-slate-50 transition-colors">
                    <Link className="text-sm block w-full" to={c.slug}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full flex-grow">
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full h-[52px] border border-slate-200 rounded-sm relative bg-white group focus-within:border-[#059473] transition-colors">
              
              <div className="hidden md:flex items-center border-l border-slate-200 px-2 bg-transparent">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-[160px] text-slate-700 text-sm font-medium bg-transparent outline-none cursor-pointer border-none"
                >
                  <option value="">Select category</option>
                  {categorys.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <IoIosArrowDown className="text-slate-400 text-sm pointer-events-none -ml-4" />
              </div>

              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-grow bg-transparent text-slate-600 outline-none px-4 h-full text-sm placeholder:text-slate-400"
                type="text"
                placeholder="what do you need"
              />
              
              <button type="submit" className="bg-[#059473] hover:bg-[#047d62] transition-colors px-6 md:px-8 h-full font-bold text-[15px] text-white flex items-center justify-center rounded-r-sm">
                SEARCH
              </button>
            </form>
          </div>

          <div className="hidden xl:flex items-center gap-4 shrink-0 px-2">
            <div className="w-[50px] h-[50px] rounded-full flex bg-[#f5f5f5] justify-center items-center">
              <FaPhoneAlt className="text-slate-800 text-lg" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[15px] font-bold text-slate-800 dir-ltr">+8803242343243</h2>
              <span className="text-xs text-slate-500">support 33/45 time</span>
            </div>
          </div>

        </div>
      </div>

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[999] lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />
      
      <div
        className={`w-[300px] fixed top-0 z-[1000] bg-white h-screen py-6 px-6 overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "left-0" : "-left-[300px]"
        }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
          <img src="/images/logo.png" alt="Easy Shop" className="h-[30px] object-contain" />
          <button onClick={() => setSidebarOpen(false)} className="text-2xl text-slate-500 hover:text-red-500">
            &times;
          </button>
        </div>

        <ul className="flex flex-col gap-4 font-bold text-slate-700">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link className="block py-1 hover:text-[#059473]" to={to} onClick={() => setSidebarOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4 text-sm">
          <Link to={user ? "/dashboard" : "/login"} className="flex items-center gap-2 text-slate-600 hover:text-[#059473]">
            <FaUser /> {user ? "mobin mohammad" : "Login"}
          </Link>
          <div className="flex items-center gap-2 text-slate-600">
            <MdEmail /> support@gmail.com
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <IoMdPhonePortrait /> +8803242343243
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;