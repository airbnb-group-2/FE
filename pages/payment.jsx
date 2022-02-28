import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/payment.png";
import style from "../styles/payment.module.css";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";
import { FaMoneyBillAlt } from "react-icons/fa";

function product() {
    const router = useRouter();
    const data = [
        {
        name: "Deluxe Room Joglo",
        id: 1,
        value: 3,
        facilities:
            "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
        price: "350.000",
        img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];
    console.log(data);
  
    const mystar = {
      size: 30,
      value: 4,
      edit: false,
    };

    return(

        <div className={'mx-[5vh] flex justify-start '+ style.background}>
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
            {/* buble payment method */}
            <div className={style.content + " z-1 w-[50vw] h-[100vh] py-5 flex flex-col justify-between items-center "}>
                <h2 className="mb-[1vh] object-left-top text-3xl bold text-black">
                    Payment
                </h2>
                <div className={' drop-shadow '+style.form}>
                    {/* DROPDOWN SECTION */}
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Select payment method
                        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </button>
                    <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul class="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    BCA click pay 
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form>
                        <div className={style.input}>
                            <input type="Name" id='Name' name='Name' placeholder='Name' required />
                            <label>Name</label>
                        </div>
                        <div className={style.input}>
                            <input type="Email" id='email' name='Email' placeholder='E-mail' required />
                            <label>E-mail</label>
                        </div>
                    </form>
                    {/*DROPDOWN SECTION END */}
                </div>
                <div className={'max-w-[90vh] max-h-[44vh] drop-shadow '+style.form}>
                    {/* show product */}
                        {data.map((el, i) => (
                        <div
                            onClick={() => router.push(`/detail/${el.id}`)}
                            className=" mb-7"
                            key={i}
                            >
                            <div className="mt-[-3vh] flex">
                                <div className=" w-1/2">
                                <img
                                    className={` ml-[-5vh] mt-[3vh] rounded-xl drop-shadow-xl ${style.imageCard}`}
                                    src={el.img}
                                />
                                </div>
                                <div className=" w-1/2">
                                <p className=" cursor-pointer text-xl font-bold mt-4">
                                    {el.name}
                                </p>
                                <div className={style.miniSeparator}></div>
                                    <p className={style.facilities+'text-xs' }>
                                        {el.facilities}
                                    </p>
                                    <ReactStars {...mystar} value={el.value} />
                                    <div className="flex">
                                        <p className=" text-2xl text-green-700">
                                        <FaMoneyBillAlt />
                                        </p>
                                        <p className="ml-2 text-lg"> Rp. {el.price}</p>
                                    </div>
                                    <div className="justify-left text-xs mb-2">
                                        check in date - check out date
                                    </div>
                                    <div className=''>
                                        <button className='ml-[28vh]  rounded-lg'>Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}  
                    {/*show product end*/}
                </div>
                <div>
                    <h3>© 2022 Beta BnB, Inc. All rights reserved</h3>
                </div>
            </div>
       </div>
    );
}

export default product;