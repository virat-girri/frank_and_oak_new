'use client'

import React from 'react'
import "../Common/index.css"


export default function Bigimg() {
    return (
        <>
            <div className='relative grid lg:grid-cols-2 md:grid-cols-1 w-full'>
                <div id='IMG1' className=' h-[350px] sm:h-[400px] lg:h-[583.5px] md:w-full'>

                </div>
                <div className='absolute top-[30%] w-[100%]'>
                    <div className='text-center lg:text-[80px] text-[60px] text-white font-bold'>
                        From you to them
                    </div>
                    <div className='text-center lg:text-[30px] text-[25px] text-white font-normal'>
                        Gift ideas for the people who mean the most.
                    </div>
                    <div className='flex w-[30%] mx-auto justify-between align-items-center'>
                        <button className=' bg-white py-3 px-8 mx-2 mt-6 '>Men</button>
                        <button className=' bg-white py-3 px-8 mx-2 mt-6 '>Women</button>
                    </div>
                </div>
                <div id='IMG2' className=' h-[350px] sm:h-[400px] lg:h-[583.5px] '>

                </div>
            </div>


            <div className='bg-black'>
            <div className='  mx-auto px-[15px] max-w-[1000px] grid  lg:grid-cols-4  grid-cols-2  text-white'>
            <div className=' my-2    text-[12px] flex align-items-center  font-bold'>
                    <img className='w-[20px] mx-2' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/shipping-holiday-thin-v1.svg?v=1732295425" alt="" />Free Shipping over $99
                </div>

                <div className=' my-2  text-[12px] flex align-items-center  font-bold'>
                    <img className='w-[20px] mx-2' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/returns-holiday-thin-v1.svg?v=1732295425" alt="" />Extended Returns until Jan. 12
                
                
                </div>

                <div className=' my-2   text-[12px] flex align-items-center  font-bold'>
                    <img className='w-[20px] mx-2' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/franks-club-icon-1.png?v=1725563403" alt="" />Earn Points
                </div>
                <div className=' my-2   text-[12px] flex align-items-center  font-bold'>
                    <img className='w-[20px] mx-2' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/bnpl-holiday-holiday-thin-v1.svg?v=1732295425" alt="" />Buy Now, Pay Later
                </div>
            
            </div>
            </div>
        </>
    )
}
