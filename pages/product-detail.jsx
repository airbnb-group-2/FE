import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/detail.png";
import style from "../styles/productdetail.module.css";
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
        <div className={'mx-[5vh] flex justify-end '+ style.background}>
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
                    Test
                </div>
            </div>
        </div>
    );
}

export default product;