import React from "react";
import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import starsPattern from "../img/stars-pattern.png";

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  transform: translateY(100%);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background-color: #040519;
  transition: transform 0.6s ease-out;
  background-image: url(${starsPattern});
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 300% 80%;

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
      <SectionTitle className={"section-title"}>
        <span>{"{  "}</span>Projects<span>{"  }"}</span>
      </SectionTitle>
    </Wrapper>
  );
};

export default Main;
