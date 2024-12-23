"use client";

import React from "react";
import "./justin.css";
import { FaRegHeart } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Justin() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className=" flex justify-between align-items-center px-8 py-8">
        <div className=" text-[30px] font-semibold ">This Just In</div>
        <div className=" flex justify-around align-items-center">
          <span className=" text-[25px] font-normal underline mx-2 cursor-pointer">
            Women
          </span>
          <span className=" text-[25px] text-[#676767] font-normal mx-2 cursor-pointer">
            Men
          </span>
        </div>
      </div>

      <div className=" w-full ">
        <Carousel className=" w-full " responsive={responsive}>
          <div>
            <div className=" w-[330px] h-[590px]   shadow-md  m-5 ">
              <div className=" w-[100%] ">
                <div id="Img1">
                  <div id="Img2" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[330px] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[330px] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-[330px] h-[590px]   shadow-md m-5 ">
              <div className=" w-[100%] ">
                <div id="Img3">
                <div id="Img4" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[100%] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[330px] h-[590px]   shadow-md m-5 ">
              <div className=" w-[100%] ">
                <div id="Img1">
                <div id="Img2" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[100%] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[330px] h-[590px]   shadow-md m-5 ">
              <div className=" w-[100%] ">
                <div id="Img3">
                <div id="Img4" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[100%] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-[330px] h-[590px]   shadow-md m-5 ">
              <div className=" w-[100%] ">
                <div id="Img1">
                <div id="Img2" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[100%] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-[330px] h-[590px]   shadow-md m-5 ">
              <div className=" w-[100%] ">
                <div id="Img3">
                <div id="Img4" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[100%] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[330px] h-[590px]   shadow-md m-5 ">
              <div className=" w-[100%] ">
                <div id="Img1">
                <div id="Img2" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[100%] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-[330px] h-[590px]   shadow-md m-5 ">
              <div className=" w-[100%] ">
                <div id="Img1">
                <div id="Img2" className=" text-center relative ">
                    <div className="buttons w-[320px]  left-[5px] top-[24.5rem] bg-slate-300 absolute  h-[45px] z-30 ">
                     
                      <button id='BTN1' className='absolute w-[320px] h-[45px] bg-white left-0 py-2 '>Quick Add</button>
                      <button
                        id="BTN2"
                        className="  bg-white px-[70px] w-[320px] h-[45px]  flex justify-around align-items-center"
                      >
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          XS
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          S
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2 m-2">
                          M
                        </span>
                        <span className=" hover:bg-black hover:text-white bg-white text-black py-1 px-2  m-2">
                          L
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-3 px-4 flex justify-between align-items-center">
                  <span className="px-2 py-1 bg-black text-white font-bold text-[12px]">
                    Best Seller
                  </span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="w-[100%] m-1 px-2 py-1 text-black font-semibold text-[16px]">
                  The Skyline Maxi Hooded Coat in Black
                  <br />
                  CA$229.00
                  <br />
                  <span className=" text-gray-600 text-[14px] ">3 Colors</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
