import styled, { css } from "styled-components";

export const AddButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--green);
  z-index: 5;
  cursor: pointer;
  width: 60px;
  height: 60px;
  font-size: 60px;
  color: var(--white);
  border-radius: 999px;
  border: none;
  transition: all 400ms ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      background-color: var(--error);
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

export const InsertFormPositioner = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const InsertForm = styled.form`
  background-color: var(--white);
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid var(--gray);
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid var(--grayscale-80);
  font-size: 18px;
  box-sizing: border-box;
`;
