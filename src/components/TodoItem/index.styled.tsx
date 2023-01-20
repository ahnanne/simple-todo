import styled, { css } from "styled-components";
import { FiTrash2, FiCheckSquare } from "react-icons/fi";

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: var(--error);
  }

  opacity: 0;
  transition: opacity 300ms linear;
`;

export const CheckCircle = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 20px;
  border: 1px solid var(--gray);
  font-size: 24px; // 아이콘 크기
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid var(--green);
      color: var(--green);
    `}
`;

export const Text = styled.p<{ done: boolean }>`
  flex: 1; // flex-item으로서 자신이 차지할 수 있는 영역을 모두 차지하도록 함.
  font-size: 21px;
  color: var(--black-text);
  ${(props) =>
    props.done &&
    css`
      color: var(--grayscale-80);
    `}
`;

export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  &:hover {
    &{Remove} {
      opacity: 1;
    }
  }
`;
