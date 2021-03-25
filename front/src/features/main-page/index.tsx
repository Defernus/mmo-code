import React, { FunctionComponent, useState } from "react";
import Console from "components/console";

import {
  Wrapper,
  StyledEditor,
} from "./styles";

interface Change {
  rangeLength: number;
  rangeOffset: number;
  text: string;
}

const MainPage: FunctionComponent = () => {
  const [code, setCode] = useState("");
  return (
    <Wrapper>
      <StyledEditor
        defaultLanguage="javascript"
        value={code}
        onChange={(_, e) => {
          const newCode = e.changes.reduce((acc: string, { rangeLength, rangeOffset, text }: Change) => (
            `${acc.slice(0, rangeOffset)}${text}${acc.slice(rangeLength + rangeOffset)}`
          ), code);
          setCode(newCode);
        }}
      />
      <Console code={code} />
    </Wrapper>
  );
};

export default MainPage;
