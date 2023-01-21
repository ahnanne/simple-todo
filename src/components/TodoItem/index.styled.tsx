import styled, { css } from "styled-components";

export const Remove = styled.button`
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
  transition: all 300ms linear;
`;

export const Check = styled.button<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 20px;
  font-size: 24px; // 아이콘 크기
  color: var(--gray);
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
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
      text-decoration: line-through;
    `}
`;

export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;
