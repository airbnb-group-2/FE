import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../asset/HOME.png";
import Homecard from "../components/homecard"
import NumberFormat from "react-number-format";
import ReactLoading from "react-loading";


function Home() {


 return(
    <section>
        <div className="grid grid-cols-1">
            <Image src={mainImg} alt="home-image" className="relative"/>
            <div className="mt-[-100px]">
                <button className="absolute left-5  h-16 w-32 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Button
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1">
            <Homecard />
        </div>
        <div className="grid grid-cols-1">
            article
        </div>
        <div className="grid grid-cols-1">
            Mr.cat
        </div>
    </section>
 );
}

export default Home;