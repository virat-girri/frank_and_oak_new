"use client"

import React from 'react'



export default function page() {
    return (
        <>

            <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div class="flex justify-start item-start space-y-2 flex-col">
                    <h1 class="text-3xl text-black lg:text-4xl font-semibold leading-7 lg:leading-9">Cart</h1>
                </div>
                <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div class="flex flex-col justify-start items-start  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p class="text-lg md:text-xl text-black font-semibold leading-6 xl:leading-5">Customer’s Cart</p>
                            <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div class="pb-4 md:pb-8 w-full md:w-40">
                                    <img class="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                    <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                </div>
                                <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div class="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 class="text-xl text-black xl:text-2xl font-semibold leading-6">Premium Quaility Dress</h3>
                                        <div class="flex justify-start items-start flex-col space-y-2">
                                            <p class="text-sm text-black leading-none"><span class="text-black">Style: </span> Italic Minimal Design</p>
                                            <p class="text-sm text-black leading-none"><span class="text-black">Size: </span> Small</p>
                                            <p class="text-sm text-black leading-none"><span class="text-black">Color: </span> Light Blue</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between space-x-8 items-start w-full">
                                        <p class="text-base text-black xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
                                        <p class="text-base text-black xl:text-lg leading-6">01</p>
                                        <p class="text-base text-black xl:text-lg font-semibold leading-6">$36.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                                <div class="w-full md:w-40">
                                    <img class="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
                                    <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
                                </div>
                                <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                    <div class="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 class="text-xl text-black xl:text-2xl font-semibold leading-6">High Quaility Italic Dress</h3>
                                        <div class="flex justify-start items-start flex-col space-y-2">
                                            <p class="text-sm text-black leading-none"><span class="text-black">Style: </span> Italic Minimal Design</p>
                                            <p class="text-sm text-black leading-none"><span class="text-black">Size: </span> Small</p>
                                            <p class="text-sm text-black leading-none"><span class="text-black">Color: </span> Light Blue</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between space-x-8 items-start w-full">
                                        <p class="text-base text-black xl:text-lg leading-6">$20.00 <span class="text-red-300 line-through"> $30.00</span></p>
                                        <p class="text-base text-black xl:text-lg leading-6">01</p>
                                        <p class="text-base text-black xl:text-lg font-semibold leading-6">$20.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full  space-y-6">
                                <h3 class="text-xl text-black font-semibold leading-5">Summary</h3>
                                <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div class="flex justify-between w-full">
                                        <p class="text-base text-black leading-4">Subtotal</p>
                                        <p class="text-base dark:text-black leading-4 text-gray-600">$56.00</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full">
                                        <p class="text-base text-black leading-4">Discount <span class="bg-gray-200 p-1 text-xs dark:bg-white dark leading-3">STUDENT</span></p>
                                        <p class="text-base dark:text-black leading-4 text-gray-600">-$28.00 (50%)</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full">
                                        <p class="text-base text-black leading-4">Shipping</p>
                                        <p class="text-base dark:text-black leading-4 text-gray-600">$8.00</p>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base text-black font-semibold leading-4">Total</p>
                                    <p class="text-base dark:text-black font-semibold leading-4 text-gray-600">$36.00</p>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full  space-y-6">
                                <h3 class="text-xl text-black font-semibold leading-5">Shipping</h3>
                                <div class="flex justify-between items-start w-full">
                                    <div class="flex justify-center items-center space-x-4">
                                        <div class="w-8 h-8">
                                            <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                        </div>
                                        <div class="flex flex-col justify-start items-center">
                                            <p class="text-lg leading-6 text-black font-semibold">DPD Delivery<br /><span class="font-normal">Delivery with 24 Hours</span></p>
                                        </div>
                                    </div>
                                    <p class="text-lg font-semibold leading-6 text-black">$8.00</p>
                                </div>
                                <div class="w-full flex justify-center items-center">
                                    <button class="hover:bg-black dark:bg-white dark dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base leading-4 text-white">View Carrier Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                        <h3 class="text-xl text-black font-semibold leading-5">Customer</h3>
                        <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div class="flex flex-col justify-start items-start flex-shrink-0">
                                <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                    <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-base text-black font-semibold leading-4 text-left">David Kent</p>
                                        <p class="text-sm dark:text-black leading-5 text-gray-600">10 Previous Orders</p>
                                    </div>
                                </div>

                                <div class="flex justify-center text-black md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email" />
                                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg" alt="email" />
                                    <p class="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p class="text-base text-black font-semibold leading-4 text-center md:text-left">Shipping Address</p>
                                    <p class="w-48 lg:w-full dark:text-black xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div>
                                <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p class="text-base text-black font-semibold leading-4 text-center md:text-left">Billing Address</p>
                                    <p class="w-48 lg:w-full dark:text-black xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div>
                            </div>
                            <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button class="mt-6 md:mt-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border py-4 bg-black hover:bg-white text-white hover:text-black border-black w-96 2xl:w-full text-base leading-4">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
