import styled from "styled-components";
import { baseButton, mousePointer } from "./css";
import { Link } from "react-router-dom";
export const BlockButton = styled.a`
  ${baseButton};
  min-height: 36px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-style: dashed;
  transition: background 0.25s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const IconButton = styled.a`
  ${baseButton};
  width: 32px;
  height: 32px;
  transition: color 0.25s;
  &:hover {
    color: white;
  }
`;
export const LinkButton = styled(Link)`
  ${baseButton};
  padding: 4px;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

export const ImageIcon = styled.span`
  box-sizing: content-box;
  position: relative;
  padding: ${({ padding }) => padding || 4}px;
  margin: ${({ margin }) => margin || 0}px;
  width: ${({ width }) => width || 24}px;
  height: ${({ height }) => height || 24}px;
  border: 1px solid var(--color-shadow);
  border-radius: 50%;
  ${mousePointer};
  transition: background 0.3s;
  &:hover {
    background-color: white;
  }
  &::after {
    content: "";
    height: ${({ height }) => height || 24}px;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
  }
`;
