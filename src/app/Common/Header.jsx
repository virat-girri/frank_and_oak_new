"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import "flowbite";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import "./index.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function Header() {
  return (
    <div className=" ">
      <Slider_01 />

      <Navbar />
    </div>
  );
}

function Slider_01() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const [flag, setFlag] = useState(false);

  let changeFlag = () => {
    setFlag(!flag);
  };

  const [eng, setEng] = useState(false);

  let changeLanguage = () => {
    setEng(!eng);
  };

  return (
    <>
      <div className="bg-black flex flex-wrap justify-between align-items-center">
        <div className=" w-[50%] mx-auto h-[50px]">
          <Slider
            className=" text-white w-full h-full text-center "
            {...settings}
          >
            <div className=" text-[14px] mt-[2%]">
              Chic fits made to celebrate in style.{" "}
              <span className=" underline ">Shop Women Shop Men</span>
            </div>
            <div className=" text-[14px] mt-[2%]">
              Enjoy free shipping on orders $99+ and extended returns until
              January 12th
            </div>
            <div className=" text-[14px] mt-[2%]">
              Canada Post strike—Only PO boxes and remote rural areas are
              affected. <span className=" underline ">Learn more</span>
            </div>
            <div className=" text-[14px] mt-[2%]">
              Let's share the magic! Frank And Oak's Holiday Shop is here.{" "}
              <span className=" underline ">Explore now</span>
            </div>
          </Slider>
        </div>

        <div className=" lg:w-[20%] lg:text-end text-center w-[100%] my-2 ">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="font-medium text-sm text-center inline-flex items-center py-2 px-2 "
            type="button"
          >
            <img
              className=" w-[25px] mx-1 "
              src="https://media.istockphoto.com/id/934017954/vector/canada-flag.jpg?s=612x612&w=0&k=20&c=QYOJlgWtujlAPzncX5H4UFPDpySMhoh2iPc_zi2t_zQ="
              alt=""
            />
            <span
              onClick={changeFlag}
              className="flex gap-2 justify-center align-items-center text-white mx-1"
            >
              $CAD {flag ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>

            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdown" className="z-10 hidden bg-gray-400 text-black">
            <div className=" hover:text-white flex gap-2 py-2 px-2 hover:bg-blue-400 my-1 cursor-pointer">
              <img
                className=" w-[30px] mx-1 "
                src="https://media.istockphoto.com/id/934017954/vector/canada-flag.jpg?s=612x612&w=0&k=20&c=QYOJlgWtujlAPzncX5H4UFPDpySMhoh2iPc_zi2t_zQ="
                alt=""
              />{" "}
              <span className=" mx-1">$CAD</span>
            </div>
            <div className=" hover:text-white flex gap-2 py-2 px-2 hover:bg-blue-400 my-1 cursor-pointer">
              <img
                className=" w-[30px] mx-1 "
                src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcShqgZzUn-eKvhS0SolAJJO0-QzKtMNz1h3qg&s"
                alt=""
              />{" "}
              <span className=" mx-1">$USD</span>
            </div>
          </div>

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown01"
            className="font-medium text-sm text-center inline-flex items-center py-2 px-2 "
            type="button"
          >
            <span
              onClick={changeLanguage}
              className="text-center text-white mx-1"
            >
              English
            </span>{" "}
            <span className=" mx-1 text-white">
              {eng ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdown01" className="z-10 hidden bg-[#ccc]">
            <div className=" flex gap-2 py-2 px-2 hover:bg-blue-500 hover:text-white cursor-pointer">
              <span className=" p-1 mx-1">French</span>
            </div>
            <div className=" flex gap-2 py-2 px-2 hover:bg-blue-500 hover:text-white cursor-pointer">
              <span className=" p-1 mx-1">German</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  let [state, setState] = useState(false);
  let [navigationBar, setNavigationBar] = useState(false);
  let [sideflag, setSideflag] = useState(false);
  let [profile, setProfile] = useState(false);
  return (
    <>
      <div className="flex items-center  justify-between px-2 lg:px-10  relative">
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-xl block lg:hidden group ">
              <FaBars onClick={() => setNavigationBar(!navigationBar)} />
            </div>
            <Link href={"/"}>
              <h1 className="font-bold text-xl">Frank And Oak</h1>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="lg:flex items-center">
              <li className="p-[10px_24px] cursor-pointer font-medium hover:bg-[#F9F9F9] text-red-500 saleli ">
                Sale
                <div className="w-full p-10 flex text-black bg-[#F9F9F9] justify-evenly cursor-default absolute top-[43px] left-0 salebox">
                  <div className="border-r-[1px] border-black pr-20">
                    <p className="font-normal underline underline-offset-8 cursor-pointer">
                      Women's Sale
                    </p>
                    <ul className="font-normal  py-2">
                      <li className="cursor-pointer hover:underline py-1">
                        Shop All
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Jackets & Coats
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Sweaters
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Blouses & Shirts
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Bottoms
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Accessories
                      </li>
                    </ul>
                  </div>
                  <div className="pl-8">
                    <p className="font-normal cursor-pointer underline underline-offset-8">
                      Men's Sale
                    </p>
                    <ul className="font-normal py-2">
                      <li className="cursor-pointer hover:underline py-1">
                        Shop All
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Jackets & Coats
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Sweaters
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Blouses & Shirts
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Bottoms
                      </li>
                      <li className="cursor-pointer hover:underline py-1">
                        Accessories
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="relative">
                      <img
                        src="https://ca.frankandoak.com/cdn/shop/files/Tile_desktop_f0ac5614-104b-4f37-ad2a-a09cffe19a9a_600x.jpg?v=1727789550"
                        className="w-full h-[100%]"
                      />
                      <span className="absolute left-5 bottom-5 text-white text-xl">
                        Jackets
                      </span>
                    </div>
                    <div className="relative">
                      <img
                        src="https://ca.frankandoak.com/cdn/shop/files/Tile_desktop_d6e82fed-f9f7-48e5-8b1b-25a22b6df67e_600x.jpg?v=1727789599"
                        className="w-full h-[100%]"
                      />
                      <span className="absolute left-5 bottom-5 text-white text-xl">
                        Winter Accessories
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-[10px_24px] cursor-pointer font-medium hover:bg-[#F9F9F9] womenli">
                Women
                <div className="w-full p-10 flex text-black bg-[#F9F9F9] cursor-default absolute top-[43px] left-0 womenbox">
                  <div className="w-full grid grid-cols-2">
                    <div className="w-full grid grid-cols-3">
                      <div>
                        <p className="font-normal underline underline-offset-8 cursor-pointer">
                          Featured
                        </p>
                        <ul className="font-normal  py-2">
                          <li className="text-red-500 hover:underline">Sale</li>
                          <li className="hover:underline">New In</li>
                          <li className="hover:underline">Best Sellers</li>
                          <li className="hover:underline">Holiday Outfits</li>
                          <li className="hover:underline">Winter Jackets</li>
                          <li className="hover:underline">Workwear</li>
                          <li className="hover:underline">Gift Cards</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-normal underline underline-offset-8 cursor-pointer">
                          Clothing
                        </p>
                        <ul className="font-normal  py-2">
                          <li className="hover:underline">Shop All</li>
                          <li className="hover:underline">T-shirts & Tops</li>
                          <li className="hover:underline">Blouses & Shirts</li>
                          <li className="hover:underline">
                            Sweaters & Cardigans
                          </li>
                          <li className="hover:underline">Jackets & Coats</li>
                          <li className="hover:underline">
                            Blazers & Overshirts
                          </li>
                          <li className="hover:underline">Pants & Shorts</li>
                          <li className="hover:underline">Denim</li>
                          <li className="hover:underline">Dresses & Skirts</li>
                          <li className="hover:underline">Matching Sets</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-normal underline underline-offset-8 cursor-pointer">
                          Accessories
                        </p>
                        <ul className="font-normal  py-2">
                          <li className="hover:underline">Shop All</li>
                          <li className="hover:underline">Beanies & Caps</li>
                          <li className="hover:underline">Scarves</li>
                          <li className="hover:underline">Mittens</li>
                          <li className="hover:underline">Socks</li>
                          <li className="hover:underline">Shoes & Slippers</li>
                          <li className="hover:underline">Bags & Belts</li>
                          <li className="hover:underline">Dog Accessories</li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                      <div className="relative">
                        <img
                          src="https://ca.frankandoak.com/cdn/shop/files/Menu_tile_d2ea1390-d13b-4749-bf11-4545bbb42f85_600x.jpg?v=1733503908"
                          className="w-full h-[100%]"
                        />
                        <span className="absolute left-5 bottom-5 text-white text-xl">
                          Jackets
                        </span>
                      </div>
                      <div className="relative">
                        <img
                          src="https://ca.frankandoak.com/cdn/shop/files/Menu_tile-1_d7db9a25-c9e9-421a-9a6d-a0702eaa8b30_600x.jpg?v=1733503918"
                          className="w-full h-[100%]"
                        />
                        <span className="absolute left-5 bottom-5 text-white text-xl">
                          Winter Accessories
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-[10px_24px] cursor-pointer font-medium hover:bg-[#F9F9F9] menli">
                Men
                <div className="w-full p-10 flex text-black bg-[#F9F9F9] cursor-default absolute top-[43px] left-0 menbox">
                  <div className="w-full grid grid-cols-2">
                    <div className="w-full grid grid-cols-3">
                      <div>
                        <p className="font-normal underline underline-offset-8 cursor-pointer">
                          Featured
                        </p>
                        <ul className="font-normal  py-2">
                          <li className="text-red-500 hover:underline">Sale</li>
                          <li className="hover:underline">New In</li>
                          <li className="hover:underline">Best Sellers</li>
                          <li className="hover:underline">Holiday Outfits</li>
                          <li className="hover:underline">Winter Jackets</li>
                          <li className="hover:underline">Workwear</li>
                          <li className="hover:underline">Gift Cards</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-normal underline underline-offset-8 cursor-pointer">
                          Clothing
                        </p>
                        <ul className="font-normal  py-2">
                          <li className="hover:underline">Shop All</li>
                          <Link className="hover:underline" href={"/next_page"}>
                            T-shirts & Tops
                          </Link>
                          <li className="hover:underline">Blouses & Shirts</li>
                          <li className="hover:underline">
                            Sweaters & Cardigans
                          </li>
                          <li className="hover:underline">Jackets & Coats</li>
                          <li className="hover:underline">
                            Blazers & Overshirts
                          </li>
                          <li className="hover:underline">Pants & Shorts</li>
                          <li className="hover:underline">Denim</li>
                          <li className="hover:underline">Dresses & Skirts</li>
                          <li className="hover:underline">Matching Sets</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-normal underline underline-offset-8 cursor-pointer">
                          Accessories
                        </p>
                        <ul className="font-normal  py-2">
                          <li className="hover:underline">Shop All</li>
                          <li className="hover:underline">Beanies & Caps</li>
                          <li className="hover:underline">Scarves</li>
                          <li className="hover:underline">Mittens</li>
                          <li className="hover:underline">Socks</li>
                          <li className="hover:underline">Shoes & Slippers</li>
                          <li className="hover:underline">Bags & Belts</li>
                          <li className="hover:underline">Dog Accessories</li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                      <div className="relative">
                        <img
                          src="https://ca.frankandoak.com/cdn/shop/files/Menu_tile-2_50c196a1-47d1-429f-9255-f2eaa789fe01_600x.jpg?v=1733504012"
                          className="w-full h-[100%]"
                        />
                        <span className="absolute left-5 bottom-5 text-white text-xl">
                          Jackets
                        </span>
                      </div>
                      <div className="relative">
                        <img
                          src="https://ca.frankandoak.com/cdn/shop/files/Menu_tile-3_37a400ba-8bc9-48d3-9ed1-61152320971c_600x.jpg?v=1733504026"
                          className="w-full h-[100%]"
                        />
                        <span className="absolute left-5 bottom-5 text-white text-xl">
                          Winter Accessories
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-[10px_24px] font-medium hover:bg-[#F9F9F9] cursor-pointer  holidayli">
                The Holiday Shop
                <div className="w-full p-10 flex text-black bg-[#F9F9F9] cursor-default absolute top-[43px] left-0 holidaybox">
                  <div className="w-full grid grid-cols-4">
                    <div className="w-full">
                      <p className="font-normal underline underline-offset-8 cursor-pointer">
                        Shop The Holiday Shop
                      </p>
                      <ul className="font-normal  py-2">
                        <li className="hover:underline"> Shop gifts for her</li>
                        <li className="hover:underline">Shop gifts for him</li>
                        <li className="hover:underline">Shop E-Gift cards</li>
                        <li className="hover:underline">
                          Shop physical gift cards
                        </li>
                      </ul>
                    </div>
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Gifts_for_her_cc6cac23-d721-462d-80a4-138eedfcde57_600x.jpg?v=1731093442" />
                      <h3 className="absolute left-[28%] top-[35%] text-white text-3xl">
                        Gifts for her
                      </h3>
                    </div>
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Gifts_for_him_1fab241d-77d9-4775-bf8d-55e11b39b8da_600x.jpg?v=1731093493" />
                      <h3 className="absolute left-[28%] top-[35%] text-white text-3xl">
                        Gifts for him
                      </h3>
                    </div>
                    <div className="relative p-2">
                      <img
                        className="w-[400px] h-[230px]"
                        src="https://ca.frankandoak.com/cdn/shop/files/image_2_438ee765-ffcd-4764-a325-61d6f9270d81_600x.jpg?v=1731094356"
                      />
                      <h3 className="absolute left-[28%] top-[35%] text-white text-3xl">
                        Gifts for him
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-[10px_24px] font-medium hover:bg-[#F9F9F9] cursor-pointer aboutli">
                About Us
                <div className="w-full p-10 flex text-black bg-[#F9F9F9] cursor-default absolute top-[43px] left-0 aboutbox">
                  <div className="w-full grid grid-cols-6 gap-10">
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Who_we_are_-_NAV_439dc3ed-5fab-4a00-898d-40a152e53843_600x.jpg?v=1712763546" />
                      <h3 className="absolute left-[5%] bottom-[5%] text-white text-xl">
                        Who we are
                      </h3>
                    </div>
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Tile_desktop_23_600x.jpg?v=1712763674" />
                      <h3 className="absolute left-[5%] bottom-[5%] text-white text-xl">
                        Sustainable Practices
                      </h3>
                    </div>
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Design_Philosophy_-_NAV_3182b4c8-ee55-479b-8eb3-52f7560876de_600x.jpg?v=1712763556" />
                      <h3 className="absolute left-[5%] bottom-[5%] text-white text-xl">
                        Design Philosophy
                      </h3>
                    </div>
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Fabric_Innovation_-_NAV_56b16180-ad1b-4b6d-a6c0-11bea7da60ac_600x.jpg?v=1712763565" />
                      <h3 className="absolute left-[5%] bottom-[5%] text-white text-xl">
                        Fabrics
                      </h3>
                    </div>
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Circular_Process_-_NAV_6503e49d-4f55-493a-bb16-719a1dd1d6bf_600x.jpg?v=1712763573" />
                      <h3 className="absolute left-[5%] bottom-[5%] text-white text-xl">
                        Circular denim™
                      </h3>
                    </div>
                    <div className="relative">
                      <img src="https://ca.frankandoak.com/cdn/shop/files/Partners_Factories_-_NAV_37ad68b9-b76e-4636-af47-f27dffdf8079_600x.jpg?v=1712763612" />
                      <h3 className="absolute left-[5%] bottom-[5%] text-white text-xl">
                        Partners and Factories
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex items-center text-2xl gap-7">
            <li className="cursor-pointer">
              <IoSearchOutline />
            </li>
            <li className="cursor-pointer">
              <CgProfile onClick={()=>setProfile(!profile)} />
            </li>
            <Link href={"/singleproduct"}>
              <li className="cursor-pointer">
                <FaRegHeart />
              </li>
            </Link>
            <li className="cursor-pointer">
              <IoBagAddOutline
                onClick={() => {
                  setState(!state);
                }}
              />
            </li>
          </ul>
        </div>

        {/* Hidden State */}

        <div
          className={`flex-col lg:w-[56%] md:w-[100%] h-[100vh] xs:w-[100%]  bg-[white]  absolute md:top-7 lg:top-10 transition-all duration-1000 ease-linear z-[999] ${
            state ? "right-0 " : "-right-[100%]  "
          }`}
        >
          {/* containt */}
          <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div class="flex justify-start item-start space-y-2 flex-col">
              <h1 class="text-3xl text-black lg:text-4xl font-semibold leading-7 lg:leading-9">
                Cart
              </h1>
            </div>
            <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div class="flex flex-col justify-start items-start  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                  <p class="text-lg md:text-xl text-black font-semibold leading-6 xl:leading-5">
                    Customer’s Cart
                  </p>
                  <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                    <div class="pb-4 md:pb-8 w-full md:w-40">
                      <img
                        class="w-full hidden md:block"
                        src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                        alt="dress"
                      />
                      <img
                        class="w-full md:hidden"
                        src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                        alt="dress"
                      />
                    </div>
                    <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                      <div class="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 class="text-xl text-black xl:text-2xl font-semibold leading-6">
                          Premium Quaility Dress
                        </h3>
                        <div class="flex justify-start items-start flex-col space-y-2">
                          <p class="text-sm text-black leading-none">
                            <span class="text-black">Style: </span> Italic
                            Minimal Design
                          </p>
                          <p class="text-sm text-black leading-none">
                            <span class="text-black">Size: </span> Small
                          </p>
                          <p class="text-sm text-black leading-none">
                            <span class="text-black">Color: </span> Light Blue
                          </p>
                        </div>
                      </div>
                      <div class="flex justify-between space-x-8 items-start w-full">
                        <p class="text-base text-black xl:text-lg leading-6">
                          $36.00{" "}
                          <span class="text-red-300 line-through"> $45.00</span>
                        </p>
                        <p class="text-base text-black xl:text-lg leading-6">
                          01
                        </p>
                        <p class="text-base text-black xl:text-lg font-semibold leading-6">
                          $36.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                    <div class="w-full md:w-40">
                      <img
                        class="w-full hidden md:block"
                        src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                        alt="dress"
                      />
                      <img
                        class="w-full md:hidden"
                        src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
                        alt="dress"
                      />
                    </div>
                    <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                      <div class="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 class="text-xl text-black xl:text-2xl font-semibold leading-6">
                          High Quaility Italic Dress
                        </h3>
                        <div class="flex justify-start items-start flex-col space-y-2">
                          <p class="text-sm text-black leading-none">
                            <span class="text-black">Style: </span> Italic
                            Minimal Design
                          </p>
                          <p class="text-sm text-black leading-none">
                            <span class="text-black">Size: </span> Small
                          </p>
                          <p class="text-sm text-black leading-none">
                            <span class="text-black">Color: </span> Light Blue
                          </p>
                        </div>
                      </div>
                      <div class="flex justify-between space-x-8 items-start w-full">
                        <p class="text-base text-black xl:text-lg leading-6">
                          $20.00{" "}
                          <span class="text-red-300 line-through"> $30.00</span>
                        </p>
                        <p class="text-base text-black xl:text-lg leading-6">
                          01
                        </p>
                        <p class="text-base text-black xl:text-lg font-semibold leading-6">
                          $20.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                <h3 class="text-xl text-black font-semibold leading-5">
                  Customer
                </h3>
                <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                  <div class="flex flex-col justify-start items-start flex-shrink-0">
                    <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                      <img
                        src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                        alt="avatar"
                      />
                      <div class="flex justify-start items-start flex-col space-y-2">
                        <p class="text-base text-black font-semibold leading-4 text-left">
                          David Kent
                        </p>
                        <p class="text-sm dark:text-black leading-5 text-gray-600">
                          10 Previous Orders
                        </p>
                      </div>
                    </div>

                    <div class="flex justify-center text-black md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                      <img
                        class="dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                        alt="email"
                      />
                      <img
                        class="hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                        alt="email"
                      />
                      <p class="cursor-pointer text-sm leading-5 ">
                        david89@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                  <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                      <p class="text-base text-black font-semibold leading-4 text-center md:text-left">
                        Shipping Address
                      </p>
                      <p class="w-48 lg:w-full dark:text-black xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        180 North King Street, Northhampton MA 1060
                      </p>
                    </div>
                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                      <p class="text-base text-black font-semibold leading-4 text-center md:text-left">
                        Billing Address
                      </p>
                      <p class="w-48 lg:w-full dark:text-black xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        180 North King Street, Northhampton MA 1060
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* menubar */}

        <div
          className={` flex-col lg:w-[40%] h-[100vh] md:w-[40%] xs:w-[40%] pt-5  bg-[white]  absolute top-7 transition-all duration-1000 ease-linear z-[999] ${
            navigationBar ? "left-0 " : "left-[-100%]  "
          }`}
        >
          <div className="">
            <div className="flex justify-between items-center text-[30px] font-normal p-4 ">
              <HiMagnifyingGlass />
              <input
                type="text "
                className="bg-transparent rounded-2xl border-2 border-[#ccc] w-[78%]"
              />
              <RxCross1 onClick={() => setNavigationBar(!navigationBar)} />
            </div>
            <div className=" border-b-[1px] border-[#ccc]">
              <ul className="flex justify-evenly items-center p-2 font-normal bg-[#e0dede]">
                <li className="p-[10px] hover:bg-[black] hover:text-[white]">
                  Sale
                </li>
                <li className="p-[10px] hover:bg-[black] hover:text-[white]">
                  Men
                </li>
                <li className="p-[10px] hover:bg-[black] hover:text-[white]">
                  Women
                </li>
                <li className="p-[10px] hover:bg-[black] hover:text-[white]">
                  TheHolidayShop
                </li>
              </ul>
            </div>

            <div className="mx-auto border-b-[1px] border-b-gray-300 max-w-full my-2">
              <div className="divide-y divide-gray-300">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500 ">
                    Women's sale
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Shop All
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Jackets
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Sweeters
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Tops
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Bottoms
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                    Mens's Sale
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Shop All
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Jackets
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Sweeters
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Tops
                  </div>
                  <div className="p-4 text-secondary-500 font-bold text-[14px] hover:underline ">
                    Bottoms
                  </div>
                </details>
              </div>
            </div>
            {/* image */}
            <div className="p-3 ">
              <div className="sidebar-img1 w-[100%] h-[120px] relative  mt-2">
                {" "}
                <span className="absolute top-20 text-[white] text-[25px] left-2  font-bold">
                  Women's sales
                </span>
              </div>
              <div className="sidebar-img2 relative w-[100%] h-[120px]  mt-2">
                <span className="absolute top-20   text-[white] text-[25px] left-2 font-bold">
                  Men's sales
                </span>{" "}
              </div>
            </div>
            <div className="mx-auto border-b-[1px] p-2 border-gray-300 max-w-full my-2">
              <div className="divide-y  divide-gray-300">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center bg-gray-200 px-4 py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                    <img
                      className="max-w-[8%]"
                      src="https://media.istockphoto.com/id/934017954/vector/canada-flag.jpg?s=612x612&w=0&k=20&c=QYOJlgWtujlAPzncX5H4UFPDpySMhoh2iPc_zi2t_zQ="
                      alt=""
                    />
                    <span
                      className="flex ml-2  items-center"
                      onClick={() => setSideflag(!sideflag)}
                    >
                      $USD {sideflag ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </summary>
                  <div className="pb-4 text-secondary-500 font-bold text-[14px]">
                    About US
                  </div>
                  <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                    <img
                      className="w-[30px]"
                      src="https://ca.frankandoak.com/cdn/shop/files/icon-organic_cotton.svg"
                      alt=""
                    />{" "}
                    <span className="text-[12px] mx-1 my-auto font-bold">
                      Organic Cotton
                    </span>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                    About Us
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 font-bold text-[14px]">
                    Who We are
                  </div>
                  <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                    <span className="text-[12px] mx-1 my-auto font-bold">
                      Fabrics
                    </span>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                    Discover
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 font-bold text-[14px]">
                    Dift card's
                  </div>
                  <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                    <span className="text-[12px] mx-1 my-auto font-bold">
                      Blogs
                    </span>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                    Customer care
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 font-bold text-[14px]">
                    Shipping Information
                  </div>
                  <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                    F.A.Q
                  </div>
                </details>
              </div>
            </div>

            <div className="w-[60px] ml-[150px] mt-[50px]">
              <img
                src="https://res.cloudinary.com/zoominfo-com/image/upload/w_40,h_40,c_fit/frankandoak.com"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* form */}

        <div
          className={`flex-col lg:w-[50%] lg:shadow-md lg:h-[800px] md:h-[80vh] md:w-[80%] xs:w-[40%] pt-8  bg-[white] text-center absolute lg:left-[400px] md:left-[100px] lg:top-[-50px]  md:top-[-50px] transition-all duration-100 ease-linear z-[999] ${
           profile? "scale-1 " : "scale-0  "
          }`}
        >
      <div className="absolute  top-[5px] right-[10px]">
        <p className="font-bold text-[30px]" onClick={()=>setProfile(!profile)}>X</p>
      </div>
          <div className="font-[bold] ">
            <h1 className="text-[30px]">Welcome back!</h1>
            <h2 className="text-[18px]">Log in to enjoy your perks</h2>
          </div>
          <div className="md:my-10">
            <div className="  mx-auto px-[5px] max-w-[1000px] grid  grid-cols-3    ">
              <div className=" my-2 text-center flex justify-center   text-[12px]   font-bold">
                <div className="md:my-2">
                  <img
                    className="md:w-[30px] md:mx-[50px]"
                    src="https://res.cloudinary.com/zoominfo-com/image/upload/w_40,h_40,c_fit/frankandoak.com"
                    alt=""
                  />
                 
                  <span> Free Shipping over $99</span>
                </div>
              </div>

              <div className=" my-2 text-center flex justify-center   text-[12px]   font-bold">
                <div className="">
                  <img
                    className="w-[50px] mx-[30px] mix-blend-multiply "
                    src="./Heart.png "
                    alt=""
                  />
                  <span> Whislist</span>
                </div>
              </div>
              <div className=" my-2 text-center flex justify-center   text-[12px]   font-bold">
                <div className="md:my-2">
                  <img
                    className="md:w-[30px] md:mx-[30px]"
                    src="https://res.cloudinary.com/zoominfo-com/image/upload/w_40,h_40,c_fit/frankandoak.com"
                    alt=""
                  />

                  <span> Early Access</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[600px] lg:w-[580px] border-2 md:my-[15px] lg:mx-[50px] md:mx-[50px] border-gray-400 md:h-[60px]">
            <input type="text" className=" bg-transparent w-[100%] h-[100%] pl-[10px] " placeholder="Email address"/>
          </div>
          <div className="md:w-[600px] lg:w-[580px] text-left relative lg:mx-[50px] border-2 md:my-[15px] md:mx-[50px] border-gray-400 md:h-[60px]">
            <input type="text" className=" bg-transparent  w-[100%] h-[100%] pl-[10px] " placeholder="Password"/>
            <p className="underline hover:text-blue-800">Forgot Password?</p>
            <p className="underline absolute top-2 right-1">show</p>
          </div>
          
          <div className="md:w-[580px] lg:ml-[50px]  relative border-2 md:my-[35px] md:mx-[50px]     border-gray-400 md:h-[60px]">
            <button className="w-[100%] h-[100%] hover:bg-[white] hover:text-[black] bg-black text-white text-center text-[20px]">Log in</button>
          </div>
          <div className="relative border-t-[1px] my-[30px] border-gray-500 w-[100%] ">
            <div className="absolute -top-[13px] px-[10px] left-[18rem] bg-white">
              <p>Social Login</p>
            </div>
          </div>

          <div className="md:w-[600px] lg:ml-[50px] md:mx-[50px] grid grid-cols-2 gap-3 md:my-[40px]">
            <div className="border-2 hover:bg-black hover:text-white border-gray-400 flex justify-around items-center p-[10px] "><FaFacebookF />
              <button>Sign in with Facebook</button>
            </div>
            <div className="border-2 hover:bg-black hover:text-white border-gray-400 flex justify-around items-center p-[10px] "><FaGoogle />
              <button>Sign in with Google</button>
            </div>
          </div>

          <div className="my-[30px]">
            <div className="">
              <p>Create an account</p>
            </div>
          </div>

          <div className=" ">
            <p className="">Don't have an account? <span className="underline text-blue-600"> Sign up</span></p>
          </div>
        </div>
      </div>
    </>
  );
}
