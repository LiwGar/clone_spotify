import React from "react";
import Image from "next/image";
import { RiHome5Fill, RiSearchLine } from "react-icons/ri";


const Sidebar = () => {
    return (
    
    <div className="fixed w-[24%] h-full top-0 left-0 p-2">
        <div className="bg-spotify-gray px-6 py-6 rounded-lg">
            <div>
                <Image 
                    width={80} 
                    height={80} 
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png" 
                    alt="spotify_Logo"
                />
            </div>
            <div className="flex items-center gap-5 mt-4 font-bold">
                <RiHome5Fill className="w-7 h-7"/>
                <p>Home</p>
            </div>
            <div className="flex items-center gap-6 mt-4 font-bold">
                <RiSearchLine className="w-6 h-6"/>
                <p>Search</p>
            </div>
               
            
        </div>
    </div>
    )
};

export default Sidebar; 