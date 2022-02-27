import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/detail.png";
import style from "../styles/productdetail.module.css";

function product() {
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
            
            </div>
        </div>
    );
}

export default product;