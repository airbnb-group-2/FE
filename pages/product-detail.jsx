import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/detail.png";
import style from "../styles/productdetail.module.css";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

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

    const [checkIn, setcheckIn] = useState(new Date());
    const [checkOut, setcheckOut] = useState(new Date());


    return(
        <div className={'flex justify-center '+ style.background}>
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
            <div className={style.content + " z-1 w-[60vw] h-[100vh] py-5 flex flex-col justify-between items-center "}>
                <h2 className="text-3xl bold text-black mt-[-2vh] mb-[2vh]">
                    {data[0].name}
                </h2>
                <div className={'drop-shadow hover:shadow-lg '+style.form}>
                    <div className="ml-[20vh] grid grid-cols-2 px-2 justify-center ">
                        <div clasName="grid grid-cols-1 px-2 padding">
                            <img
                                className={`ml-[-20vh] px-[0.5vh] drop-shadow-xl max-h-[34vh] max-w-[50vh] ${style.imageCard}`}
                                src={data[0].img}
                            />
                        </div>
                        <div clasName="grid grid-cols-2 max-w-[30vh]">
                            <img
                                className={`py-[0.2vh] drop-shadow-xl max-w-[30vh] max-h-[15vh] ${style.imageCard}`}
                                src={data[0].img}
                            />
                            <img
                                className={`py-[0.2vh] drop-shadow-xl max-w-[30vh] max-h-[15vh] ${style.imageCard}`}
                                src={data[0].img}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 px-2 mr-[1vh] ml-[1vh] ">
                        <div clasName="grid grid-cols-1 px-2 padding mt-[2vh]">
                            <div className="flex">
                                <ReactStars {...mystar} value={data[0].value} />
                            </div>
                            <div className>
                                <p className="ml-[-19vh] bold text-2xl"> Rp. {data[0].price}</p>
                            </div>
                        </div>
                        <div clasName="grid grid-cols-2 ">
                            <p className={style.facilities+'justify-center text-s max-w-[35vh] mt-[2vh]' }>
                                {data[0].facilities}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'mt-[1vh] max-w-[90vh] max-h-[44vh] drop-shadow hover:shadow-lg '+style.form}>
                    {/* check in date*/}
                    <div className="grid grid-cols-2 px-5">
                        <div className="grid grid-cols-1 mr-[2vh] bg-blue-500">
                            <p className="text-lg bold text-black">
                                Check-in Date
                            </p>
                            <DatePicker className="border-black" selected={checkIn} onChange={(date) => setcheckIn(date)} />
                        </div>
                        <div className=" grid grid-cols-1 ml-[2vh] bg-red-500">
                            <p className="text-lg bold text-black">
                                Check-out Date
                            </p>
                            <DatePicker selected={checkOut} onChange={(date) => setcheckOut(date)} />
                        </div>
                    </div>
                    {/* check in date end*/}
                    
                    <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul class="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                   isi
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* check out date end*/}
                    <div className="mt-2" >
                        <p className="text-lg"> Rp. subtotal</p>
                    </div>
                </div>
                <div className={'mt-[1vh] max-w-[90vh] max-h-[44vh] drop-shadow hover:shadow-lg '+style.form}>
                        <button className='rounded-lg hover:bg-gray-400 hover:text-black '>
                            Reserve Now
                        </button>
                </div>
                <div>
                    <h3>© 2022 Beta BnB, Inc. All rights reserved</h3>
                </div>
            </div>
        </div>
    );
}

export default product;