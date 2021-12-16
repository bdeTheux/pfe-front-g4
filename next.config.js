const PREFIX = process.env.URL_API
  ? process.env.URL_API
  : "https://pfe-back-g4-dev.herokuapp.com/";
const FIXED_PREFIX = PREFIX.endsWith("/") ? PREFIX : PREFIX + "/";
const API = FIXED_PREFIX + ":path*";
console.log("API path: ", API);
module.exports = {
  env: {
    customKey: PREFIX,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: API,
      },
    ];
  },
};
