import React, { Component } from "react";
import styled from "styled-components";

const Spinner = styled.span`
  position: relative;
  background-color: black;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  @keyframes growing {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    40% {
      opacity: 0.5;
    }
    100% {
      transform: scale(5);
      opacity: 0;
    }
  }
  animation: growing 1.5s ease-in-out infinite;
`;

const AbsoluteFullScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

const Loading = props => (
  <AbsoluteFullScreen>
    <Spinner />
    <AbsoluteFullScreen>Loading</AbsoluteFullScreen>
  </AbsoluteFullScreen>
);

export default Loading;
