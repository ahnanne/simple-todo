import styled from "styled-components";

export const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid var(--gray);

  h1 {
    margin: 0;
    font-size: 36px;
    color: var(--black-text);
  }

  .day {
    margin-top: 4px;
    color: var(--black-text);
    font-size: 21px;
  }

  .tasks-left {
    color: var(--green);
    font-size: 18px;
    margin-top: 40px;
    font-weight: 700;
  }
`;
