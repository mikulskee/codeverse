import React, { useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../img/logo.png";
import {
  openBurgerAnimation,
  closeBurgerAnimation
} from "../animations/contentAnimations";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  height: 0;
  transform: translateY(0);
  ul {
    transform: translateY(-120%);
    margin: 50px 0 30px;
    padding: 45px 0 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(4, 5, 25);
    box-shadow: 0px 20px 40px 30px rgba(4, 5, 25, 1);

    li {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        letter-spacing: 1px;
        background: none;
        border: none;
        color: #f2f2f2;
        padding: 10px 15px;
        &.active {
          color: #b712c3;
        }
      }
    }
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
  box-shadow: 0px 7px 40px 30px rgba(4, 5, 25, 1);

  img.logo {
    width: 130px;
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

  const handleClick = e => {
    const el = e.target.innerHTML;
    const offset = 40;
    const bodyRect = document.body.getBoundingClientRect().top;

    switch (el) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeBurgerAnimation().play();
        break;
      case "Projects":
        const projects = document.querySelector("section.projects");
        const positionProj = projects.getBoundingClientRect().top;
        const elementPosition = positionProj - bodyRect;
        const offsetPosition = elementPosition - offset;

        if (positionProj >= 0) {
          projects.scrollIntoView({ behavior: "smooth" });
        } else if (positionProj < 0) {
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        closeBurgerAnimation().play();

        break;
      case "Skills":
        const skills = document.querySelector("section.skills");
        const positionSkills = skills.getBoundingClientRect().top;
        const elementSkillsPosition = positionSkills - bodyRect;
        const offsetSkillsPosition = elementSkillsPosition - offset;

        if (positionSkills >= 0) {
          skills.scrollIntoView({ behavior: "smooth" });
        } else if (positionSkills < 0) {
          window.scrollTo({ top: offsetSkillsPosition, behavior: "smooth" });
        }
        closeBurgerAnimation().play();
        break;
      case "About Me":
        const aboutMe = document.querySelector("section.about-me");
        const positionAbout = aboutMe.getBoundingClientRect().top;
        const elementAboutPosition = positionAbout - bodyRect;
        const offsetAboutPosition = elementAboutPosition - offset;

        if (positionAbout >= 0) {
          aboutMe.scrollIntoView({ behavior: "smooth" });
        } else if (positionAbout < 0) {
          window.scrollTo({ top: offsetAboutPosition, behavior: "smooth" });
        }
        closeBurgerAnimation().play();

        break;
      case "Contact":
        const contact = document.querySelector("section.contact");
        const positionContact = contact.getBoundingClientRect().top;
        const elementContactPosition = positionContact - bodyRect;
        const offsetContactPosition = elementContactPosition - offset;

        if (positionContact >= 0) {
          contact.scrollIntoView({ behavior: "smooth" });
        } else if (positionContact < 0) {
          window.scrollTo({ top: offsetContactPosition, behavior: "smooth" });
        }
        closeBurgerAnimation().play();

        break;
      default:
        console.log("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const home = document.querySelector("header");
      const homeTop = home.getBoundingClientRect().top - 40;
      const homeHeight = -Math.round(home.getBoundingClientRect().height);
      const buttons = document.querySelectorAll("nav li button");
      const projects = document.querySelector("section.projects");
      const projectsTop = projects.getBoundingClientRect().top - 40;
      const projectsHeight = -Math.round(
        projects.getBoundingClientRect().height
      );
      const skills = document.querySelector("section.skills");
      const skillsTop = skills.getBoundingClientRect().top - 40;
      const skillsHeight = -Math.round(skills.getBoundingClientRect().height);
      const aboutMe = document.querySelector("section.about-me");
      const aboutMeTop = aboutMe.getBoundingClientRect().top - 40;
      const aboutMeHeight = -Math.round(aboutMe.getBoundingClientRect().height);
      const contact = document.querySelector("section.contact");
      const contactTop = contact.getBoundingClientRect().top - 40;
      const contactHeight = -Math.round(contact.getBoundingClientRect().height);

      if (homeTop > homeHeight) {
        buttons.forEach(button =>
          button.classList.contains("home")
            ? button.classList.add("active")
            : null
        );
      } else {
        buttons.forEach(button =>
          button.classList.contains("home")
            ? button.classList.remove("active")
            : null
        );
      }

      if (projectsTop > projectsHeight && projectsTop < 0) {
        buttons.forEach(button =>
          button.classList.contains("projects")
            ? button.classList.add("active")
            : null
        );
      } else {
        buttons.forEach(button =>
          button.classList.contains("projects")
            ? button.classList.remove("active")
            : null
        );
      }
      if (skillsTop > skillsHeight && skillsTop < 0) {
        buttons.forEach(button =>
          button.classList.contains("skills")
            ? button.classList.add("active")
            : null
        );
      } else {
        buttons.forEach(button =>
          button.classList.contains("skills")
            ? button.classList.remove("active")
            : null
        );
      }
      if (aboutMeTop > aboutMeHeight && aboutMeTop < 0) {
        buttons.forEach(button =>
          button.classList.contains("about-me")
            ? button.classList.add("active")
            : null
        );
      } else {
        buttons.forEach(button =>
          button.classList.contains("about-me")
            ? button.classList.remove("active")
            : null
        );
      }
      if (contactTop > contactHeight && contactTop < 0) {
        buttons.forEach(button =>
          button.classList.contains("contact")
            ? button.classList.add("active")
            : null
        );
      } else {
        buttons.forEach(button =>
          button.classList.contains("contact")
            ? button.classList.remove("active")
            : null
        );
      }
    });
  });
  return (
    <Wrapper className="closed">
      <TopBar className="top-bar">
        <img className="logo" src={logo} alt="logo" />
        <Burger handleClick={handleClickAnimation} />
      </TopBar>

      <ul className="nav-list">
        <li>
          <button className="home" onClick={handleClick}>
            Home
          </button>
        </li>
        <li>
          <button className="projects" onClick={handleClick}>
            Projects
          </button>
        </li>
        <li>
          <button className="skills" onClick={handleClick}>
            Skills
          </button>
        </li>
        <li>
          <button className="about-me" onClick={handleClick}>
            About Me
          </button>
        </li>
        <li>
          <button className="contact" onClick={handleClick}>
            Contact
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
