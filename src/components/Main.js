import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background-color: #040519;
  transition: transform 0.6s ease-out;
  h1 {
    color: #e7e7e7;
  }
  &.active {
    transform: translateY(0);
  }
`;
const Main = () => {
  return (
    <Wrapper className={"main"}>
      <h1>{"{ Projects }"}</h1>
    </Wrapper>
  );
};

export default Main;
