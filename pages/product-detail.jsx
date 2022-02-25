import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/detail.png";

function product() {
    return(
        <div className="grid grid-cols-1">
            <Image src={mainImg} className="relative"/>
            
        </div>
    );
}

export default product;