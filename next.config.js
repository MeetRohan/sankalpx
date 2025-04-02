/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD:next.config.js
=======
 
>>>>>>> 2cdd5f8 (Initial commit):next.config.mjs
  async redirects() {
    return [
      {
        source: "/admin-dashboard",
        has: [
          {
            type: "cookie",
            key: "next-auth.session-token",
            value: "(.*)",
          },
        ],
        permanent: false,
        destination: "/login",
      },
    ];
  },
};
//export default nextConfig;
module.exports = nextConfig;
