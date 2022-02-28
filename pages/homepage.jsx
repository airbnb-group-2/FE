import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../assets/HOME.png";
import CatImg from "../assets/cat.png";
import Homecard from "../components/homecard"
import Article1 from "../assets/article.png"
import Article2 from "../assets/Article2.png"
import Article3 from "../assets/Article3.png"

function Home() {
    
 return(
    <section>
        <div className="grid grid-cols-1 max-h-[90vh] overflow-hidden">
            <Image src={mainImg} alt="home-image" className="relative"/>
            <div className="grid grid-co-3">
                <button className="absolute left-[9.5vw] top-[29vw] h-[5vw] w-[29vw] bg-[#7F6F62] hover:bg-white  text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-[#7F6F62] rounded-xl">
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