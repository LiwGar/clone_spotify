import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiPlayFill } from "react-icons/ri";
 

 const Artist = () => {
    return ( 
    <Link 
        href="/"  
        className="bg-spotify-lightgray p-3 pt-4 pb-8 flex flex-col justify-center rounded-lg hover:bg-spotify-bghover transition-all group"
    >
        <div className="mb-4 relative max-sm:flex max-sm:items-center max-sm:justify-center sm:flex sm:justify-center md:flex md:items-center md:justify-center">
            <Image 
                src="https://pbs.twimg.com/profile_images/1691376723848257537/gLhoDnxU_400x400.jpg"
                width={200}
                height={200}
                alt="artist"
                className="rounded-full shadow-lg shadow-spotify-black"
            />
            <button className="absolute right-2 bottom-2 p-2.5 text-3xl bg-spotify-green text-spotify-black rounded-full 
                opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-200  max-sm:right-[37%] sm:right-[39%]
                md:right-12 lg:right-2 xl:right-2">
                <RiPlayFill />
            </button>
        </div>
        <div className="items-start">
                <h5 className="text-md font-bold text-spotify-white mb-1">Martin Garrix</h5>
                <p className="text-sm font-semibold">Artist</p>
        </div>
    </Link>
    )
 }

 export default Artist;