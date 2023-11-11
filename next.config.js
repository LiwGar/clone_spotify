/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.edigitalagency.com.au', 'pbs.twimg.com',
                'lastfm.freetls.fastly.net']
    },
};

module.exports = nextConfig
