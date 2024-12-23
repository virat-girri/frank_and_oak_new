"use client"

import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function What_others_are_saying() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className=' bg-[#F9F9F9] lg:p-4 md:p-2 xs:p-2 my-8 '>
                <div className='lg:p-4 md:p-2 xs:p-2'>

                    <div className='py-2'>

                        <div className=' w-[100%] text-center '>
                            <h1 className=' xs:text-[40px] md:text-[50px] lg:text-[35px] font-normal my-2 mx-2 '>What others are saying</h1>
                        </div>


                        <div className='my-4 mt-10 mx-auto'>

                            <Carousel responsive={responsive}>
                                <div className='shadow-md'>
                                    <div className='mx-2 grid grid-cols-1 lg:grid-cols-2 bg-white'>
                                        <div>
                                            <img  src="https://www.frankandoak.com/cdn/shop/files/1130264-003.04_b055ca3d-d6aa-468b-b3cd-d7009746db30.jpg?crop=center&height=880&v=1731529817&width=672" alt="" />
                                        </div>
                                        <div className='py-[25%]'>
                                            <div className='flex align-items-center justify-start flex-wrap text-[20px] text-black p-4'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <span className='text-[14px] mx-2'>
                                                    Based on 733 review
                                                </span>
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                I love this sweater! The cut is unique and makes it stand out. I always feel comfy, cozy, and stylish. It still looks fresh after several washes.
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                Sarah L.
                                            </div>
                                            <button className=' underline text-[20px] mx-4 '>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow-md'>
                                    <div className='mx-2 grid grid-cols-1 lg:grid-cols-2 bg-white'>
                                        <div>
                                            <img  src="https://ca.frankandoak.com/cdn/shop/files/2130240-1FJ.01.jpg?crop=center&height=880&v=1731098073&width=672" alt="" />
                                        </div>
                                        <div className='py-[25%]'>
                                            <div className='flex align-items-center justify-start flex-wrap text-[20px] text-black p-4'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <span className='text-[14px] mx-2'>
                                                    Based on 733 review
                                                </span>
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                I love this sweater! The cut is unique and makes it stand out. I always feel comfy, cozy, and stylish. It still looks fresh after several washes.
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                Sarah L.
                                            </div>
                                            <button className=' underline text-[20px] mx-4 '>Shop Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='shadow-md'>
                                    <div className='mx-2 grid grid-cols-1 lg:grid-cols-2 bg-white'>
                                        <div>
                                            <img src="https://ca.frankandoak.com/cdn/shop/files/2130240-1FJ.01.jpg?crop=center&height=880&v=1731098073&width=672" alt="" />
                                        </div>
                                        <div className='py-[25%]'>
                                            <div className='flex align-items-center justify-start flex-wrap text-[20px] text-black p-4'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <span className='text-[14px] mx-2'>
                                                    Based on 733 review
                                                </span>
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                I love this sweater! The cut is unique and makes it stand out. I always feel comfy, cozy, and stylish. It still looks fresh after several washes.
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                Sarah L.
                                            </div>
                                            <button className=' underline text-[20px] mx-4 '>Shop Now</button>
                                        </div>
                                    </div>
                                </div>


                                <div className='shadow-md'>
                                    <div className='mx-2 grid grid-cols-1 lg:grid-cols-2 bg-white'>
                                        <div>
                                            <img  src="https://ca.frankandoak.com/cdn/shop/files/2130240-1FJ.01.jpg?crop=center&height=880&v=1731098073&width=672" alt="" />
                                        </div>
                                        <div className='py-[25%]'>
                                            <div className='flex align-items-center justify-start flex-wrap text-[20px] text-black p-4'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <span className='text-[14px] mx-2'>
                                                    Based on 733 review
                                                </span>
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                I love this sweater! The cut is unique and makes it stand out. I always feel comfy, cozy, and stylish. It still looks fresh after several washes.
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                Sarah L.
                                            </div>
                                            <button className=' underline text-[20px] mx-4 '>Shop Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='shadow-md'>
                                    <div className='mx-2 grid grid-cols-1 lg:grid-cols-2 bg-white'>
                                        <div>
                                            <img  src="https://ca.frankandoak.com/cdn/shop/files/2130240-1FJ.01.jpg?crop=center&height=880&v=1731098073&width=672" alt="" />
                                        </div>
                                        <div className='py-[25%]'>
                                            <div className='flex align-items-center justify-start flex-wrap text-[20px] text-black p-4'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <span className='text-[14px] mx-2'>
                                                    Based on 733 review
                                                </span>
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                I love this sweater! The cut is unique and makes it stand out. I always feel comfy, cozy, and stylish. It still looks fresh after several washes.
                                            </div>
                                            <div className=' text-[20px] p-4 '>
                                                Sarah L.
                                            </div>
                                            <button className=' underline text-[20px] mx-4 '>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </Carousel>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
