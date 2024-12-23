"use state"


import React from 'react'
import Header from '../Common/Header'
import Footer from '../Footer/Footer'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import Justin from '../justin/Justin'

export default function page() {
    return (
        <>

            <Header />


            <div>

                <div className="py-8">
                    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-[60%_auto] gap-4 xs:grid-cols-1">
                            <div>
                                <div className=" grid xs:grid-cols-1 gap-3 my-4 xl:grid-cols-2 ">

                                    <div className=' my-2 '>
                                        <img className="w-full h-full object-cover" src="https://ca.frankandoak.com/cdn/shop/files/1120909-002.01_0a3b7bcb-5672-40bd-a1ef-74aaba58c24f_1200x.jpg?v=1722533716" alt="Product Image" />
                                    </div>

                                    <div className=' my-2 '>
                                        <img className="w-full h-full object-cover" src="https://ca.frankandoak.com/cdn/shop/files/1120909-002.02_890f9e68-0df7-4cbe-9a3f-e1aa0a50e4a5_1200x.jpg?v=1722533716" alt="Product Image" />
                                    </div>

                                    <div className=' my-2 '>
                                        <img className="w-full h-full object-cover" src="https://ca.frankandoak.com/cdn/shop/files/1120909-002.03_c1836bad-6451-4dc2-b07c-1bf7e5c66501_1200x.jpg?v=1722533715" alt="Product Image" />
                                    </div>

                                    <div className=' my-2 '>
                                        <img className="w-full h-full object-cover" src="https://ca.frankandoak.com/cdn/shop/files/1120909-002.04_6b28e287-e977-4df8-a03c-b593f45a039d_1200x.jpg?v=1722533715" alt="Product Image" />
                                    </div>

                                    <div className=' my-2 '>
                                        <img className="w-full h-full object-cover" src="https://ca.frankandoak.com/cdn/shop/files/1120909-002_1200x.jpg?v=1722533725" alt="Product Image" />
                                    </div>
                                </div>
                               
                            </div>

                            {/* second column */}

                            <div className="md:flex-1 px-4">
                              <p className='text-[22px] text-[black] font-normal py-[10px]'> <span className='hover:underline ' >
                                 <Link href={'/'} >Home</Link></span>
                                  /
                                  <span className='underline '>Men</span></p>

                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                                <p className="xs:text-[25px] lg:text-[35px] mb-4">
                                    The Essential Slim T-Shirt in Black
                                </p>
                                <div className="mb-4">
                                    <div className="mr-4">
                                        <span className=' font-semibold text-[16px] my-1 '>CA$</span>
                                        <span className=' font-semibold text-[16px] my-1 '>49.50</span>
                                    </div>
                                    <div className="mr-4">
                                        <p className=' font-normal text-[14px] my-1 '>4 payments of $12.37 with Klarna. Learn More</p>
                                    </div>
                                </div>
                                <div className=' border border-[#F5F5F6] my-4 '></div>
                                <div className="mb-4">
                                    <span>Color:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="w-6 h-6 rounded-full bg-[#F4F5F0] dark:bg-[#F4F5F0] mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-black dark:bg-black mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-[#807D6F] dark:bg-[#807D6F] mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-[#948D99] dark:bg-[#948D99] mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-[#3A5C6E] dark:bg-[#3A5C6E] mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-[#7E5E52] dark:bg-[#7E5E52] mr-2"></button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className=' text-[14px] my-2 '>Select Size:</span>
                                    <div className="flex items-center mt-2">
                                        <button className=" py-2 px-4 font-bold mx-2 border border-[#F5F5F6] hover:border hover:bg-black hover:text-[white] ">S</button>
                                        <button className=" py-2 px-4 font-bold mx-2 border border-[#F5F5F6] hover:border hover:bg-black hover:text-[white] ">M</button>
                                        <button className=" py-2 px-4 font-bold mx-2 border border-[#F5F5F6] hover:border hover:bg-black hover:text-[white]">L</button>
                                        <button className=" py-2 px-4 font-bold mx-2 border border-[#F5F5F6] hover:border hover:bg-black hover:text-[white] ">XL</button>
                                        <button className=" py-2 px-4 font-bold mx-2 border border-[#F5F5F6] hover:border hover:bg-black hover:text-[white] ">XXL</button>
                                    </div>
                                </div>
                                 <div className="flex text-center -mx-2 mb-4">
                                    <div className="w-3/4 px-2">
                                        <button className="w-full bg-black text-white py-4 px-7 hover:bg-white hover:text-black border border-black">Add to Cart</button>
                                    </div>
                                    <div className="w-1/9 px-2">
                                        <button className="w-full bg-black text-white py-3  hover:bg-white hover:text-black border px-5 border-black"><FaHeart className='text-[30px]'/></button>
                                    </div>
                                </div>
                                <div className=' border border-[#F5F5F6] my-2 '></div>
                                <div className=' flex flex-wrap justify-between align-items-center py-2 '>
                                    <div className='flex flex-wrap justify-between align-items-center'>
                                        <img className='w-[30px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/shipping-holiday-PDP-v1.svg?v=1732296041" alt="" />
                                        <span className='my-auto mx-2'>Free Shipping over $99</span>
                                    </div>

                                    <div className='flex flex-wrap justify-between align-items-center'>
                                        <img className='w-[30px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/returns-holiday-PDP-v1.svg?v=1732296041" alt="" />
                                        <span className='my-auto mx-2'>Free Extended Returns until Jan. 12</span>
                                    </div>
                                </div>
                                
                                <div className=' border border-[#F5F5F6] my-2 '></div>
                                <div>
                                    <span className=' text-[16px] '>Overview</span>
                                    <p className=" text-[15px] my-2 font-semibold ">
                                        You've found the perfect T-shirt. An all-time favourite, now reinvented with a slightly thicker and more resistant fabric that's not too dense, not too light— just right. Made from 100% pre-shrunk combed organic cotton. Features a silicon wash for a softer feel. Slim fit. Timeless crewneck.
                                    </p>
                                    <p className=" text-[15px] my-2 font-semibold ">
                                        This product is certified OEKO-TEX® STANDARD 100, which means that it is exempt from harmful substances.
                                    </p>
                                </div>

                          
                                <div className=' border border-[#F5F5F6] my-2 '></div>
                                     
                                {/* FAQ */}

                                <div className="mx-auto max-w-full my-2">
                                    <div className="divide-y divide-gray-100">
                                        <details className="group">
                                            <summary
                                                className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                                                Features
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                                    </svg>
                                                </div>
                                            </summary>
                                            <div className="pb-4 text-secondary-500 font-bold text-[14px]">Sustainable Materials</div>
                                            <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                                                <img className='w-[30px]' src="https://ca.frankandoak.com/cdn/shop/files/icon-organic_cotton.svg" alt="" /> <span className='text-[12px] mx-1 my-auto font-bold'>Organic Cotton</span>
                                            </div>
                                        </details>
                                        <details className="group">
                                            <summary
                                                className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                                                Fit & Sizing
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                                    </svg>
                                                </div>
                                            </summary>
                                            <div className="pb-4 text-secondary-500 font-bold text-[14px]">Simon B. is 6'2 wearing size M</div>
                                            <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                                                <span className='text-[12px] mx-1 my-auto font-bold'>View the Size Guide</span>
                                            </div>
                                        </details>
                                        <details className="group">
                                            <summary
                                                className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                                                Material & Care
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                                    </svg>
                                                </div>
                                            </summary>
                                            <div className="pb-4 text-secondary-500 font-bold text-[14px]">Materials</div>
                                            <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                                                <span className='text-[12px] mx-1 my-auto font-bold'>100% Organic cotton</span>
                                            </div>
                                        </details>
                                        <details className="group">
                                            <summary
                                                className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-medium text-secondary-900 group-open:text-primary-500">
                                                Shipping & Returns
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                                    </svg>
                                                </div>
                                            </summary>
                                            <div className="pb-4 text-secondary-500 font-bold text-[14px]">Free and Easy Returns</div>
                                            <div className="pb-4 text-secondary-500 flex justify-start align-items-center">
                                                <span className='text-[12px] mx-1 my-auto font-bold'>
                                                    Extended Holiday Returns for online orders: Orders placed between November 13th and December 24th, 2024 can be returned until January 12th, 2025 or 15 days following the date your order is shipped, whichever is later. All other terms of our return policy remain the same.

                                                    <br />

                                                    Canada Post strike—Due to limited shipping carrier options, deliveries to PO boxes or rural addresses may be delayed.

                                                    <br />

                                                    We recommend using an alternate shipping address if possible. Learn more

                                                    <br />

                                                    Shipping carriers across Canada are currently facing processing delays due to increased demand following the Canada Post strike. This may impact delivery times and tracking updates, but we want to assure you that we're doing our best to ensure orders arrive as quickly as possible.

                                                    <br />

                                                    You have 15 days from the date your order is shipped to request a prepaid return

                                                    <br />

                                                    shipping label online. Visit our FAQ for our full return policy.
                                                </span>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>
                     {/* /////////// */}

                        <Justin/>
                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}




     

 
  

