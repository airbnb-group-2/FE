import React from "react";
<link rel="stylesheet" href="src/style.css"></link>
import Image from "next/image";
import Article from "../assets/article.png"

function homearticle() {
    return (
        <div class=" bg-[#7F6F62] bg-opacity-50 ml-[30px] mr-[30px] mb-[50px] max-w-sm max-h-sm   overflow-hidden shadow-black shadow-md hover:shadow-none rounded-2xl ">
            <div onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
                <Image className="w-full h-full" src={Article} alt="Sunset in the mountains"/>
                <button>
                    
                </button>
            </div>
        </div>
    );
}

export default homearticle;