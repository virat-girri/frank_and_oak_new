import React from 'react'

export default function GiftCard() {
    return (
        <>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 bg-[#F9F9F9] lg:p-4 md:p-2 xs:p-2 mt-8 '>
                <div className='lg:p-4 md:p-2 xs:p-2'>

                    <div className='my-[25%] xs:p-2 lg:px-[15%]'>

                        <div className=' w-[100%] '>
                            <h1 className=' xs:text-[40px] md:text-[50px] lg:text-[35px] font-bold my-2 mx-2 '>Gift Cards</h1>
                            <h2 className=' xs:text-[30px] md:text-[40px] lg:text-[20px] font-normal my-2 mx-2 '>Sometimes, the best surprise is to let them choose.</h2>
                        </div>

                        <div className='flex-wrap flex justify-center lg:justify-start align-content-center my-4'>
                            <div className=' mx-2 my-2 '>
                                <img class="featured-category__carousel-image lazyload" loading="lazy" width="157" height="210" src="//ca.frankandoak.com/cdn/shop/files/1200x1600FAOe-card.gif?crop=center&amp;height=420&amp;v=1729092409&amp;width=314" alt="E-Gift Card" />
                            </div>
                            <div className=' mx-2 my-2 '>
                                <img class="featured-category__carousel-image lazyload" loading="lazy" width="157" height="210" src="//ca.frankandoak.com/cdn/shop/files/physical-gc-2024-1.jpg?crop=center&amp;height=420&amp;v=1729092584&amp;width=314" alt="Physical Gift Card" />
                            </div>
                        </div>

                        <button className=' underline text-[22px] mx-2 '>Shop Now</button>

                    </div>

                </div>
                <div className='lg:p-4 xs:p-2 md:p-2 xs:mx-auto md:mx-auto'>
                    <img className="img__el lazyload " data-js-class="img_el" title="" alt="" srcset="
                    //ca.frankandoak.com/cdn/shop/files/E-gift_card_animation_1_5e12410d-50fc-4258-b0ed-e1df2664ebdd_768x.gif?v=1733500063 768w, //ca.frankandoak.com/cdn/shop/files/E-gift_card_animation_1_5e12410d-50fc-4258-b0ed-e1df2664ebdd_1536x.gif?v=1733500063 1024w, //ca.frankandoak.com/cdn/shop/files/E-gift_card_animation_1_5e12410d-50fc-4258-b0ed-e1df2664ebdd_2160x.gif?v=1733500063 1440w"></img>
                </div>
            </div>
        </>
    )
}
