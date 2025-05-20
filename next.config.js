module.exports = {
  images: {
    domains: ['github.com'],
  },
  webpack: (config) => {
    // This will enable the path alias (@/)
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
}