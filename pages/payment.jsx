import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/payment.png";
import style from "../styles/payment.module.css";

function product() {
    return(
        <div className={'mx-[10vh] flex justify-start '+ style.background}>
            <div className='h-4/5'>
                <Image 
                src={mainImg}
                alt='payment background'
                layout='fill'
                objectFit='cover'
                objectPosition='bottom'
                className=" z-0"
                />
            </div>
            <div className={style.content + " z-1 w-[50vw] h-[100vh] py-10 flex flex-col justify-between items-center "}>
                <div className={'drop-shadow '+style.form}>
                    <h2 className="mt-[-2vh] mb-[3vh]">Payment</h2>
                    <h1 className="ml-[-38.5vh]">Credit Card</h1>
                    <div className="ml-[-32.5vh] relative inline-block text-left">
                        <div>
                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Select  Card
                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    <form>
                        <div className={style.input}>
                            <input type="Name" id='Name' name='Name' placeholder='Name' required />
                            <label>Name</label>
                        </div>
                        <div className={style.input}>
                            <input type="ccNumber" id='ccNumber' name='ccNumber' placeholder='CC Number' required />
                            <label>CC Number</label>
                        </div>
                        <div className={style.input}>
                            <input type="Password" id='cwNumber' name='cwNumber' placeholder='cw Number' required />
                            <label>CW Number</label>
                        </div>
                        
                        <div className='grid grid-cols-3 mx-[0.5rem]'>
                            <div className='text-left text-[0.875rem]'>
                                <h1>Expiration date</h1>
                            </div>
                            <div className=" ml-[3vh] relative inline-block text-left">
                                <div>
                                    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Year
                                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <div className=" ml-[3vh] relative inline-block text-left">
                                <div>
                                    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Month
                                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={'mt-[-5vh] drop-shadow '+style.form}>
                    <h1>CARD YANG DI CHECKOUT</h1>
                    <div className='text-right'>
                        <button className='mt-[3vh] rounded-lg'>Checkout</button>
                    </div>
                </div>
                <div>
                <h3>© 2022 Beta BnB, Inc. All rights reserved</h3>
                </div>
            </div>
       </div>
    );
}

export default product;