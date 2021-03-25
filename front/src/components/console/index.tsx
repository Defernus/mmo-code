import { ButtonPrimary } from "components/buttons";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React, { FunctionComponent, useRef } from "react";

import {
  Wrapper,
  Buttons,
  Output,
} from "./styles";

interface Props {
  code: string;
}

const Console: FunctionComponent<Props> = (props: Props) => {
  const { code } = props;

  const output = useRef<HTMLDivElement>(null);

  const run = async () => {
    const console = {
      log: (...args: unknown[]) => {
        if (!output.current) throw new Error("no output context");
        output.current.innerHTML = `${output.current.innerHTML}\n${args.join("\n")}`;
      },
      clear: () => {
        if (!output.current) throw new Error("no output context");
        output.current.innerHTML = "";
      },
    };
    try {
      // eslint-disable-next-line no-eval
      await eval(code);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Buttons>
        <ButtonPrimary onClick={run}>
          <PlayArrowIcon />
        </ButtonPrimary>
      </Buttons>
      <Output ref={output} />
    </Wrapper>
  );
};

export default Console;
