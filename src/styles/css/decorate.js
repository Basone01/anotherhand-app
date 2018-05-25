import { css } from "styled-components";
import {mousePointer} from './animate';
export const boxShadow = css`
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
`;
export const roundedBoxShadow = css`
  ${boxShadow} border-radius:4px;
`;

export const baseImageStyle = css`
  padding: 8px;
  object-fit: contain;
  object-position: center;
  flex-shrink: 0;
`;

export const inputReset = css`
  border: none;
  outline: none;
  text-align: end;
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const basicButton = css`
  display: flex;
	justify-content: center;
	align-items: center;
  ${mousePointer};
`