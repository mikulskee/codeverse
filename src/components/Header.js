import React from "react";
import styled from "styled-components";
import mainBg from "../img/main_bg.jpg";

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(0);
  width: 100vw;
  height: 100vh;
  background-image: url(${mainBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-out;
  &.active {
    transform: translateY(-100%);
  }
`;

const Header = () => {
  return <Wrapper className={"header"}></Wrapper>;
};

export default Header;
