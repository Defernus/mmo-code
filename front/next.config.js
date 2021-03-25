const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  env: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3030",
    apiPrefix: process.env.NEXT_PUBLIC_API_PREFIX || "rest/v1",
    apiTokenInBody: process.env.NEXT_PUBLIC_API_TOKEN_IN_BODY === "true",
  },
};
