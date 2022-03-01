import React, { useEffect, useState } from "react";
import Image from "next/image";
import mainImg from "../../assets/detail.png";
import style from "../../styles/productdetail.module.css";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios";

function product() {

    const router = useRouter();
    let id=router.query.id
    console.log(router.query.id)

    useEffect(() => {
        axios
          .get(`http://3.1.211.120:8081/rooms/${id}`)
          .then(({ data }) => {
          setRoom(data.data)
          console.log(data.data)
          })
          .catch((err) => {
            console.log(err, "error bang");
          });
      }, []);

    const [room, setRoom] = useState([]);
    console.log(room)
    
   
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
  
    const mystar = {
      size: 30,
      value: 4,
      edit: false,
    };

    const [checkIn, setcheckIn] = useState(new Date());
    const [checkOut, setcheckOut] = useState(new Date());


    return(
        <div className={'flex justify-center z-0 '+ style.background}>
            <div className={''+ style.gambar}>
                <Image 
                src={mainImg}
                alt='room background'
                layout='fill'
                objectFit='cover'
                objectPosition='bottom'
                className="h-fit"
                />
            </div>
            <div className={style.content + " z-1 w-[60vw] h-[88.5vh] py-5 flex flex-col justify-between items-center "}>
                <h2 className="text-3xl bold text-black mt-[-2vh] mb-[2vh]">
                    {data[0].name}
                </h2>
                <div className={'drop-shadow hover:shadow-lg mt-[-1.5vh] '+style.form}>
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
                <div className={'mt-[0.5vh] max-w-[90vh] max-h-[15vh] drop-shadow hover:shadow-lg '+style.form}>
                    {/* check in date*/}
                    <div className="grid grid-cols-2 px-1">
                        <div className="grid grid-cols-1 mr-[2vh] bg-blue-500">
                            <p className=" text-lg bold text-black">
                                Check-in Date
                            </p>
                            <DatePicker className="border-black z-10" selected={checkIn} onChange={(date) => setcheckIn(date)} />
                        </div>
                        <div className=" grid grid-cols-1 ml-[2vh] bg-red-500">
                            <p className="text-lg bold text-black">
                                Check-out Date
                            </p>
                            <DatePicker className="border-black z-10" selected={checkOut} onChange={(date) => setcheckOut(date)} />
                        </div>
                    </div>
                    {/* check in date end*/}
                </div>
                <div className={'z-0 mt-[0.5vh] w-[vh] h-[15vh] drop-shadow hover:shadow-lg '+style.form}>
                    <div className="mt-[-2vh]" >
                        <p className="text-lg bold">
                            Rp. subtotal
                        </p>
                    </div>
                    <button className='z-1 rounded-lg hover:bg-gray-400 hover:text-black text-sm' onClick={() => router.push('/payment')} >
                        Reserve Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default product;