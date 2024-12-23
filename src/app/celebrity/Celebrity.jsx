"use client"
import React from 'react'



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function Celebrity() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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

            <div className=' grid lg:grid-cols-2 md:grid-cols-1 bg-[#F9F9F9] lg:p-4 md:p-2 xs:p-2 w-full'>

                <div className='lg:p-4 xs:p-2 md:p-2 xs:mx-auto md:mx-auto w-full'>
                    <img src="https://ca.frankandoak.com/cdn/shop/files/HP_Featured_section_2160x.jpg?v=1733496879" alt="" />
                </div>

                <div className='lg:p-4 md:p-2 xs:p-2'>

                    <div className='my-[25%] xs:p-2 lg:px-[15%]'>

                        <div className=' w-[100%] '>
                            <h1 className=' xs:text-[40px] md:text-[50px] lg:text-[35px] font-bold my-2 mx-2 '>Celebrate in style!</h1>
                            <h2 className=' xs:text-[30px] md:text-[40px] lg:text-[20px] font-normal my-2 mx-2 '>Chic fits for every festive occasion.</h2>
                        </div>

                        <div className=' w-full '>
                            <Carousel className=' w-100 h-100 ' responsive={responsive}>
                                <div className='mx-2 my-2'>
                                    <img src="https://ca.frankandoak.com/cdn/shop/files/2110387-002.01_68fa3df0-02e4-4623-b068-d02ba1aff7e9.jpg?crop=center&height=420&v=1731351726&width=314" alt="" />
                                </div>
                                <div className='mx-2 my-2'>
                                    <img src="https://ca.frankandoak.com/cdn/shop/files/2210553-002.01_30f20d89-73f3-4763-a2ca-05561c84ed53.jpg?crop=center&height=420&v=1730996527&width=314" alt="" />
                                </div>
                                <div className='mx-2 my-2'>
                                    <img src="https://ca.frankandoak.com/cdn/shop/files/1310242-002.01.jpg?crop=center&height=420&v=1730923828&width=314" alt="" />
                                </div>
                                <div className='mx-2 my-2'>
                                    <img src="https://ca.frankandoak.com/cdn/shop/files/1210545-002.01.jpg?crop=center&height=420&v=1730923176&width=314" alt="" />
                                </div>
                                <div className='mx-2 my-2'>
                                    <img src="https://ca.frankandoak.com/cdn/shop/files/Frank_OakUGC-Edited-9PDP.jpg?crop=center&height=420&v=1731962641&width=314" alt="" />
                                </div>
                                <div className='mx-2 my-2'>
                                    <img src="https://ca.frankandoak.com/cdn/shop/files/Frank_OakUGC-Edited-1PDP.jpg?crop=center&height=420&v=1731963793&width=314" alt="" />
                                </div>
                            </Carousel>
                        </div>

                        <button className=' underline text-[22px] mx-2 '>Shop Now</button>

                    </div>

                </div>

            </div>

        </>
    )
}
