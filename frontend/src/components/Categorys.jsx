import React from 'react';
import CarouselModule from 'react-multi-carousel';
import { Link } from 'react-router'
import 'react-multi-carousel/lib/styles.css';

const Categorys = () => {
    // ✅ حل مشکل کتابخانه react-multi-carousel در Vite
    const Carousel = CarouselModule.default ? CarouselModule.default : CarouselModule;

    const categorys = [
        'Mobiles', 'Laptops', 'Speakers', 'Top wear',
        'Footwear', 'Watches', 'Home Decor', 'Smart Watches',
    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
        smmobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
        xsmobile: { breakpoint: { max: 440, min: 0 }, items: 1 },
    };

    return (
        <div className='w-[90%] max-w-[1400px] mx-auto relative py-8'>
            <div className='w-full'>
                <div className='text-center flex justify-center items-center flex-col text-3xl text-slate-600 font-bold relative pb-[35px]'>
                    <h2>Top Category</h2>
                    <div className='w-[100px] h-[2px] bg-[#059473] mt-4'></div>
                </div>
            </div>

            <Carousel
                autoPlay={true}
                infinite={true}
                arrows={true}
                responsive={responsive}
                transitionDuration={500}
                itemClass="px-2" // ✅ اضافه کردن فاصله بین آیتم‌ها
            >
                {categorys.map((c, i) => (
                    <Link className='h-[185px] border block bg-white rounded-md overflow-hidden hover:shadow-lg transition-shadow' key={i} to='#'>
                        <div className='w-full h-full relative p-3 flex flex-col items-center justify-center'>
                            {/* ✅ اصلاح مسیر عکس (به جای 3000 از 5173 استفاده شد) */}
                            <img 
                                src={`/images/products/${i+1}.webp`} 
                                alt={c} 
                                className="w-[100px] h-[100px] object-contain mb-4" 
                            />
                            <div className='absolute bottom-0 w-full mx-auto font-bold left-0 flex justify-center items-center pb-3'>
                                <span className='py-[4px] px-6 bg-[#3330305d] text-white text-sm rounded-sm'>{c}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
};

export default Categorys;