import React, { useEffect } from "react";
import { gsap, Power1 } from "gsap/all";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import fifaDraw from "../img/project1_1.png";
import hairstyleWebsite from "../img/project2_1.png";
import changingRoom from "../img/project3_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import starsPattern from "../img/stars-pattern.png";
import { sectionTitleAnimation } from "../animations/sectionTitleAnimation";

const Wrapper = styled.section`
  position: relative;
  background-image: url(${starsPattern});
  background-repeat: no-repeat;
  background-size: 95%;
  background-position: 644% 40%;
  padding: 60px 20px 20px;
  overflow: hidden;
  z-index: 1;

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(4, 5, 25);
    background: linear-gradient(
      0deg,
      rgba(4, 5, 25, 1) 0%,
      rgba(4, 5, 25, 0.7) 25%,
      rgba(4, 5, 25, 0.7) 75%,
      rgba(4, 5, 25, 1) 100%
    );
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const ProjectsList = styled.ul`
  list-style: none;
  height: 80%;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (orientation: landscape) {
    width: 80vw;
  }

  @media only screen and (min-width: 736px) {
    margin: 50px auto 0;
    width: 80vw;
  }

  @media only screen and (min-width: 1024px) {
    width: 73vw;
  }
  @media only screen and (min-width: 1280px) {
    width: 820px;
  }
  @media only screen and (min-width: 1500px) {
    width: 1030px;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    pointer-events: none;
    margin: 35px 0;

    @media only screen and (min-width: 736px) {
      margin: 15px 0;
    }
    @media only screen and (min-width: 1024px) {
      margin: 0;
    }

    div {
      position: relative;
      pointer-events: auto !important;

      h3 {
        position: absolute;
        top: 50%;
        right: -22%;
        transform: translateY(-50%);
        color: #f2f2f2;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 14px;
        font-style: italic;
        pointer-events: none;
        visibility: hidden;
        z-index: 1;

        @media only screen and (min-width: 736px) {
          font-size: 16px;
        }
        @media only screen and (min-width: 1500px) {
          font-size: 18px;
        }
      }

      img {
        pointer-events: none;
        width: 230px;
        visibility: hidden;

        @media only screen and (min-width: 736px) {
          width: 280px;
        }
        @media only screen and (min-width: 1024px) {
          width: 340px;
        }
        @media only screen and (min-width: 1500px) {
          width: 400px;
        }
      }
    }

    .links {
      position: relative;
      display: none;

      a {
        width: 52.5px;
        text-align: center;
        position: absolute;
        color: #f2f2f2;
        top: 50%;
        left: 50%;
        font-size: 42px;
        transform: translate(-140%, -50%);
        @media only screen and (min-width: 1024px) {
          font-size: 52px;
        }
      }
      img {
        visibility: visible;
      }

      a:nth-of-type(2) {
        transform: translate(40%, -50%);
      }
    }
  }

  li:nth-child(even) {
    justify-content: flex-end;

    div {
      h3 {
        right: auto;
        left: -22%;
      }
    }
  }
`;

const Pillars = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 80px;
  top: 0;
  left: 40px;
  justify-content: space-between;
  @media only screen and (min-width: 1024px) {
    left: 5vw;
  }

  .pillar {
    position: relative;
    width: 25%;
    height: 100%;
    background-color: #b712c3;

    ::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #b712c3;
      box-shadow: 0px 0px 18px 6px rgba(183, 18, 195, 1);
    }
  }
`;

const projects = [
  {
    key: "01",
    title: "fifa draw app",
    img: fifaDraw,
    github: "https://github.com/mikulskee/fifa-draw",
    live: "https://mikulskee.github.io/fifa-draw/"
  },
  {
    key: "02",
    title: "landing page template",
    img: hairstyleWebsite,
    github: "https://github.com/mikulskee/website-hairstyle",
    live: "https://mikulskee.github.io/website-hairstyle/"
  },
  {
    key: "03",
    title: "online shop template",
    img: changingRoom,
    github: "https://github.com/mikulskee/ChangingRoom",
    live: "https://mikulskee.github.io/ChangingRoom/"
  }
];

const Projects = () => {
  const handleClick = e => {
    const tl = gsap.timeline();
    const description = e.target;

    const links = e.target.nextSibling;

    tl.set(links, { rotationX: -90 })
      .to(description, {
        duration: 0.1,
        rotationX: 90,
        ease: Power1.easeOut
      })
      .set(description, { display: "none" })
      .set(links, { display: "block" })
      .to(links, { duration: 0.1, rotationX: 0 })
      .to(links, { duration: 0.1, rotationX: -90, delay: 2.5 })
      .set(links, { display: "none" })
      .set(description, { display: "block" })
      .to(description, {
        duration: 0.1,
        rotationX: 0,
        ease: Power1.easeOut
      });
  };

  const newProjects = projects.map(item => (
    <li key={item.key}>
      <div
        onClick={handleClick}
        className={`project ${item.key} fade-in-container`}
      >
        <h3 className="project-title first-element-fade-in">{`${item.key}. ${item.title}`}</h3>
        <img
          className="second-element-fade-in"
          src={item.img}
          alt={item.title}
        />
      </div>
      <div className={`project links ${item.key}`}>
        <img src={item.img} alt={item.title} />
        <a href={item.github}>
          {" "}
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={item.live}>
          {" "}
          <FontAwesomeIcon icon={faCode} />
        </a>
      </div>
    </li>
  ));

  useEffect(() => {
    const title = document.querySelector(".projects-section-title");
    let executed = false;
    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const bottom = title.getBoundingClientRect().bottom;
      if (!executed && height >= bottom) {
        executed = true;
        sectionTitleAnimation(title);
      } else return;
    });
  });

  return (
    <Wrapper className="projects">
      <Content>
        <SectionTitle className={"projects-section-title section-title"}>
          projects
        </SectionTitle>

        <ProjectsList>{newProjects}</ProjectsList>
      </Content>
      <Pillars>
        <div className="pillar" />
        <div className="pillar" />
      </Pillars>
    </Wrapper>
  );
};

export default Projects;
