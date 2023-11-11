import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiPlayFill } from "react-icons/ri";
 

 const Card = () => {
    return (
        <Link 
            href="/"  
            className="bg-spotify-lightgray p-4 flex flex-col justify-center rounded-xl hover:bg-spotify-bghover transition-all group"
        >
           <div className="mb-4 relative">
            <Image 
                src="https://lastfm.freetls.fastly.net/i/u/500x500/7827f4cbfb514b5fcb1a096868650184.jpg"
                width={150}
                height={150}
                alt="album"
                className="rounded-xl shadow-lg shadow-spotify-black"
            />
            <button className="absolute right-2 bottom-2 p-2.5 text-3xl bg-spotify-green text-spotify-black rounded-full opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-200 ">
                <RiPlayFill />
            </button>
           </div>
           <div className="items-start">
                <h5 className="text-md font-bold text-spotify-white mb-1">If I Lose Myself</h5>
                <p className="text-sm font-semibold">OneRepublic, Alesso</p>
           </div>
        </Link>
    )
 }


 export default Card;