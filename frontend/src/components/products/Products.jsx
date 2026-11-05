import { useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const Products = ({ title, products }) => {
  console.log("pro => ", products);

  // ✅ استفاده از state برای ذخیره عناصر DOM، به جای ref
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 16 },
    464: { slidesPerView: 1, spaceBetween: 16 },
    1024: { slidesPerView: 1, spaceBetween: 16 },
    3000: { slidesPerView: 1, spaceBetween: 16 },
  };

  return (
    <div className="flex gap-8 flex-col">
      {/* دکمه‌ها بالای کاروسل قرار دارند و همچنان در ردیف عنوان هستند */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-slate-600">{title}</div>
        <div className="flex justify-center items-center gap-3 text-slate-600">
          <button
            ref={(node) => setPrevEl(node)} // ✅ استفاده از callback ref برای دریافت DOM
            type="button"
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200 disabled:opacity-50"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={(node) => setNextEl(node)} // ✅ استفاده از callback ref برای دریافت DOM
            type="button"
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200 disabled:opacity-50"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={breakpoints}
        loop={false}
        navigation={{
          prevEl, // ✅ در اینجا عنصر DOM واقعی است، نه یک ref
          nextEl,
        }}
        className="w-full"
      >
          { products?.map((p, i) => (
            
              <SwiperSlide key={i}>
                <div className="flex flex-col justify-start gap-2">
                  {/* {console.log(p)} */}
                  {p?.map((pl, j) => (
                    <Link
                      key={j}
                      to="/product/details/new"
                      className="flex justify-start items-start"
                    >
                      <img
                        className="w-[110px] h-[110px]"
                        src={pl.images[0]}
                        alt=""
                      />
                      <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-600">
                        <h2 className="text-slate-700 text-sm">Product Name</h2>
                        <span className="text-lg font-bold">$434</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </SwiperSlide>
            ))
            }

      </Swiper>
    </div>
  );
};

export default Products;
