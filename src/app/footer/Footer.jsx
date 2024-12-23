"use client"
import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
export default function Footer() {
    return (
        <>

            <footer class="bg-black">
                <div class="mx-auto w-full max-w-screen-2xl">

                    <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-2 py-6 lg:py-8 xs:grid-cols-1 md:grid-cols-2">
                        <div className=' mx-auto '>
                            <img className=' mx-auto ' src="https://ca.frankandoak.com/cdn/shop/files/shipping-holiday-footer-v1_40x.svg?v=1732294901" alt="" />
                            <div className='text-white text-center py-2'>
                                Free Shipping <br />
                                On orders over $99.
                            </div>
                        </div>
                        <div className=' mx-auto '>
                            <img className=' mx-auto ' src="https://ca.frankandoak.com/cdn/shop/files/returns-holiday-footer-v1_40x.svg?v=1732294901" alt="" />
                            <div className='text-white text-center py-2'>
                                Extended Returns <br />
                                until January 12th
                            </div>
                        </div>
                        <div className=' mx-auto '>
                            <img className=' mx-auto ' src="https://ca.frankandoak.com/cdn/shop/files/Group_127_1a4d4c1c-42f6-4678-8bdd-2fa33c35ab46_40x.png?v=1726686014" alt="" />
                            <div className='text-white text-center py-2'>
                                Frank's Club <br />
                                Earn points and get rewards.
                            </div>
                        </div>
                        <div className=' mx-auto '>
                            <img className=' mx-auto ' src="https://ca.frankandoak.com/cdn/shop/files/bnpl-holiday-holiday-footer-v1_40x.svg?v=1732294901" alt="" />
                            <div className='text-white text-center py-2'>
                                Buy Now, Pay Later <br />
                                Select Klarna at checkout.
                            </div>
                        </div>

                    </div>

                    <div class="grid lg:grid-cols-3 xl:grid-cols-5 gap-2 py-6 lg:py-8 xs:grid-cols-1 md:grid-cols-2">
                        <div className='mx-auto my-4 w-100'>
                            <div className=' w-[150px] h-[150px] text-white bg-white '>
                                <img className='w-100 h-100' src="https://res.cloudinary.com/zoominfo-com/image/upload/w_40,h_40,c_fit/frankandoak.com" alt="" />
                            </div>
                            <div className=' flex flex-wrap justify-between align-items-center text-[20px] text-white my-8 '>
                                <IoLogoInstagram />
                                <FiFacebook />
                                <SlSocialTwitter />
                                <FaPinterestP />
                                <IoIosMail />
                                <FaLinkedin />
                            </div>
                        </div>
                        <div className='mx-auto my-4 w-100'>
                            <h2 class="mb-6 text-[22px] text-white">About us</h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Who We Are</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Sustainable Practices</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Design Philosophy</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Fabrics</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Circular denim™</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Partners and Factories</a>
                                </li>
                            </ul>
                        </div>
                        <div className='mx-auto my-4 w-100'>
                            <h2 class="mb-6 text-[22px] text-white">Discover</h2>
                            <ul class="text-white font-medium">
                                <li className="mb-4 hover:underline cursor-pointer">Gift Cards</li>
                                <li className="mb-4 hover:underline cursor-pointer">Frank's Club</li>
                                <li className="mb-4 hover:underline cursor-pointer">Give $15, Get $15</li>
                                <li className="mb-4 hover:underline cursor-pointer">Affiliate</li>
                                <li className="mb-4 hover:underline cursor-pointer">Blog</li>
                                <li className="mb-4 hover:underline cursor-pointer">Work with us</li>
                                <li className="mb-4 hover:underline cursor-pointer">Our Stores</li>
                            </ul>
                        </div>
                        <div className='mx-auto my-4 w-100'>
                            <h2 class="mb-6 text-[22px] text-white">Customer Care</h2>
                            <ul class="text-white font-medium">
                                <li className="mb-4 hover:underline cursor-pointer">Shipping Information</li>
                                <li className="mb-4 hover:underline cursor-pointer">Returns & Exchanges</li>
                                <li className="mb-4 hover:underline cursor-pointer">Coupon Codes</li>
                                <li className="mb-4 hover:underline cursor-pointer">F.A.Q.</li>
                                <li className="mb-4 hover:underline cursor-pointer">Klarna</li>
                                <li className="mb-4 hover:underline cursor-pointer">Terms & Conditions</li>
                                <li className="mb-4 hover:underline cursor-pointer">Refund Policy</li>
                                <li className="mb-4 hover:underline cursor-pointer">Privacy Policy</li>
                                <li className="mb-4 hover:underline cursor-pointer">Accessibility Statement</li>
                                <li className="mb-4 hover:underline cursor-pointer">Customer Data Requests</li>
                            </ul>
                        </div>
                        <div className='mx-auto my-4 w-100'>
                            <h2 class="mb-6 text-[22px] text-white mx-auto">Stay in touch</h2>
                            <h2 class="text-[10px] mb-4 text-white mx-auto">Join our newsletter and stay in the know about new collections, outfit inspiration, sales, and more.</h2>

                            <div className=' mx-auto '>
                                <input type="email" className='bg-black text-white px-5 py-2 my-2 border border-white' placeholder='Enter your Email' />

                                <input type="text" className='bg-black text-white px-5 py-2 my-2 border border-white' placeholder='Enter your Name' />
                            </div>

                            <div className='w-[100%] my-2 mx-auto'>

                                <div class="flex justify-start items-center w-full flex-wrap">
                                    <div className=' text-white '>I shop for</div>

                                    <div className='mx-2'>
                                        <input checked id="bordered-radio-1" type="radio" value="" name="bordered-radio" />
                                        <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Men</label>
                                    </div>

                                    <div className='mx-2'>
                                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" />
                                        <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Women</label>
                                    </div>

                                    <div className='mx-2'>
                                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" />
                                        <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                                    </div>
                                </div>

                            </div>

                            <button className=' px-8 py-2 text-white bg-black border border-white my-1'>Subscribe Now</button>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    )
}
