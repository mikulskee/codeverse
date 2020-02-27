import React from "react";
import styled from "styled-components";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const Wrapper = styled.main`
  background-color: #040519;
  max-width: 2100px;
  margin: 0 auto;
`;
const Main = () => {
  return (
    <Wrapper className={"main"}>
      <Projects />
      <Skills />
      <AboutMe />
    </Wrapper>
  );
};

export default Main;
