import React from "react";
<link rel="stylesheet" href="src/style.css"></link>
import Image from "next/image";
import { useRouter } from "next/router";
import style from "../styles/homecard.module.css";
import ReactStars from "react-rating-stars-component";

function homecard() {

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
  
    return (
        <div className={'shadow-black shadow-sm hover:shadow-xl '+style.form}>
            <div className="ml-[-8.3vh] grid grid-cols-1 ">
                <img
                    className={` drop-shadow-xl max-h-[20vh] max-w-[35vh] ${style.imageCard}`}
                    src={data[0].img}
                />
            </div>
            <div className="grid grid-cols-1 mt-[1.5vh] ">
                <div className="grid grid-cols-1 w-[30vh] ">
                    <p className="ml-[-10vh] text-center justify-center text-lg bold text-black">
                        {data[0].name}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-[0vh] ">
                <div className="grid grid-cols-1 w-[30vh] ">
                    <div className=" mt-[-1.5vh]">
                        <ReactStars {...mystar} value={data[0].value} />
                    </div>
                </div>
                <div className="grid grid-cols-1 w-[50vh] ml-[-5vh]">
                    <p className={style.facilities+'text-left text-xs max-w-[50vh] mr-[20vh]' }>
                        {data[0].facilities}
                    </p>
                </div>
                <div className="grid grid-cols-1 w-[50vh] mt-1 ml-[-6.5vh]">
                    <p className="ml-[-19vh] bold text-xl"> 
                        Rp. {data[0].price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default homecard;