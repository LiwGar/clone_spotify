import React from "react";
import Link from "next/link";
import Artist_1 from "./CardsArtists/Artist_1";
import Artist_2 from "./CardsArtists/Artist_2";
import Artist_3 from "./CardsArtists/Artist_3";
import Artist_4 from "./CardsArtists/Artist_4";



const ListArtists = (props) => {

    const {title, albums } = props;

    return (
        <div className="max-sm:pt-[18%] sm:pt-[10%] md:ml-[0%] md:w-[calc(100%)] md:pt-[12%] 
                lg:ml-[0%] lg:w-[calc(100%)] lg:md:pt-[12%] xl:ml-[0%] xl:w-[calc(100%)] xl:pt-[6%] lg:items-start">
            <div className="flex items-end justify-between px-6 py-1 mb-5" >
                <Link
                    className="text-spotify-white text-2xl font-bold tracking-tighter hover:underline"
                    href="/"
                    alt="recently_played" 
                >
                    {title}
                </Link>
                <Link
                    className="text-sm font-bold hover:underline"
                    href="/"
                    alt="show_all" 
                >
                    Show all
                </Link>
            </div>
            <div className="grid grid-cols-1 px-6 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Artist_1/>
                <Artist_2/>
                <Artist_3/>
                <Artist_4/>
            </div>
        </div>
    );
}

export default ListArtists;