import { NextPageContext } from "next/dist/next-server/lib/utils";
import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const request = (
  endpoint: string,
  config: AxiosRequestConfig,
  ctx?: NextPageContext,
): AxiosPromise => {
  const newConfig = config;
  const protocol = process.env.NODE_ENV === "production" && process.browser ? "https" : "http";
  newConfig.url = process.browser
    ? `${window.location.protocol}//${window.location.host}/${process.env.apiPrefix}/${endpoint}`
    : `${protocol}://${ctx && ctx.req && ctx.req.headers.host}/${process.env.apiPrefix}/${endpoint}`;
  newConfig.validateStatus = () => true;
  newConfig.withCredentials = true;

  if (newConfig.data && !process.env.apiTokenInBody) {
    newConfig.data = { ...newConfig.data, tokenInCookie: true };
  }

  if (ctx && ctx.req) {
    newConfig.headers ||= {};
    if (ctx.req?.headers.cookie) {
      newConfig.headers.Cookie = ctx.req?.headers.cookie;
    }
  }

  return axios(config);
};

export default request;
