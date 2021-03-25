import React from "react";
import { NextPageContext, NextPage } from "next";

interface Props {
  statusCode?: number;
}

// TODO error page
const Error: NextPage<Props> = ({ statusCode = 404 }: Props) => <div>{statusCode}</div>;

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err?.statusCode || 404;
  return { statusCode };
};

export default Error;
