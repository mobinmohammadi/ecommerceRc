import React, { useEffect, useState } from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { Link } from "react-router";

const FeatureProducts = ({ products }) => {
const [endIndex, setEndIndex] = useState(6);

  const changMoorProduct = () => {
    setEndIndex(perv => perv +3)
    
  };

  useEffect(() => {
    products;
  }, [products]);

  return (
    <>
      <div className="w-[85%] flex flex-wrap mx-auto">
        <div className="w-full">
          <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
            <h2>Feature Products </h2>
            <div className="w-[100px] h-[2px] bg-[#059473] mt-4"></div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {products
            ? [...products].slice(0, endIndex).map((p, i) => (
                <div
                  key={i}
                  className="border group transition-all duration-500 hover:shadow-md hover:-mt-3"
                >
                  <div className="relative overflow-hidden">
                    <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                      {p.discount}%{" "}
                    </div>

                    <img
                      className="sm:w-full w-full h-[200px] sm:h-[240px] object-contain"
                      src={p.images[0]}
                      alt=""
                    />

                    <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                      <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                        <FaRegHeart />
                      </li>
                      <Link
                        to="#"
                        className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
                      >
                        <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                          <FaEye />
                        </li>
                      </Link>
                      <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                        <RiShoppingCartLine />
                      </li>
                    </ul>
                  </div>

                  <div className="py-3 text-slate-600 px-2">
                    <Link to={p.slug}>{p.name}</Link>{" "}
                    <div className="flex justify-start items-center gap-3">
                      <span className="text-md font-semibold">$656</span>
                      <div className="flex">
                        <Rating ratings={4.5} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="w-full mt-8 flex items-center justify-center">
        <button onClick={changMoorProduct} className="mx-auto bg-green-600 hover:bg-green-800 transition-all rounded-md text-white py-2 px-8 cursor-pointer">
          More
        </button>
      </div>
    </>
  );
};

export default FeatureProducts;
