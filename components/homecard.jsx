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
        {
            name: "Deluxe Room Limasan",
            id: 2,
            value: 5,
            facilities:
                "2 Guest - 2 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking - Yogyakarta",
            price: "278.000",
            img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            },
        {
            name: "Elegance Room",
            id: 3,
            value: 4,
            facilities:
                "2 Guest - 2 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking - Yogyakarta",
            price: "280.000",
            img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            },
        {
            name: "Grandiose Room",
            id: 4,
            value: 2,
            facilities:
                "2 Guest - 2 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking - Yogyakarta",
            price: "239.000",
            img: "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
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
                    src={data[1].img}
                />
            </div>
            <div className="grid grid-cols-1 mt-[1.5vh] ">
                <div className="grid grid-cols-1 w-[30vh] ">
                    <p className="ml-[-10vh] text-center justify-center text-lg bold text-black">
                        {data[1].name}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-[0vh] ">
                <div className="grid grid-cols-1 w-[30vh] ">
                    <div className=" mt-[-1.5vh]">
                        <ReactStars {...mystar} value={data[1].value} />
                    </div>
                </div>
                <div className="grid grid-cols-1 w-[50vh] ml-[-5vh]">
                    <p className={style.facilities+'text-left text-xs max-w-[50vh] mr-[20vh]' }>
                        {data[1].facilities}
                    </p>
                </div>
                <div className="grid grid-cols-1 w-[50vh] mt-1 ml-[-6.5vh]">
                    <p className="ml-[-19vh] bold text-xl"> 
                        Rp. {data[1].price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default homecard;