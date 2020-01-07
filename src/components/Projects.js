import React from "react";
import { gsap, Power1 } from "gsap/all";
import { SectionTitle } from "./SectionTitle";
import styled from "styled-components";
import fifaDraw from "../img/project1.png";
import hairstyleWebsite from "../img/project2.png";
import changingRoom from "../img/project3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import starsPattern from "../img/stars-pattern.png";

const Wrapper = styled.section`
  background-image: url(${starsPattern});
  background-repeat: no-repeat;
  background-size: 95%;
  background-position: 644% 40%;
  padding: 20px;
  h2.section-title {
    color: #e7e7e7;
  }
`;

const ProjectsList = styled.ul`
  list-style: none;
  height: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: none;
    margin: 35px 0;

    div {
      position: relative;
      pointer-events: auto !important;

      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(4, 5, 25);
        background: linear-gradient(
          77deg,
          rgba(4, 5, 25, 1) 0%,
          rgba(4, 5, 25, 0.4) 45%
        );
      }

      h3 {
        position: absolute;
        top: 50%;
        left: -40%;
        transform: translateY(-50%);
        color: #f2f2f2;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 14px;
        font-style: italic;
        pointer-events: none;
      }

      img {
        width: 190px;
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
      }

      a:nth-of-type(2) {
        transform: translate(40%, -50%);
      }
    }
  }

  li:nth-child(even) {
    justify-content: flex-start;

    div {
      ::before {
        background: rgb(4, 5, 25);
        background: linear-gradient(
          263deg,
          rgba(4, 5, 25, 1) 0%,
          rgba(4, 5, 25, 0.4) 45%
        );
      }

      h3 {
        left: auto;
        right: -40%;
      }
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
    const tl = gsap.timeline({});

    const links = e.target.nextSibling;

    tl.set(links, { rotationX: -90 })
      .to(e.target, {
        duration: 0.1,
        rotationX: 90,
        ease: Power1.easeOut
      })
      .set(e.target, { display: "none" })
      .set(links, { display: "block" })
      .to(links, { duration: 0.1, rotationX: 0 })
      .to(links, { duration: 0.1, rotationX: -90, delay: 2.5 })
      .set(links, { display: "none" })
      .set(e.target, { display: "block" })
      .to(e.target, {
        duration: 0.1,
        rotationX: 0,
        ease: Power1.easeOut
      });
  };

  const newProjects = projects.map(item => (
    <li key={item.key}>
      <div onClick={handleClick} className={`project ${item.key}`}>
        <h3>{`${item.key}. ${item.title}`}</h3>
        <img src={item.img} alt={item.title} />
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

  return (
    <Wrapper className="projects">
      <SectionTitle className={"section-title"}>
        <span>{"{  "}</span>projects<span>{"  }"}</span>
      </SectionTitle>
      <ProjectsList>{newProjects}</ProjectsList>
    </Wrapper>
  );
};

export default Projects;
