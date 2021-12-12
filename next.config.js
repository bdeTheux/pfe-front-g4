module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://pfe-back-g4-dev.herokuapp.com/:path*",
      },
    ];
  },
};
