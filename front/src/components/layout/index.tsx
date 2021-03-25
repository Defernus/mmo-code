import React, { FunctionComponent, ReactNode } from "react";
import {
  Wrapper,
} from "./styles";

interface Props {
  children?: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Layout;
