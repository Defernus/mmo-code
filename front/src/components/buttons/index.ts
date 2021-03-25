import styled from "styled-components";

const ButtonBase = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  &:focus,
  &:active {
    outline: none;
  }
`;

const ButtonPrimary = styled(ButtonBase)`
  background: var(--blue-grey);
  color: var(--text-primary-color)
`;

export {
  ButtonBase,
  ButtonPrimary,
};
