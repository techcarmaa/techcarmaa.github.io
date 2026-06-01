/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',           // ← static export for GitHub Pages
    reactStrictMode: true,
    images: {
        unoptimized: true,      // ← required for static export
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },
    // headers() removed — not supported in static export
    compress: true,
    productionBrowserSourceMaps: false,
    poweredByHeader: false,
    generateEtags: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: '**',
//             },
//         ],
//         formats: ['image/avif', 'image/webp'],
//         deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//         imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//         minimumCacheTTL: 60,
//     },
//     headers: async () => {
//         return [
//             {
//                 source: '/:path*',
//                 headers: [
//                     {
//                         key: 'X-DNS-Prefetch-Control',
//                         value: 'on',
//                     },
//                     {
//                         key: 'X-Frame-Options',
//                         value: 'SAMEORIGIN',
//                     },
//                     {
//                         key: 'X-Content-Type-Options',
//                         value: 'nosniff',
//                     },
//                     {
//                         key: 'X-XSS-Protection',
//                         value: '1; mode=block',
//                     },
//                     {
//                         key: 'Referrer-Policy',
//                         value: 'strict-origin-when-cross-origin',
//                     },
//                 ],
//             },
//         ];
//     },
//     compress: true,
//     productionBrowserSourceMaps: false,
//     poweredByHeader: false,
//     generateEtags: true,
//     pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
// };

// module.exports = nextConfig;
