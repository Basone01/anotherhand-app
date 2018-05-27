import styled, { css } from "styled-components";
const ScrollBarStyle = css`
  &::-webkit-scrollbar {
    display: ${props => (props.noScrollbar ? "none" : "auto")};
    height: 8px;
    width: 4px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const JustFlex = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #fff;
  flex-direction: column;
`;

export const ScrollableContainer = MainContainer.extend`
  align-items: stretch;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: scroll;
  ${ScrollBarStyle} &>* {
    flex-shrink: 0;
  }
`;

export const HorizontalScrollableContainer = MainContainer.extend`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  overflow-y: hidden;
  overflow-x: scroll;
  ${ScrollBarStyle};
  & > * {
    flex-shrink: 0;
  }
`;

export const PageContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  & > ${ScrollableContainer} {
    flex-grow: 1;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  max-width: 360px;
  min-height: 96vh;
  max-height: 96vh;
  margin: 2vh auto;
  overflow-x: hidden;
  border-radius: 8px;
  box-shadow: 0 0 1px black;
  & > ${PageContainer} {
    flex-grow: 1;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    margin: 0;
    border-radius: 0;
  }
`;

const BaseNavbarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 42px;
  flex-grow:0;
  flex-shrink:0;
  background-color: #eee;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const BottomNavbarContainer = BaseNavbarContainer.extend`
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 12px;
`;

export const TopNavbarContainer = BaseNavbarContainer.extend`
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 12px;
`;

export * from "./css";
export * from "./button";
