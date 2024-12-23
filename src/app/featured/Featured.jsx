import React from 'react'

export default function FeaturedCategory() {
    return (
        <>
            <div className='w-full text-[40px] py-8 px-5 font-normal '>Featured Categories</div>


            <div className='w-full flex flex-wrap justify-around align-items-center p-3 '>
                <div className=' text-[16px] font-normal my-4 '>
                    <img className=' w-[320px] h-[430px]' src="https://ca.frankandoak.com/cdn/shop/files/240928F_O_SHOT1__S_2130305-107_NOV_75994v2-C-100DPI_900x.jpg?v=1733496780" alt="" />Womens Sweaters
                </div>
                <div className=' text-[16px] font-normal my-4 '>
                    <img className=' w-[320px] h-[430px]' src="https://ca.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_3af261c2-f510-428c-b7a1-aa5826bbd5c3_900x.jpg?v=1733496797" alt="" />Womens Winter Jackets
                </div>
                <div className=' text-[16px] font-normal my-4 '>
                    <img className=' w-[320px] h-[430px]' src="https://ca.frankandoak.com/cdn/shop/files/240928F_O_SHOT1_A__1130375-579_NOV_76473-C-100DPI_900x.jpg?v=1733496806" alt="" />Mens Sweaters
                </div>
                <div className=' text-[16px] font-normal my-4 '>
                    <img className=' w-[320px] h-[430px]' src="https://ca.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-1_8b777c87-0e1a-47da-bebf-0b9b537e2c17_900x.jpg?v=1733496810" alt="" />Mens Winter Jackets
                </div>
            </div>
        </>
    )
}
