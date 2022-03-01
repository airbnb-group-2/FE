import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/HOME.png";
import CatImg from "../assets/cat.png";
import Article1 from "../assets/article.png"
import Article2 from "../assets/Article2.png"
import Article3 from "../assets/Article3.png"
import { useRouter } from "next/router";
import style from "../styles/homecard.module.css";
import ReactStars from "react-rating-stars-component";

function Home() {

const router = useRouter();
const data = [
    {
    name: "Deluxe Room Joglo",
    id: 1,
    value: 3,
    facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
    price: "350.000",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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

 return(
    <section>
        <div className="grid grid-cols-1 max-h-[90vh] overflow-hidden">
            <Image src={mainImg} alt="home-image" className="relative"/>
            <div className="grid grid-co-3">
                <button className="absolute left-[9.5vw] top-[36vw] h-[5vw] w-[29vw] bg-[#7F6F62] hover:bg-white  text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-[#7F6F62] rounded-xl"
                    onClick={()=>router.push('/listrooms') }>
                    <p className="italic text-md">
                        BOOK A ROOM NOW
                    </p>
                </button>
            </div>
        </div>
        <div>
            <p className="mt-[3vh] mb-[3vh] ml-[10vh] mr-[10vh] text-4xl">
                <text className="italic">Find</text> your dream staycation <text className="text-red-700"> here  </text>
            </p>
            <div className="mt-[5vw] ml-[5vw] mr-[5vw] grid grid-cols-4">
            {/* HOME CARD 1 */}
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1"
                onClick={()=>router.push('/listrooms') }>
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
                </div>
            {/* HOME CARD 1 end*/}
            {/* HOME CARD 2 */}
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1"
                onClick={()=>router.push('/listrooms') }>
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
                </div>
            {/* HOME CARD 2 end*/}
            {/* HOME CARD 3 */}
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1"
                onClick={()=>router.push('/listrooms') }>
                    <div className={'shadow-black shadow-sm hover:shadow-xl '+style.form}>
                        <div className="ml-[-8.3vh] grid grid-cols-1 ">
                            <img
                                className={` drop-shadow-xl max-h-[20vh] max-w-[35vh] ${style.imageCard}`}
                                src={data[2].img}
                            />
                        </div>
                        <div className="grid grid-cols-1 mt-[1.5vh] ">
                            <div className="grid grid-cols-1 w-[30vh] ">
                                <p className="ml-[-10vh] text-center justify-center text-lg bold text-black">
                                    {data[2].name}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mt-[0vh] ">
                            <div className="grid grid-cols-1 w-[30vh] ">
                                <div className=" mt-[-1.5vh]">
                                    <ReactStars {...mystar} value={data[2].value} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 w-[50vh] ml-[-5vh]">
                                <p className={style.facilities+'text-left text-xs max-w-[50vh] mr-[20vh]' }>
                                    {data[2].facilities}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 w-[50vh] mt-1 ml-[-6.5vh]">
                                <p className="ml-[-19vh] bold text-xl"> 
                                    Rp. {data[2].price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* HOME CARD 3 end*/}
            {/* HOME CARD 4*/}
                <div className="ml-[2vw] mr-[2vw] grid grid-cols-1"
                onClick={()=>router.push('/listrooms') }>
                        <div className={'shadow-black shadow-sm hover:shadow-xl '+style.form}>
                            <div className="ml-[-8.3vh] grid grid-cols-1 ">
                                <img
                                    className={` drop-shadow-xl max-h-[20vh] max-w-[35vh] ${style.imageCard}`}
                                    src={data[3].img}
                                />
                            </div>
                            <div className="grid grid-cols-1 mt-[1.5vh] ">
                                <div className="grid grid-cols-1 w-[30vh] ">
                                    <p className="ml-[-10vh] text-center justify-center text-lg bold text-black">
                                        {data[3].name}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 mt-[0vh] ">
                                <div className="grid grid-cols-1 w-[30vh] ">
                                    <div className=" mt-[-1.5vh]">
                                        <ReactStars {...mystar} value={data[3].value} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 w-[50vh] ml-[-5vh]">
                                    <p className={style.facilities+'text-left text-xs max-w-[50vh] mr-[20vh]' }>
                                        {data[3].facilities}
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 w-[50vh] mt-1 ml-[-6.5vh]">
                                    <p className="ml-[-19vh] bold text-xl"> 
                                        Rp. {data[3].price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* HOME CARD 4 end*/} 
        </div>
        <div className="mt-[15vh] mb-[15vh] bg-[#f5f5f5]">
            <p className="mt-[3vh] mb-[3vh] ml-[10vh] mr-[10vh] text-4xl">
                <text className="italic">Let see</text> event around the <text className="text-red-700"> world </text>
            </p>
            <div className="algint-right    mt-[5vw] ml-[5vw] mr-[5vw] grid grid-cols-2">
                <div className="ml-[5vw] mr-[2vw] grid grid-cols-1">
                    {/*Article1 */}
                    <div>
                        <p className="text-xl bold ml-[5vh]">
                           India color festival 
                        </p>
                        <div class=" bg-[#7F6F62] bg-opacity-50 ml-[30px] mr-[30px] max-w-sm max-h-[49vh]  overflow-hidden shadow-black shadow-sm hover:shadow-xl rounded-xl">
                            <div onClick={() => window.open("https://www.youtube.com/watch?v=FqdmWQ-ACv0&t=0s")}>
                                <Image className="w-full h-[51vh]" src={Article1} alt="Sunset in the mountains"/>
                            </div>
                        </div>
                        <p className="text-lg italic mb-[50px] ml-[40vh]">
                            click to read article
                        </p>
                    </div>
                    {/*Article1 */}
                </div>
                <div className="ml-[5vw] mr-[2vw] grid grid-cols-1">
                    {/*Article3 */}
                    <div>
                        <p className="text-xl bold ml-[5vh]">
                           Event in Europe
                        </p>
                        <div class=" bg-[#7F6F62] bg-opacity-50 ml-[30px] mr-[30px] max-w-sm max-h-[49vh]  overflow-hidden shadow-black shadow-sm hover:shadow-xl rounded-xl">
                            <div onClick={() => window.open("https://www.youtube.com/watch?v=FqdmWQ-ACv0&t=0s")}>
                                <Image className="w-full h-[51vh]" src={Article2} alt="Sunset in the mountains"/>
                            </div>
                        </div>
                        <p className="text-lg italic mb-[50px] ml-[40vh]">
                            click to read article
                        </p>
                    </div>
                    {/*Article3 */}
                </div>
            </div>
        </div>  
        <div>
            <div className="mt-[5vw] ml-[5vw] mr-[5vw] grid grid-cols-2">
                <div className="ml-[5vw] mr-[2vw] grid grid-cols-1">
                    <Image src={CatImg} alt="cat-image" className=""/>
                </div>
                <div className="ml-[5vw] mr-[2vw] grid grid-cols-1">
                    {/*Article2 */}
                    <div>
                        <p className="text-xl bold ml-[5vh]">
                           Read our travel tips here!
                        </p>
                        <div class=" bg-[#7F6F62] bg-opacity-50 ml-[30px] mr-[30px] max-w-sm max-h-[49vh]  overflow-hidden shadow-black shadow-sm hover:shadow-xl rounded-xl">
                            <div onClick={() => window.open("https://www.youtube.com/watch?v=FqdmWQ-ACv0&t=0s")}>
                                <Image className="w-full h-[51vh]" src={Article3} alt="Sunset in the mountains"/>
                            </div>
                        </div>
                        <p className="text-lg italic mb-[50px] ml-[40vh]">
                            click to read article
                        </p>
                    </div>
                    {/*Article2 */}
                </div>
            </div>
        </div>  
    </section>
 );
}

export default Home;