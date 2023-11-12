import React from "react";
import Link from "next/link";
import Popular_1 from "./PopularArtistsCards/Popular_1";
import Popular_2 from "./PopularArtistsCards/Popular_2";
import Popular_3 from "./PopularArtistsCards/Popular_3";
import Popular_4 from "./PopularArtistsCards/Popular_4";



const ListPopularArtists = (props) => {

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
                <Popular_1/>
                <Popular_2/>
                <Popular_3/>
                <Popular_4/>
            </div>
        </div>
    );
}

export default ListPopularArtists;