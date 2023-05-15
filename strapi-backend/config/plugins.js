module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      apiToken: env("VERCEL_API_TOKEN"),
    },
  },
});
