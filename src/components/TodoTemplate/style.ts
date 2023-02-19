import styled from "styled-components";
import ExternalLink from "@/components/ExternalLink";

export const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 512px;
  height: 768px;
  margin: 96px auto 32px;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: var(--box-shadow);
`;

export const A = styled(ExternalLink)`
  position: absolute;
  bottom: 60px;
  right: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 8px;
  background-color: var(--black-text);
  color: var(--white);
  font-weight: 700;
  font-size: 14px;
`;
