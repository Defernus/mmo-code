import styled from "styled-components";
import Editor from "@monaco-editor/react";

const Wrapper = styled.div`
  height: 50%;
`;

const StyledEditor = styled(Editor)`
  height: 50vh;

`;

export {
  StyledEditor,
  Wrapper,
};
