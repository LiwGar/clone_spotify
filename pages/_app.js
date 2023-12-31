import { useState } from "react";
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Head>
          <title>Spotify - Web Player:Music for everyone</title>
          <meta name='description' content='Generate by create next app'/>
          <link rel='icon' href='https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png'/>
      </Head>
      <div className='bg-spotify-black min-h-screen pt-2 text-gray-400'>
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
