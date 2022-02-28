import React from "react";
<link rel="stylesheet" href="src/style.css"></link>
import Image from "next/image";
import Article from "../assets/article.png"

function homearticle() {
    return (
        <div class=" bg-[#7F6F62] bg-opacity-50 ml-[30px] mr-[30px] mb-[50px] max-w-sm max-h-[50vh]  overflow-hidden shadow-black shadow-sm hover:shadow-xl rounded-xl">
            <div onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
                <Image className="w-full h-[51vh]" src={Article} alt="Sunset in the mountains"/>
                <button>

                </button>
            </div>
        </div>
    );
}

export default homearticle;