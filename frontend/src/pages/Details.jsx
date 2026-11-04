import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import { IoIosArrowForward } from "react-icons/io";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '../components/Rating';
import { FaHeart } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Reviews from '../components/Reviews';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Details = () => {
  const RMCarousel = Carousel.default ? Carousel.default : Carousel;
  const images = [1, 2, 3, 4, 5, 6];
  const [image, setImage] = useState('');
  const discount = 10;
  const stock = 3;
  const [state, setState] = useState('reviews');

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    mobile: { breakpoint: { max: 768, min: 464 }, items: 4 },
    smmobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
    xsmobile: { breakpoint: { max: 360, min: 0 }, items: 2 },
  };

  return (
    <div>
      <Header />

      {/* ===== Banner ===== */}
      <section className='bg-[url("/images/banner/shop.png")] h-[160px] sm:h-[200px] md:h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
          <div className='w-[92%] sm:w-[90%] lg:w-[85%] h-full mx-auto'>
            <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
              <h2 className='text-2xl sm:text-3xl font-bold'>Product Details</h2>
              <div className='flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl w-full'>
                <Link to='/'>Home</Link>
                <span className='pt-1'><IoIosArrowForward /></span>
                <span>Product Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Breadcrumb ===== */}
      <section>
        <div className='bg-slate-100 py-4 sm:py-5 mb-5'>
          <div className='w-[92%] sm:w-[90%] lg:w-[85%] mx-auto'>
            <div className='flex flex-wrap justify-start items-center gap-1 text-sm sm:text-md text-slate-600 w-full'>
              <Link to='/'>Home</Link>
              <span className='pt-1'><IoIosArrowForward /></span>
              <Link to='/'>Category</Link>
              <span className='pt-1'><IoIosArrowForward /></span>
              <span>Product Name</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== محصول اصلی ===== */}
      <section>
        <div className='w-[92%] sm:w-[90%] lg:w-[85%] mx-auto'>
          {/* روی موبایل و تبلت تک‌ستونه، از lg دو ستونه */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>

            {/* --- گالری --- */}
            <div>
              <div className='p-3 sm:p-5 border'>
                <img
                  className='h-[260px] sm:h-[340px] md:h-[400px] w-full object-contain'
                  src={image ? `/images/products/${image}.webp` : `/images/products/${images[2]}.webp`}
                  alt="Product"
                />
              </div>
              <div className='py-3'>
                {images && (
                  <RMCarousel
                    autoPlay={true}
                    infinite={true}
                    responsive={responsive}
                    transitionDuration={500}
                    arrows={false}
                  >
                    {images.map((img, i) => (
                      <div key={i} onClick={() => setImage(img)} className='px-1'>
                        <img
                          className={`h-[70px] sm:h-[100px] md:h-[120px] w-full object-cover cursor-pointer border-2 ${image === img ? 'border-green-500' : 'border-transparent'}`}
                          src={`/images/products/${img}.webp`}
                          alt={`thumb-${i}`}
                        />
                      </div>
                    ))}
                  </RMCarousel>
                )}
              </div>
            </div>

            {/* --- اطلاعات محصول --- */}
            <div className='flex flex-col gap-4 sm:gap-5'>
              <h3 className='text-2xl sm:text-3xl text-slate-600 font-bold'>Product Name</h3>

              <div className='flex flex-wrap justify-start items-center gap-3 sm:gap-4'>
                <div className='flex text-lg sm:text-xl'>
                  <Rating ratings={4.5} />
                </div>
                <span className='text-green-500 text-sm sm:text-base'>(24 reviews)</span>
              </div>

              <div className='text-xl sm:text-2xl text-red-500 font-bold flex flex-wrap items-center gap-2 sm:gap-3'>
                {discount !== 0 ? (
                  <>
                    <span>Price :</span>
                    <h2 className='line-through text-slate-400'>$500</h2>
                    <h2>
                      ${500 - Math.floor((500 * discount) / 100)} (-{discount}%)
                    </h2>
                  </>
                ) : (
                  <h2>Price : $200</h2>
                )}
              </div>

              <div className='text-slate-600 text-sm sm:text-base'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>

              {/* تعداد + افزودن به سبد */}
              <div className='flex flex-wrap gap-3 pb-6 sm:pb-10 border-b'>
                {stock ? (
                  <>
                    <div className='flex bg-slate-200 h-[46px] sm:h-[50px] justify-center items-center text-lg sm:text-xl'>
                      <div className='px-4 sm:px-6 cursor-pointer'>-</div>
                      <div className='px-4 sm:px-6'>2</div>
                      <div className='px-4 sm:px-6 cursor-pointer'>+</div>
                    </div>
                    <button className='px-5 sm:px-8 h-[46px] sm:h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-[#059473] text-white text-sm sm:text-base'>
                      Add To Cart
                    </button>
                  </>
                ) : ''}

                <div className='h-[46px] w-[46px] sm:h-[50px] sm:w-[50px] flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white'>
                  <FaHeart />
                </div>
              </div>

              {/* موجودی + شبکه‌ها */}
              <div className='flex flex-col sm:flex-row py-4 sm:py-5 gap-4 sm:gap-5'>
                <div className='w-full sm:w-[150px] text-black font-bold text-base sm:text-xl flex flex-col gap-4 sm:gap-5'>
                  <span>Availability</span>
                  <span>Share On</span>
                </div>
                <div className='flex flex-col gap-4 sm:gap-5'>
                  <span className={stock ? 'text-green-500' : 'text-red-500'}>
                    {stock ? `In Stock(${stock})` : 'Out Of Stock'}
                  </span>
                  <ul className='flex flex-wrap justify-start items-center gap-2 sm:gap-3'>
                    <li>
                      <a className='w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-indigo-500 rounded-full text-white' href="#"> <FaFacebookF /> </a>
                    </li>
                    <li>
                      <a className='w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-cyan-500 rounded-full text-white' href="#"> <FaTwitter /> </a>
                    </li>
                    <li>
                      <a className='w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-purple-500 rounded-full text-white' href="#"> <FaLinkedin /> </a>
                    </li>
                    <li>
                      <a className='w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-blue-500 rounded-full text-white' href="#"> <FaGithub /> </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* دکمه‌های خرید */}
              <div className='flex flex-wrap gap-3'>
                {stock ? (
                  <button className='flex-1 sm:flex-none px-5 sm:px-8 h-[46px] sm:h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-[#247462] text-white text-sm sm:text-base'>
                    Buy Now
                  </button>
                ) : ''}
                <Link to='#' className='flex-1 sm:flex-none text-center px-5 sm:px-8 py-3 h-[46px] sm:h-[50px] cursor-pointer hover:shadow-lg hover:shadow-red-500/40 bg-red-500 text-white text-sm sm:text-base'>
                  Chat Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== تب‌ها + محصولات پیشنهادی ===== */}
      <section>
        <div className='w-[92%] sm:w-[90%] lg:w-[85%] mx-auto pb-16 mt-10'>
          <div className='flex flex-col lg:flex-row gap-6'>
            {/* تب‌ها */}
            <div className='w-full lg:w-[72%]'>
              <div className='grid grid-cols-2'>
                <button
                  onClick={() => setState('reviews')}
                  className={`py-2 hover:text-white px-4 sm:px-5 hover:bg-[#059473] ${state === 'reviews' ? 'bg-[#059473] text-white' : 'bg-slate-200 text-slate-700'} rounded-sm text-sm sm:text-base`}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setState('description')}
                  className={`py-2 hover:text-white px-4 sm:px-5 hover:bg-[#059473] ${state === 'description' ? 'bg-[#059473] text-white' : 'bg-slate-200 text-slate-700'} rounded-sm text-sm sm:text-base`}
                >
                  Description
                </button>
              </div>

              <div>
                {state === 'reviews' ? (
                  <Reviews />
                ) : (
                  <p className='py-5 text-slate-600 text-sm sm:text-base'>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                  </p>
                )}
              </div>
            </div>

            {/* محصولات Easy Shop */}
            <div className='w-full lg:w-[28%]'>
              <div className='px-3 py-2 text-slate-600 bg-slate-200'>
                <h2 className='font-bold'>From Easy Shop</h2>
              </div>
              <div className='flex flex-col gap-5 mt-3 border p-3'>
                {[1, 2, 3].map((p, i) => (
                  <Link key={i} className='block'>
                    <div className='relative h-[200px] sm:h-[240px] md:h-[270px]'>
                      <img className='w-full h-full object-cover' src={`/images/products/${p}.webp`} alt="" />
                      {discount !== 0 && (
                        <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2'>
                          {discount}%
                        </div>
                      )}
                    </div>
                    <h2 className='text-slate-600 py-1 font-bold'>Product Name</h2>
                    <div className='flex flex-wrap gap-2 items-center'>
                      <h2 className='text-lg font-bold text-slate-600'>$434</h2>
                      <Rating ratings={4.5} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related Products ===== */}
      <section>
        <div className='w-[92%] sm:w-[90%] lg:w-[85%] mx-auto'>
          <h2 className='text-xl sm:text-2xl py-6 sm:py-8 text-slate-600'>Related Products</h2>
          <div>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 1.5 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              spaceBetween={20}
              loop={true}
              pagination={{ clickable: true, el: '.custom_bullet' }}
              modules={[Pagination]}
              className='mySwiper'
            >
              {[1, 2, 3, 4, 5, 6].map((p, i) => (
                <SwiperSlide key={i}>
                  <Link className='block'>
                    <div className='relative h-[220px] sm:h-[250px] md:h-[270px]'>
                      <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={`/images/products/${p}.webp`} alt="" />
                        <div className='absolute h-full w-full top-0 left-0 bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500'></div>
                      </div>
                      {discount !== 0 && (
                        <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2'>
                          {discount}%
                        </div>
                      )}
                    </div>
                    <div className='p-3 sm:p-4 flex flex-col gap-1'>
                      <h2 className='text-slate-600 text-base sm:text-lg font-bold'>Product Name</h2>
                      <div className='flex flex-wrap justify-start items-center gap-2 sm:gap-3'>
                        <h2 className='text-base sm:text-lg font-bold text-slate-600'>$434</h2>
                        <Rating ratings={4.5} />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='w-full flex justify-center items-center py-6 sm:py-8'>
            <div className='custom_bullet justify-center gap-3 !w-auto'></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Details;