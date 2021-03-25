import React, {
  FunctionComponent, useEffect, useRef, useState,
} from "react";
import Console from "components/console";
import { io, Socket } from "socket.io-client";

import {
  Wrapper,
  StyledEditor,
} from "./styles";

interface Change {
  rangeLength: number;
  rangeOffset: number;
  text: string;
}

const changesReducer = (acc: string, { rangeLength, rangeOffset, text }: Change) => (
  `${acc.slice(0, rangeOffset)}${text}${acc.slice(rangeLength + rangeOffset)}`
);

const processChange = (text: string, changes: Change[]) => changes.reduce(changesReducer, text);

const MainPage: FunctionComponent = () => {
  const [code, setCode] = useState("");
  const [changes, setChanges] = useState<Change[]>([]);
  const socket = useRef<Socket>();

  useEffect(() => {
    socket.current = io();
    socket.current.on("changes", (newChanges: Change[]) => {
      setChanges(newChanges);
    });
    socket.current.on("text", (text: string) => {
      setCode(text);
    });
  }, []);

  useEffect(() => {
    const newCode = processChange(code, changes);
    setCode(newCode);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changes]);

  return (
    <Wrapper>
      <StyledEditor
        defaultLanguage="javascript"
        value={code}
        onChange={(_, e) => {
          socket.current?.emit("changes", e.changes.map(({
            rangeLength,
            rangeOffset,
            text,
          }: Change) => ({
            rangeLength,
            rangeOffset,
            text,
          })));
        }}
      />
      <Console code={code} />
    </Wrapper>
  );
};

export default MainPage;
