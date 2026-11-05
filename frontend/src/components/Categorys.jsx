import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// ✅ import استایل‌های Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Categorys = ({ categoris}) => {

  // ✅ تنظیمات breakpoints مطابق با responsive قبلی
  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 8 },
    440: { slidesPerView: 2, spaceBetween: 8 },
    640: { slidesPerView: 2, spaceBetween: 8 },
    464: { slidesPerView: 3, spaceBetween: 8 },
    1024: { slidesPerView: 4, spaceBetween: 8 },
    3000: { slidesPerView: 6, spaceBetween: 8 },
    4000: { slidesPerView: 6, spaceBetween: 8 },
  };

  return (
    <div className="w-[90%] max-w-[1400px] mx-auto relative py-8">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-3xl text-slate-600 font-bold relative pb-[35px]">
          <h2>Top Category</h2>
          <div className="w-[100px] h-[2px] bg-[#059473] mt-4"></div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={8}
        slidesPerView={1}
        breakpoints={breakpoints}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="pb-10 overflow-[initial] top-[70%]" // فضای اضافی برای نقطه‌های pagination
      >
        { categoris?.length
          ?  categoris?.map((c, i) => 
            (
            
              <SwiperSlide key={i}>
                <Link
                  className="h-[185px] border block bg-white rounded-md overflow-hidden hover:shadow-lg transition-shadow"
                  to={c.slug}
                >
                  <div className="w-full h-full relative p-3 flex flex-col items-center justify-center">
                    <img
                      src={c.image}
                      alt={c}
                      className="w-[100px] h-[100px] object-contain mb-4"
                    />
                    <div className="absolute bottom-0 w-full mx-auto font-bold left-0 flex justify-center items-center pb-3">
                      <span className="py-[4px] px-6 bg-[#3330305d] text-white text-sm rounded-sm">
                        {c.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))

            
          : ""}
      </Swiper>
    </div>
  );
};

export default Categorys;