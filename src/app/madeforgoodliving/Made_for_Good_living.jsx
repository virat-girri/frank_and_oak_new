"use client"

import React from 'react'

export default function Made_for_Good_living() {
    return (
        <>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 lg:p-4 md:p-2 xs:p-2 my-8 '>
                <div className='lg:p-4 md:p-2 xs:p-2'>

                    <div className='my-[25%] xs:p-2 lg:px-[15%]'>

                        <div className=' w-[100%] '>
                            <h1 className=' xs:text-[40px] md:text-[50px] lg:text-[45px] font-bold my-2 mx-2 '>Made for Good Living.</h1>
                            <h2 className=' xs:text-[30px] md:text-[40px] lg:text-[20px] text-gray-400 font-normal my-2 mx-2 '>Born and raised in Montreal, Frank And Oak is dedicated to creating conscious collections that seamlessly fit into your everyday life.</h2>
                        </div>

                        <button className=' underline text-[22px] mx-2 '>Learn more</button>

                    </div>

                </div>
                <div className='lg:p-4 xs:p-2 md:p-2 xs:mx-auto md:mx-auto'>


                    <div className=' grid lg:grid-cols-2 xs:grid-cols-1 gap-4 '>
                        <div className=' w-full h-full my-2 relative '>
                            <img className=' h-[350px] ' src="https://ca.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334122" alt="" />
                            <span className=' absolute bottom-4 text-[25px] text-white m-4'>
                                Sustainable Practices
                            </span>
                        </div>
                        <div className=' w-full h-full my-2 relative '>
                            <img className=' h-[350px] ' src="https://ca.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712159293" alt="" />
                            <span className=' absolute bottom-4 text-[25px] text-white m-4'>
                                Design Philosophy
                            </span>
                        </div>
                    </div>

                    <div className=' grid lg:grid-cols-2 xs:grid-cols-1 gap-4 '>
                        <div className=' w-full h-full my-2 relative '>
                            <img className=' h-[350px] ' src="https://ca.frankandoak.com/cdn/shop/files/Tile_desktop_3_900x.jpg?v=1712334276" alt="" />
                            <span className=' absolute bottom-4 text-[25px] text-white m-4'>
                                Fabrics Innovation
                            </span>
                        </div>
                        <div className=' w-full h-full my-2 relative '>
                            <img className=' h-[350px] ' src="https://ca.frankandoak.com/cdn/shop/files/story-partners_900x.jpg?v=1712159293" alt="" />
                            <span className=' absolute bottom-4 text-[25px] text-white m-4'>
                                Partners and Factories
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
