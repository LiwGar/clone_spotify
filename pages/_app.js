import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
          <title>Clone Spotify</title>
          <meta name='description' content='Generate by create next app'/>
          <link rel='icon' href='/'/>
      </Head>
      <div className='bg-spotify-black min-h-screen text-gray-300'>
        <Header />
        <Sidebar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
