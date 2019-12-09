import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  width: 100vw;
  height: 100vh;
  background-color: pink;
  transition: transform 0.5s ease-out;
  &.active {
    transform: translateY(0);
  }
`;
const Main = () => {
  return <Wrapper className={"main"}></Wrapper>;
};

export default Main;
