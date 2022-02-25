import React from "react";
<link rel="stylesheet" href="src/style.css"></link>
import Image from "next/image";
import mainImg from "../assets/card.png";
import Star from "../assets/star.png";

function homecard() {
    return (
        <div className="bg-[#7F6F62] bg-opacity-70 ml-[30px] mr-[30px] mb-[50px] max-w-sm overflow-hidden shadow-black shadow-md hover:shadow-none rounded-2xl ">
            <Image className="w-full" src={mainImg} alt="kamar"/>
            <div class="px-[2vh] py-[2vh]">
                <div class="font-bold text-lg mb-2">Premium Joglo room</div>
                <p class="text-gray-900 text-sm mb-1">
                    <p>2 Guest - 1 Bedroom - 1 Bed</p>
                    <p>1 Bathroom - Wifi - AC - Kitchen</p>
                    Free Parking
                </p>
                <div>
                    <Image className="w-full" src={Star} alt="rating"/>
                </div>
                <div class="font-bold text-lg mt-1 mb-2">Rp.500.000</div>
            </div>
        </div>
    );
}

export default homecard;