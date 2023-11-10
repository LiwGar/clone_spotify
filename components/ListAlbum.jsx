import React from "react";
import Link from "next/link";


const ListAlbum = (props) => {

    const {title, albums } = props;

    return (
        <div className="bg-spotify-gray md:ml-[24%] lg:ml-[34%] xl:-ml-[41%] md:w-[calc(100%-24.6%)] lg:w-[calc(100%-34.6%)] xl:w-[calc(100%+45.6%)] md:items-start lg:items-start">
            <div className="flex items-end justify-between px-7 py-1" >
                <Link
                    className="text-spotify-white text-2xl font-bold tracking-tighter hover:underline"
                    href="/"
                    alt="spotify_lists" 
                >
                    Spotify Playlists
                </Link>
                <Link
                    className="text-sm font-bold hover:underline"
                    href="/"
                    alt="show_all" 
                >
                    Show all
                </Link>
            </div>
        </div>
    );
}

export default ListAlbum;