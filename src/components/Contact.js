import React, { useEffect } from "react";
import styled from "styled-components";
import contactBg from "../img/contact-bg.jpg";
import SectionTitle from "./SectionTitle";
import { sectionTitleAnimation } from "../animations/sectionTitleAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.section`
  position: relative;
  padding: 30px 20px 0;
  min-height: 120vh;
  background-image: url(${contactBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(4, 5, 25);
  background: linear-gradient(
    180deg,
    rgba(4, 5, 25, 1) 0%,
    rgba(4, 5, 25, 1) 10%,
    rgba(4, 5, 25, 0.7) 30%,
    rgba(4, 5, 25, 0.7) 75%,
    rgba(4, 5, 25, 1) 100%
  );
`;

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px 20px 0;
`;

const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #f2f2f2;
  font-size: 18px;
  line-height: 1.8;
  font-weight: bold;
`;

const Socials = styled.ul`
  margin: 40px 0;
  list-style: none;
  li {
    padding: 5px 0;
    a {
      display: flex;
      align-items: center;
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      color: #f2f2f2;
      text-decoration: none;
      span.icon {
        font-size: 26px;
        width: 50px;
        text-align: center;
      }
      span.name {
        margin-left: 15px;
      }
    }
  }
`;
const Contact = () => {
  useEffect(() => {
    const title = document.querySelector(".contact-section-title");
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
    <Wrapper className="contact">
      <Gradient />
      <SectionTitle className="contact-section-title">contact</SectionTitle>
      <Content>
        <Description>You can find me online in many places...</Description>

        <Socials>
          <li>
            <a href="https://github.com/mikulskee">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span className="name">mikulskee</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/miikulskee/">
              <span className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="name">miikulskee</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/MikulskeeTV/">
              <span className="icon">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
              <span className="name">Mateusz Mikulski</span>
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/mikulski-mateusz">
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span className="name">Mateusz Mikulski</span>
            </a>
          </li>
        </Socials>
        <Description>don't hesitate to write me a message!</Description>
      </Content>
    </Wrapper>
  );
};

export default Contact;
