/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.sanity.io'],
    },
    logging: {
        fetches: {
            fullUrl: true,
        }
    }
};

export default nextConfig;
