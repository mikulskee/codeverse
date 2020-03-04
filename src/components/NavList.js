import React, { useEffect } from "react";
import styled from "styled-components";
import { closeBurgerAnimation } from "../animations/contentAnimations";
import smoothscroll from "smoothscroll-polyfill";

const Wrapper = styled.ul`
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
  @media only screen and (orientation: landscape) {
    margin: 15px 0 0;
  }
  @media only screen and (min-width: 768px) {
    margin: 40px 0 30px;
  }
  @media only screen and (min-width: 1024px) {
    transform: translateY(0);
    flex-direction: row;
    margin: 10px 0;
    padding: 0;
    box-shadow: none;
    background: none;
  }

  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (orientation: landscape) {
      margin: 5px 0;
    }
    @media only screen and (min-width: 1024px) {
      margin: 0 10px;
    }
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
      cursor: pointer;
      transition: opacity 0.25s linear;
      &:hover {
        opacity: 0.6;
      }
      @media only screen and (orientation: landscape) {
        font-size: 16px;
        padding: 7px 10px;
      }
      @media only screen and (min-width: 1920px) {
        font-size: 18px;
      }
      &.active {
        color: #e916f2;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const NavList = props => {
  const handleClick = e => {
    const el = e.target.innerHTML;
    const offset = props.off;
    const bodyRect = document.body.getBoundingClientRect().top;
    smoothscroll.polyfill();
    switch (el) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.innerWidth < 1024) {
          closeBurgerAnimation().play();
        } else return;
        break;
      case "Projects":
        const projects = document.querySelector("section.projects");
        const positionProj = projects.getBoundingClientRect().top;
        const elementPosition = positionProj - bodyRect;
        const offsetPosition = elementPosition - offset;

        if (positionProj >= 0 && window.innerWidth < 1024) {
          projects.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        if (window.innerWidth < 1024) {
          closeBurgerAnimation().play();
        } else return;

        break;
      case "Skills":
        const skills = document.querySelector("section.skills");
        const positionSkills = skills.getBoundingClientRect().top;
        const elementSkillsPosition = positionSkills - bodyRect;
        const offsetSkillsPosition = elementSkillsPosition - offset;

        if (positionSkills >= 0 && window.innerWidth < 1024) {
          skills.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: offsetSkillsPosition, behavior: "smooth" });
        }
        if (window.innerWidth < 1024) {
          closeBurgerAnimation().play();
        } else return;
        break;
      case "About Me":
        const aboutMe = document.querySelector("section.about-me");
        const positionAbout = aboutMe.getBoundingClientRect().top;
        const elementAboutPosition = positionAbout - bodyRect;
        const offsetAboutPosition = elementAboutPosition - offset;

        if (positionAbout >= 0 && window.innerWidth < 1024) {
          aboutMe.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: offsetAboutPosition, behavior: "smooth" });
        }
        if (window.innerWidth < 1024) {
          closeBurgerAnimation().play();
        } else return;

        break;
      case "Contact":
        const contact = document.querySelector("section.contact");
        const positionContact = contact.getBoundingClientRect().top;
        const elementContactPosition = positionContact - bodyRect;
        const offsetContactPosition = elementContactPosition - offset;

        if (positionContact >= 0 && window.innerWidth < 1024) {
          contact.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: offsetContactPosition, behavior: "smooth" });
        }
        if (window.innerWidth < 1024) {
          closeBurgerAnimation().play();
        } else return;

        break;
      default:
        console.log("");
    }
  };

  const coloringNavButtons = () => {
    const home = document.querySelector("header");
    const homeTop = home.getBoundingClientRect().top - 40;
    const homeHeight = -Math.round(home.getBoundingClientRect().height);
    const buttons = document.querySelectorAll("nav li button");
    const projects = document.querySelector("section.projects");
    const projectsTop = projects.getBoundingClientRect().top - 40;
    const projectsHeight = -Math.round(projects.getBoundingClientRect().height);
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
  };

  useEffect(() => {
    coloringNavButtons();
    window.addEventListener("scroll", () => {
      coloringNavButtons();
    });
  });
  return (
    <Wrapper className="nav-list">
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
    </Wrapper>
  );
};

export default NavList;
