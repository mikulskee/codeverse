import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../img/logo.png";
import {
  openBurgerAnimation,
  closeBurgerAnimation
} from "../animations/contentAnimations";
import NavList from "./NavList";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  transform: translateY(0);
  height: 0;
  max-width: 2100px;
  @media only screen and (min-width: 2100px) {
    transform: translate(-50%, 0);
    left: 50%;
  }
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  padding: 20px 20px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  background: rgb(4, 5, 25);
  box-shadow: 0px 7px 40px 15px rgba(4, 5, 25, 1);
  @media only screen and (orientation: landscape) {
    padding: 10px 20px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5px 20px;
    position: static;
    top: inherit;
    left: inherit;
    transform: translate(0);
    background: rgba(4, 5, 25, 0.75);
    box-shadow: 0px 5px 15px 10px rgba(4, 5, 25, 0.75);
  }

  img.logo {
    width: 130px;
    @media only screen and (orientation: landscape) {
      width: 115px;
    }
    @media only screen and (min-width: 768px) {
      width: 150px;
    }
    @media only screen and (min-width: 1200px) {
      width: 165px;
    }
    @media only screen and (min-width: 1920px) {
      width: 180px;
    }
  }
`;
const Nav = () => {
  const handleClickAnimation = e => {
    e.preventDefault();
    const nav = document.querySelector("nav");
    if (nav.classList.contains("closed")) {
      openBurgerAnimation().play();
    } else if (!nav.classList.contains("closed")) {
      closeBurgerAnimation().play();
    }
  };

  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 1024);
    });
  }, []);

  const [off, setOffset] = useState();

  useEffect(() => {
    window.innerWidth < 1024 ? setOffset(40) : setOffset(30);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setOffset(30);
      } else {
        setOffset(40);
      }
    });
  }, []);

  return (
    <Wrapper className="closed">
      <TopBar className="top-bar">
        <img className="logo" src={logo} alt="logo" />
        {isMobile ? (
          <Burger handleClick={handleClickAnimation} />
        ) : (
          <NavList off={off} />
        )}
      </TopBar>
      {isMobile ? <NavList class="nav-list" off={off} /> : null}
    </Wrapper>
  );
};

export default Nav;
