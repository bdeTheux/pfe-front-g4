const PREFIX = process.env.URL_API ? process.env.URL_API : "http://localhost:5000/"
const API = PREFIX + ":path*"
console.log("API path: ", API)
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: API
      },
    ];
  },
};
