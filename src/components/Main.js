import React from "react";
import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import starsPattern from "../img/stars-pattern.png";
import Projects from "./Projects";

const Wrapper = styled.main`
  padding: 20px;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  background-color: #040519;
  transition: transform 0.6s ease-out;
  background-image: url(${starsPattern});
  background-repeat: no-repeat;
  background-size: 95%;
  background-position: 644% 40%;

  h1 {
    color: #e7e7e7;
  }

  .main-content {
    margin-top: 150px;
    padding: 20px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
  }
`;
const Main = () => {
  return (
    <Wrapper className={"main"}>
      <SectionTitle className={"section-title"}>
        <span>{"{  "}</span>Projects<span>{"  }"}</span>
      </SectionTitle>
      <Projects />
    </Wrapper>
  );
};

export default Main;
