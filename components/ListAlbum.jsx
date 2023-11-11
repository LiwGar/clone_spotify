import React from "react";
import Link from "next/link";
import Card from "./Card";


const ListAlbum = (props) => {

    const {title, albums } = props;

    return (
        <div className="bg-spotify-gray mb-4 md:ml-[24%] lg:ml-[34%] xl:-ml-[41%] md:w-[calc(100%-24.6%)] lg:w-[calc(100%-34.6%)] xl:w-[calc(100%+45.6%)] md:items-start lg:items-start">
            <div className="flex items-end justify-between px-7 py-1 mb-4" >
                <Link
                    className="text-spotify-white text-2xl font-bold tracking-tighter hover:underline"
                    href="/"
                    alt="spotify_lists" 
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
            <div className="grid grid-cols-1 px-7 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <Card />
            </div>
        </div>
    );
}

export default ListAlbum;