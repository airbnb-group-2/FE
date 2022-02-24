import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/HOME.png";
import Homecard from "../components/homecard"
import NumberFormat from "react-number-format";
import ReactLoading from "react-loading";


function Home() {


 return(
    <section>
        <div className="grid grid-cols-1">
            <Image src={mainImg} alt="home-image" className="relative"/>
            <div className="grid grid-co-3">
                <button className="absolute left-[9.5vw] top-[29vw] h-[5vw] w-[29vw] bg-[#7F6F62] hover:bg-white  text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-[#7F6F62] rounded-xl">
                    <p className="italic text-ellipsis overflow-hidden ...">
                        BOOK A ROOM NOW
                    </p>
                </button>
            </div>
        </div>
        <div>
            <p>
                test
            </p>
            <div className="mt-[5vw] ml-[5vw] mr-[5vw] grid grid-cols-4">
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    <Homecard />
                </div>
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    <Homecard />
                </div>
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    <Homecard />
                </div>
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    <Homecard />
                </div>
            </div>
        </div>    
        <div>
            <p>
                test
            </p>
            <div className="mt-[5vw] ml-[5vw] mr-[5vw] grid grid-cols-2">
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    <Homecard />
                </div>
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    <Homecard />
                </div>
            </div>
        </div>  
        <div>
            <p>
                test
            </p>
            <div className="mt-[5vw] ml-[5vw] mr-[5vw] grid grid-cols-2">
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    CAT PICTURE
                </div>
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1">
                    <Homecard />
                </div>
            </div>
        </div>  
    </section>
 );
}

export default Home;