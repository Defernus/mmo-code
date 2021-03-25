/* eslint-disable @typescript-eslint/no-var-requires */
const NextI18Next = require("next-i18next").default;
const config = require("next/config").default();
const path = require("path");

const { localeSubpaths } = config.publicRuntimeConfig;

module.exports = new NextI18Next({
  otherLanguages: [],
  localeSubpaths,
  ns: ["common"],
  localePath: path.resolve("./public/locales"),
});
