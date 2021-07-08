const SITE_URL = process.env.SITE_URL;

module.exports = {
  reacStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/e',
        destination: `${SITE_URL}/e`,
      },
      {
        source: '/e/:path*',
        destination: `${SITE_URL}/e/:path*`,
      },
    ];
  },
};
