import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait, IoIosArrowDown } from "react-icons/io";
import {
  FaFacebookF,
  FaList,
  FaLock,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaTwitter, FaHeart, FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const { categorys } = useSelector((state) => state.home);

  const user = true;
  const wishlist_count = 4;
  const cart_count = 4;

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/shops", label: "SHOP" },
    { to: "/blog", label: "BLOG" },
    { to: "/about", label: "ABOUT US" },
    { to: "/contact", label: "CONTACT US" },
  ];

  const activeClass = (path) =>
    pathname === path
      ? "text-emerald-600"
      : "text-slate-700 hover:text-emerald-600 transition-colors";

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-slate-100 font-sans">
      <div className="hidden md:block bg-slate-900 text-slate-300">
        <div className="w-[92%] max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center h-10 text-xs">
            <ul className="flex items-center gap-6">
              <li className="flex items-center gap-2 hover:text-white transition">
                <MdEmail className="text-emerald-400" />
                <span>support@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <IoMdPhonePortrait className="text-emerald-400" />
                <span>+(123) 3243 343</span>
              </li>
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedin, FaGithub].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white transition-all"
                    >
                      <Icon size={12} />
                    </a>
                  ),
                )}
              </div>

              <div className="relative group cursor-pointer flex items-center gap-1.5 px-3 py-1 rounded-md hover:bg-white/5 transition">
                <img
                  src="/images/language.png"
                  alt="language"
                  className="w-4 h-4"
                />
                <span className="text-xs font-medium">EN</span>
                <IoIosArrowDown
                  size={12}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
                <ul className="absolute top-full right-0 mt-1 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 w-28 bg-white text-slate-700 rounded-lg shadow-xl border border-slate-100 py-1.5 z-50">
                  <li className="px-3 py-1.5 text-xs hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer transition">
                    English
                  </li>
                  <li className="px-3 py-1.5 text-xs hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer transition">
                    فارسی
                  </li>
                </ul>
              </div>

              <Link
                className="flex items-center gap-2 text-xs font-semibold hover:text-emerald-400 transition"
                to={user ? "/dashboard" : "/login"}
              >
                {user ? <FaUser size={12} /> : <FaLock size={12} />}
                <span>{user ? "mobin mohammadi" : "Login"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[92%] max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20 gap-4">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/images/logo.png"
                alt="Easy Shop"
                className="h-8 lg:h-9 object-contain"
              />
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <FaList />
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold tracking-wide">
            {navLinks.map(({ to, label }) => (
              <Link key={to} className={activeClass(to)} to={to}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              to="/wishlist"
              className="relative w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Wishlist"
            >
              <FaHeart size={16} />
              {wishlist_count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                  {wishlist_count}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Cart"
            >
              <FaCartShopping size={16} />
              {cart_count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                  {cart_count}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="ml-1 px-5 h-11 flex items-center justify-center rounded-full bg-emerald-600 text-white text-[13px] font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
            >
              {user ? "Dashboard" : "Login"}
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[92%] max-w-[1400px] mx-auto pb-4">
        <div className="flex items-center gap-3 lg:gap-5">
          <div className="hidden lg:block relative w-[240px] shrink-0">
            <button
              onClick={() => setCategoryOpen((v) => !v)}
              className="w-full h-12 bg-emerald-600 text-white flex justify-between px-5 items-center font-semibold text-sm rounded-xl transition-colors hover:bg-emerald-700"
            >
              <div className="flex items-center gap-2.5">
                <FaList size={14} />
                <span>All Category</span>
              </div>
              <IoIosArrowDown
                size={16}
                className={`transition-transform duration-300 ${categoryOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute top-[calc(100%+6px)] left-0 w-full bg-white border border-slate-100 rounded-xl shadow-2xl shadow-slate-200/60 z-50 overflow-hidden transition-all duration-300 origin-top ${
                categoryOpen
                  ? "max-h-[420px] opacity-100 scale-y-100"
                  : "max-h-0 opacity-0 scale-y-95"
              }`}
            >
              <ul className="py-2 text-slate-600 font-medium max-h-[400px] overflow-y-auto">
                {categorys?.map((c) => (
                  <li key={c._id}>
                    <Link
                      className="block px-5 py-2.5 text-sm hover:bg-emerald-50 hover:text-emerald-600 transition-colors border-l-2 border-transparent hover:border-emerald-500"
                      to={`/products?category=${c.name}`}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-grow">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full h-12 border border-slate-200 rounded-xl bg-white overflow-hidden focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all"
            >
              <div className="hidden md:flex items-center gap-1 pl-3 pr-2 border-r border-slate-100">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="max-w-[150px] text-slate-700 text-sm font-medium bg-transparent outline-none cursor-pointer border-none py-2"
                >
                  <option value="">All</option>
                  {categorys.map((c, i) => (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <IoIosArrowDown
                  size={12}
                  className="text-slate-400 pointer-events-none"
                />
              </div>

              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-grow bg-transparent text-slate-700 outline-none px-4 h-full text-sm placeholder:text-slate-400"
                type="text"
                placeholder="Search for products..."
              />

              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors px-6 md:px-8 h-full font-semibold text-sm text-white flex items-center justify-center"
              >
                SEARCH
              </button>
            </form>
          </div>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-full flex bg-emerald-50 text-emerald-600 justify-center items-center">
              <FaPhoneAlt size={15} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-800 dir-ltr">
                +880 324 234 3243
              </span>
              <span className="text-[11px] text-slate-500">Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 w-screen h-screen bg-slate-900/60 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <div
        className={`fixed top-0 z-[1000] w-[300px] max-w-[85vw] bg-white h-screen py-6 px-6 overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "left-0" : "-left-[300px]"
        }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
          <img
            src="/images/logo.png"
            alt="Easy Shop"
            className="h-8 object-contain"
          />
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-500 transition text-xl"
          >
            &times;
          </button>
        </div>

        <ul className="flex flex-col gap-1 font-semibold text-slate-700">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  pathname === to
                    ? "bg-emerald-50 text-emerald-600"
                    : "hover:bg-slate-50"
                }`}
                to={to}
                onClick={() => setSidebarOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4 text-sm">
          <Link
            to={user ? "/dashboard" : "/login"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaUser size={13} /> {user ? "mobin mohammadi" : "Login"}
          </Link>
          <div className="flex items-center gap-3 text-slate-600 px-2">
            <MdEmail className="text-emerald-500" /> support@gmail.com
          </div>
          <div className="flex items-center gap-3 text-slate-600 px-2">
            <IoMdPhonePortrait className="text-emerald-500" /> +880 324 234 3243
          </div>
          <div className="flex items-center gap-3 px-2 pt-2">
            {[FaFacebookF, FaTwitter, FaLinkedin, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-all"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
