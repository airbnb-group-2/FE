import React from "react";
<link rel="stylesheet" href="src/style.css"></link>
import Image from "next/image";
import Article1 from "../assets/article.png"

function homearticle() {
    return (
        <div>
            <p className="text-lg italic bold ml-[5vh]">
                Click to see the event
            </p>
            <div class=" bg-[#7F6F62] bg-opacity-50 ml-[30px] mr-[30px] mb-[50px] max-w-sm max-h-[49vh]  overflow-hidden shadow-black shadow-sm hover:shadow-xl">
                <div onClick={() => window.open("https://www.youtube.com/watch?v=FqdmWQ-ACv0&t=0s")}>
                    <Image className="w-full h-[51vh]" src={Article1} alt="Sunset in the mountains"/>
                    <button>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default homearticle;