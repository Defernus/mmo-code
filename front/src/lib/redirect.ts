import Router from "next/router";
import { NextPageContext } from "next";

const redirect = async (ctx: NextPageContext, location: string): Promise<void> => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    await Router.push(location);
  }
};

export default redirect;
